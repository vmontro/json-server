## JSON-SERVER

- Crea un nuovo progetto NodeJS

``` sh
npm init -y
```

- Installa libreria json-server

``` sh
npm install json-server
```

- Crea i file __index.json__ e copia il codice:

``` js
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
```

- Crea il file __db.json__ e inizializzalo nel seguente modo:

``` json
{}
```

- Per eseguire il codice in development con nodemon

``` sh
node dev
```

- Per eseguire il codice

``` sh
node start
```

<br>

---

# Configurazione docker

- Esegui il codice di seguito per creare un bridge interno a docker

``` sh
docker network create -d bridge --subnet=172.21.0.0/16 --gateway=172.21.0.1 json_server_bridge
```

- Scarica il file __docker-compose.yml__ ed esegui questo codice nel terminale

``` sh
docker-compose up -d
```
