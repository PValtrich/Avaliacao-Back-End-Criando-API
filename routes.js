const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', async (req, res) => {
  try {
    const queryResult = await db.query('SELECT * FROM Reservas');
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar os agendamentos.');
  }
});

module.exports = router;