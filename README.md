# Simple contact upload

## technologies used

    - Front-end
        - VueJS - SPA framework
        - VueX  - state management for Vue
    - Back-end
        - KoaJS - node js server
        - elastic search - data store
    - container
        - Docker

## Folder Structure

```
    - api //api codebase
        - controllers
        - models
        - service
        routes.js
    - dist // front end final build
    - src // vuejs components
    - tests // unit tests
```

## About the App

- a light weight app to upload and search contacts
- csv files can be uploaded , which is then queued and saved in store
- existing contacts can searched and viewed in detail

### API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/cc4964dd8e11cb09a340)

- there are two APIs endpoint as required
- `POST /import` for importing csv file
- `GET /search?query=item` for searching records

## installation

- make sure you have docker installed.
- run `docker-compose up` or `docker-compose -d`
- the app will be available at `http://localhost:8080`

## tests

- unit tests can be executed by logging in to container `docker exec -it pipedrive_web_1 bash` and running `npm run test:unit`

## improvements

Things I thing should make this app a more usable product

- e2e tests
- authetication and guarding of Apis
- UI uplifting
- more tests
