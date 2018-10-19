const supertest = require('supertest');
const assert = require('assert');


let server = supertest.agent("http://localhost:3000");

/**
 * Testing get a block (genesis block should always be there)
 */
describe('GET /block/:height', function() {
    it('respond with json containing a single block for genesis block', function(done) {
        server
        .get('/block/0')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            // console.log(res.body);
            assert.strictEqual(res.body.height, 0);
            assert.strictEqual(res.body.previousBlockHash, "");
            done();
        });
    });
});

describe('GET /block/:height', function() {
    it('respond with json containing error for invalid height', function(done) {
        server
        .get('/block/9999')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
            // console.log(res.body);
            assert(res.body.error);
            done();
        });
    });
});

/**
 * Testing block creation endpoint
 */
describe('POST /block', function() {
    it('respond with json containing new block for valid POST', function(done) {
        server
        .post('/block')
        .send({'data': 'New test block'})
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
            // console.log(res.body);
            assert(res.body.height >= 1);
            assert(res.body.previousBlockHash);
            done();
        });
    });
});

describe('POST /block', function() {
    it('respond with json containing error for invalid POST', function(done) {
        server
        .post('/block')
        .send({'invalid': 'invalid'})
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            // console.log(res.body);
            assert(res.body.error);
            done();
        });
    });
});
