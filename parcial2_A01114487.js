// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM Alumnos';

//Queries
var insert_1 = 'INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES(\'Sofia Vega Zambada\', \'A01114487\',\'sofia.vega18@gmail.com\',\'ITC\');'
var insert_2 = 'INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES(\'Jose Carlos del Castillo Estrada\', \'A00822554\',\'a00822554@tec.mx\',\'ITC\');'
var consulta = 'SELECT * FROM Alumnos'
var actualizar = 'UPDATE Alumnos SET Nombre = \'Otro nombre\' WHERE Id = 2'
var borrar = 'DELETE FROM Alumnos WHERE Id = 2'

// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'parcial2_A01114487'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(insert_1, function (err, result){
      // QUERY 1 - INSERT
      if (err) throw err;
      console.log("Insertar primer registro")
      console.log(result)
  });

  con.query(sql, function (err, result) {
    // Consulta adicional para mostrar el estado actual de la base de datos
    // después de la ultima query
    if (err) throw err;
    console.log("\nEstado actual de la base de datos:")
    console.log("Id         |   Nombre")
    console.log("------------------------------------------------------")
    for(i=0; i<result.length; i++){
    	console.log(result[i].Identificador + "  |   " + result[i].Nombre);
    }
    console.log("\n");
  });

  con.query(insert_2, function (err, result){
      // QUERY 2 - INSERT
      if (err) throw err;
      console.log("Insertar segundo registro")
      console.log(result)
  });


  con.query(sql, function (err, result) {
    // Consulta adicional para mostrar el estado actual de la base de datos
    // después de la ultima query
    if (err) throw err;
    console.log("\nEstado actual de la base de datos:")
    console.log("Id         |   Nombre")
    console.log("------------------------------------------------------")
    for(i=0; i<result.length; i++){
    	console.log(result[i].Identificador + "  |   " + result[i].Nombre);
    }
    console.log("\n");
  });
  
  con.query(consulta, function (err, result){
      // QUERY 3 - SELECT
      if (err) throw err;
      console.log("Consultar alumnos")
      console.log(result)
  });

  con.query(sql, function (err, result) {

      // Consulta adicional para mostrar el estado actual de la base de datos
      // después de la ultima query
    if (err) throw err;
    console.log("\nEstado actual de la base de datos:")
    console.log("Id         |   Nombre")
    console.log("------------------------------------------------------")
    for(i=0; i<result.length; i++){
    	console.log(result[i].Identificador + "  |   " + result[i].Nombre);
    }
    console.log("\n");
  });

  con.query(actualizar, function (err, result){
      // QUERY 4 - UPDATE
      if (err) throw err;
      console.log("Actualizar nombre 2")
      console.log(result)
  });

  con.query(sql, function (err, result) {
      // Consulta adicional para mostrar el estado actual de la base de datos
      // después de la ultima query
    if (err) throw err;
    console.log("\nEstado actual de la base de datos:")
    console.log("Id         |   Nombre")
    console.log("------------------------------------------------------")
    for(i=0; i<result.length; i++){
    	console.log(result[i].Identificador + "  |   " + result[i].Nombre);
    }
    console.log("\n");
  });
  con.query(borrar, function (err, result){
      // QUERY 5 - DELETE
      if (err) throw err;
      console.log("Borrar alumno 2")
      console.log(result)
  });

  con.query(sql, function (err, result) {
      // Consulta adicional para mostrar el estado actual de la base de datos
      // después de la ultima query
    if (err) throw err;
    console.log("\nEstado actual de la base de datos:")
    console.log("Id         |   Nombre")
    console.log("------------------------------------------------------")
    for(i=0; i<result.length; i++){
    	console.log(result[i].Identificador + "  |   " + result[i].Nombre);
    }
    console.log("\n");
  });
});
