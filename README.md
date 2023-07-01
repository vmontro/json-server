# JSON-SERVER

1. Clona il progetto


- Eseguire il codice

``` sh
npm run start
```

- Eseguire il codice in development con __nodemon__

``` sh
npm run dev
```


- Compilare .exe

``` sh
npm run build
```

<br><br><br>

# Esempi di cURL

## NO TOKEN

- GET

``` sh
curl -X GET -H "Content-Type: application/json" http://localhost:3000/liste/
```

- PATCH

``` sh
curl -X PATCH -H "Content-Type: application/json" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/1
```

- POST

``` sh
curl -X POST -H "Content-Type: application/json" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/
```

- DELETE

``` sh
curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/liste/
```

<br><br>

## CON TOKEN

- GET

``` sh
curl -X GET -H "Authorization: Bearer IL_TUO_JWT" http://localhost:3000/liste/
```

- PATCH

``` sh
curl -X PATCH -H "Authorization: Bearer IL_TUO_JWT" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/1
```

- POST

``` sh
curl -X POST -H "Authorization: Bearer IL_TUO_JWT" -d "{\"nome\": \"sia\", \"data\": \"01-07-2023\" }" http://localhost:3000/liste/
```

- DELETE

``` sh
curl -X DELETE -H "Authorization: Bearer IL_TUO_JWT" http://localhost:3000/liste/1
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
