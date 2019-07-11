const request = require('supertest');
const db = require('../db/index');
const app = require('../server/app');
const express = require('express');


describe('Test the root path', () => {
    //test GET api
    test('It should response with good GET request', async () => {
        const response = await request(app).get('/gallery:listingid');
        expect(response.statusCode).toBe(200);
    });

    test('It should 404 with bad GET request', async () => {
        const response = await request(app).get('/gallery150');
        expect(response.statusCode).toBe(404);
    });
})
