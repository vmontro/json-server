# JSON-SERVER

Clona il progetto

- Per eseguire il codice in development con nodemon

``` sh
npm run dev
```

- Per eseguire il codice

``` sh
npm run start
```

<br><br><br>

# Esempi di cURL

- Ottenimento

``` sh
curl -X GET -H "Content-Type: application/json" http://localhost:3000/liste/
```

- Aggiornamento

``` sh
curl -X PATCH -H "Content-Type: application/json" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/1
```

- Creazione

``` sh
curl -X POST -H "Content-Type: application/json" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/
```

- Cancellazione

``` sh
curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/liste/
```

<br><br><br>

# Configurazione docker

- Esegui il codice di seguito per creare un bridge interno a docker

``` sh
docker network create -d bridge --subnet=172.21.0.0/16 --gateway=172.21.0.1 json_server_bridge
```

- Scarica il file __docker-compose.yml__ ed esegui questo codice nel terminale

``` sh
docker-compose up -d
```
