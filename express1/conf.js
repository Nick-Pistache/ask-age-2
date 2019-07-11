const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Booba92izi*', // le mot de passe
database :  'employee_table_data', // le nom de la base de données
});
module.exports = connection;