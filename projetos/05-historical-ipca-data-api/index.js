import express from 'express';
const app = express();

import historicoInflacao from './data/data.js';


// The first API route should return the entire collection of application data.
app.get('/historicoIPCA', (req, res) => {

    res.json(historicoInflacao);

});


// The second API route should return a data history of the collection, referring to a specific year.
app.get('/historicoIPCA/ano', (req, res) => {

    let ano = Number(req.params.ano);

    if (isNaN(ano)) {
        return res.status(404).json({erro: 'Ano invalido'})
    }

    let specificYear = historicoInflacao.filter(specificYear => specificYear.ano === ano);

    res.json(specificYear)

});


// The third API route should return an element from the collection, according to the element's identification code (id).
app.get('/historicoIPCA/id/:id', (req, res) => {

    let id = Number(req.params.id);

    if(isNaN(id)) {
        return res.status(404).json({error: 'id invalido'});
    };

    let specificItem = historicoInflacao.find(item => item.id  === id);

    res.json(specificItem);

})



// The fourty route should return a readjustment calculation
app.get('/reajuste', (req, res) => {

    const { valor, mesInicial, anoInicial, mesFinal, anoFinal } = req.query;

    if (!valor || !mesInicial || !anoInicial || !mesFinal || !anoFinal) {
        return res.status(404).json({erro: 'Todos os parametros devem ser numeros basicos'})
    }

    const valorNum = Number(valor);
    const mesIni = Number(mesInicial);
    const anoIni = Number(anoInicial);
    const mesFim = Number(mesFinal);
    const anoFim = Number(anoFinal);        

if (isNaN(valorNum) || isNaN(mesIni) || isNaN(anoIni) || isNaN(mesFim) || isNaN(anoFim)) {
        return res.status(400).json({ erro: 'Todos os parâmetros devem ser números válidos' });
    }

    if (mesIni < 1 || mesIni > 12 || mesFim < 1 || mesFim > 12) {
        return res.status(400).json({ erro: 'Meses devem estar entre 1 e 12' });
    }

    if (anoIni > anoFim || (anoIni === anoFim && mesIni > mesFim)) {
        return res.status(400).json({ erro: 'Data inicial deve ser anterior ou igual à data final' });
    }

    let resultado = valorNum;

    for (let ano = anoIni; ano <= anoFim; ano++) {
        const mesStart = (ano === anoIni) ? mesIni : 1;
        const mesEnd = (ano === anoFim) ? mesFim : 12;

        for (let mes = mesStart; mes <= mesEnd; mes++) {
            const registro = historicoInflacao.find(r => r.ano === ano && r.mes === mes);
            
            if (registro) {
                resultado *= (1 + (registro.ipca / 100));
            } else {
                console.warn(`IPCA não encontrado para ${mes}/${ano} - ignorando`);
            }
        }
    }

    res.json({
        valorOriginal: valorNum,
        periodo: `${mesInicial}/${anoInicial} → ${mesFinal}/${anoFinal}`,
        valorReajustado: Number(resultado.toFixed(2)),
        fatorAcumulado: Number((resultado / valorNum).toFixed(4))
    });

})


app.listen(8080, () => {
    console.log('API runing on port 8080')
})  