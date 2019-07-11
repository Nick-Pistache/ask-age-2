const express = require('express');
const connexion = require('./conf');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.delete('/api/movies/:id', (request, response) => {    
    const idMovie = request.params.id;  
    connexion.query('DELETE FROM movie WHERE id = ?', [idMovie], error => {  
      if (error) {
        console.log(error);
        response.status(500).send("Erreur lors de la suppression d'un film");
      } else {  
        response.sendStatus(200);
      }
    });
});

app.put('/api/movies/:id', (request, response) => {
    const idMovie = request.params.id;
    const formData = request.body;
    connexion.query('UPDATE movie SET ? WHERE id=?',[formData,idMovie], (error,results) => {
      if (err) {     
        console.log(error);
        response.status(500).send("Erreur lors de la modification d'un film");
      } else {
        response.sendStatus(200);
      }
    })
  });

app.post('/api/movies', (request,response) => {
    const formdata = request.body;
    connexion.query('INSERT INTO movie SET ?', formdata, (error,results) => {
        if(error) {
            console.log(error);
            response.status(500).send("Erreur lors de la sauvegarde d'un film");
        } else {
            response.sendStatus(200);
        }
    })
})

app.get('/api/movies',(request,response) => {
    connexion.query('SELECT * FROM movie', (error,results) => {
        if (error) {
            response.status(500).send('Impossible de récupérer les films');
        } else {
            response.json(results);
        }
    })
});

app.get('/api/movies/names', (request,response) =>{
    connexion.query('SELECT name FROM movie', (error,results) => {
        if(error) {
            response.status(500).send('Impossible de récupérer les noms des films');            
        } else {
            response.json(results);
        }
    })
});

app.listen(port, (error) => {
    if (error) {
        throw new Error('Something bad happened...');
      }    
      console.log(`Server is listening on ${port}`);
});