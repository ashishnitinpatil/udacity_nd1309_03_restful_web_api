# Restful Web APIs

Project #3 of Udacity Blockchain Developer Nanodegree (ND1309)


### Summary

This project provides API endpoints for creating & getting blocks from the chain. It builds on top of project #2 (private blockchain) & utilizes the Express.js framework along with a few other libraries (see package.json for more).

It primarily provides the following endpoints

- GET `/block/<block-height>`
- POST `/block`  
    `body: <block-data>`

e.g.
```
$ curl http://localhost:8000/block/0
{
   "hash": "5a42bcc937c2da2d39f43393b9712f21de58d1087d7a4184b420dbd75d9ac550",
   "height": 0,
   "body": "Genesis block",
   "time": "1540028273724",
   "previousBlockHash": ""
}
```
```
$ curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"New block"}'
{
    "hash": "1ff05eea43a7aa092c345b497930613d06c86341cb2aa7c12648e97f9a003c2e",
    "height": 1,
    "body": "New block",
    "time": "1540028275653",
    "previousBlockHash": "5a42bcc937c2da2d39f43393b9712f21de58d1087d7a4184b420dbd75d9ac550"
}
```

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the [Node.js® web site](https://nodejs.org/en/).

Use NPM to install all dependencies
```
npm install
```


### Starting the server

You may start the API server with `npm start` or `node server.js`


### Testing

The test folder contains the relevant code for testing the API endpoints.
```
npm test
```
