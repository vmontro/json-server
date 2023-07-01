const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
const TOKEN = 'il_tuo_segreto';

// Funzione di verifica del token
function authenticateToken(req, res, next) {
  const authToken = req.headers.authorization;
  if (authToken) {
    // Verifica l'autenticità del token JWT
    jwt.verify(authToken, TOKEN, (err, user) => {
      if (err) {
        res.status(403).json({ error: 'Token JWT non valido' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token JWT mancante' });
  }
}


server.use(middlewares);
server.use(authenticateToken); // Utilizza il middleware di verifica del token
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
