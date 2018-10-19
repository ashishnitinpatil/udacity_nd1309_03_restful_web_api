# Restful Web APIs

Project #3 of Udacity Blockchain Developer Nanodegree (ND1309)


### Summary

This project provides API endpoints for creating & getting blocks from the chain. It builds on top of project #2 (private blockchain) & utilizes the Express.js framework along with a few other libraries (see package.json for more).

It primarily provides the following endpoints

- GET `/block/<block-height>`
- POST `/block`  
    `data: <block-data>`

Both endpoints should return (for valid `block-height` and `block-data`) the corresponding block in the JSON response.
e.g.
```
{
   "hash": "6a74771c27d4ed065c2913075c4c3f4327422dd7d72af30ecb5abf76094f3b6d",
   "height": 1,
   "body": "New test block",
   "time": "1539968434793",
   "previousBlockHash": "4224767e2443e8d78786484d8f78117b0703d10574f294d61108e92e61571c82"
}
```

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

- Use NPM to install all dependencies
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