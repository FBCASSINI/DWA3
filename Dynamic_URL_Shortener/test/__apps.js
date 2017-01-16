const request = require('supertest');
const expect = require('chai').expect;
const rewire = require('rewire');
const app1 = rewire('../src/routes/api/users');
const express = require('express');
const app = request('http://localhost:3000');
//server = require('../src/server.js');

/*describe('App Routes', () => {
  var server;
  var app;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });
*/


  // Test for Multiple Apps
  it('GET /api/v1/users returns multiple apps', (done) => {
    app.get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.app = apps[0]

        expect(apps.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single app
  it('GET /api/v1/users/:id returns an app obj with id, title, description, and releaseDate properties', (done) => {
      app.get('/api/v1//users/' + this.app.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const app = res.body;
        expect(app).to.have.property('id')
        expect(app).to.have.property('longurl')
        expect(app).to.have.property('shorturl')
      })
      .end(done)
  });


  it('POST /api/v1/users Posts an app obj.', (done) => {
    app.post('/api/v1//users')
    .set('Accept', 'application/json')
    .expect((res) => {
      const app = res.body
    })
    .end(done);
  })


  it('Delete /api/v1/users/:id Deletes an app obj with id.', (done) => {
    app.delete('/api/v1//users' + this.app.id)
    .set('Accept', 'application/json')
    .expect((res) => {
      const app = res.body
    })
    .end(done)
  })
