import express from 'express';
import pool from './conection.js';
import { returnChamps, returnChampID, returnChampYear } from './service/returnChamps.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    console.log(`[${new Date().toISOString()}] Requisição em /campeonatos - ano=${req.query.ano || 'todos'}`);

    try {
        const year = req.query.ano;
        let champs;

        if (year) {
            console.log('→ Buscando por ano:', year);
            champs = await returnChampYear(Number(year));
        } else {
            console.log('→ Buscando todos os campeonatos');
            champs = await returnChamps();
        }

        console.log(`→ Resultado do banco: ${champs?.length || 0} registros`);

        if (!champs || champs.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum campeonato encontrado' });
        }

        res.json(champs);
    } catch (err) {
        console.error('ERRO em /campeonatos:');
        console.error(err);
        res.status(500).json({ 
            mensagem: 'Erro interno do servidor',
            detalhe: err.message || 'Erro desconhecido'
        });
    }
});

app.get('/campeonatos/:id', async (req, res) => {
    console.log(`[${new Date().toISOString()}] Requisição em /campeonatos/:id - id=${req.params.id}`);

    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ mensagem: 'ID inválido' });
        }

        console.log('→ Buscando campeonato ID:', id);
        const champ = await returnChampID(id);

        if (!champ) {
            return res.status(404).json({ mensagem: 'Campeonato não encontrado' });
        }

        res.json(champ);
    } catch (err) {
        console.error('ERRO em /campeonatos/:id:');
        console.error(err);
        res.status(500).json({ 
            mensagem: 'Erro interno do servidor',
            detalhe: err.message || 'Erro desconhecido'
        });
    }
});

app.listen(8080, async () => {
    const data = new Date().toLocaleString('pt-BR');
    console.log(`Servidor iniciado em ${data} → porta 8080`);

    try {
        console.log('Testando conexão com o banco...');
        const connection = await pool.getConnection();
        console.log('Conexão OK! Thread ID:', connection.threadId);
        connection.release();
    } catch (err) {
        console.error('Falha ao conectar no banco no startup:');
        console.error(err);
    }
});