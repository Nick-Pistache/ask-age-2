const express = require('express');
const app = express();
const port = 3000;

app.get('/api/movies', (request, response) => {
  response.send('Récupération de tous les films');
});

app.get('/api/movies/:idfilm', (request, response) => {
    const idfilm = request.params.idfilm; 
    response.json( {id: idfilm});
});

app.get('/api/employee/status', (request, response) => {
    response.sendStatus(304);
});

app.get('/api/employee', (request, response) => {
    const name = request.query.name; 
    response.status(404).send("Impossible de récupérer l'employé " + name);
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});