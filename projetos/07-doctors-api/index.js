import express from 'express';
import cors from 'cors';
import { returnDoctors } from './service/returnDoctors.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {

    res.send('Doctors API working correctly, use /doctors to test ')

})

app.get('/doctors', async (req, res) => {

    try {

        const doctors = await returnDoctors();
        res.json(doctors)

    } catch (err) {
        console.err('erro na rota /doctors' + err);
        res.status(500).json({error: 'Errro ao buscar medicos'})
    }

})

app.listen(9000, () => {

    const data = new Date();
    console.log('Servidor iniciado com sucesso! rodando em: ' + data);

});