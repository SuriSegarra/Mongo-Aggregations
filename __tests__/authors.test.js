const { getBooks, getAuthor, getAuthors } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
// const Author = require('../lib/models/Author');


describe('author routes', () => {
  it('creates an author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send({
        name: 'Random-Author'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Random-Author',
          __v: 0
        });
      });
  });

  // it('gets all authors', async() => {
  //   const authors = await getAuthors();

  //   return request(app)
  //     .get('/api/v1/authors')
  //     .then(res => {
  //       expect(res.body).toEqual(authors);
  //     });
  // });
});
