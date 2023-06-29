const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server è stato avviato PORTA=${port}`);
});


/**
 * Se vuoi emulare il funzionamento di Firebase RealTime Database
 * in modo da creare chiavi univoche per liste
 * usa il seguente codice
 */

/* const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// funzione di middleware per generare il valore casuale e racchiudere i dati
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const randomKey = new Date().getTime();
    req.body = {
      randomKey,
      data: req.body
    };
  }

  next();
});
const port = 3000;
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server è stato avviato PORTA=${port}`);
}); */
