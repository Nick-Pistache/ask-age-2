const express = require('express');
const connection = require('./conf');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.put('/api/employee/:id', (request, response) => {
  const idEmployee = request.params.id;
  const formData = request.body;
  connection.query('UPDATE employee SET ? WHERE id=?',[formData,idEmployee], (err,results) => {
    if (err) {     
      console.log(err);
      response.status(500).send("Erreur lors de la modification d'un employé");
    } else {
      response.sendStatus(200);
    }
  })
});

app.get('/api/employees',(request,response) => {
  connection.query('SELECT * from employee', (err, results) => {
    if (err) {      
      response.status(500).send('Erreur lors de la récupération des employés');
    } else {      
      response.json(results);
    }
  });

});

app.post('/api/employees', (request, response) => {  
  const formData = request.body;  
  connection.query('INSERT INTO employee SET ?', formData, (err, results) => {
    if (err) {     
      console.log(err);
      response.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      response.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
