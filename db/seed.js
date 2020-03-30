const Author = require('../lib/models/Author');
const Book = require('../lib/models/Books');
const chance = require('chance').Chance();

module.exports = async({ authorsToCreate = 5, booksToCreate = 10 } = {}) => {
  const name = ['Malcolm-Gladwell', 'Gabriel-Garcia-Marques', 'Random-Author', 'I am out of names'];
  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.pickone(name),
  })));
  await Book.create([...Array(booksToCreate)].map(() => ({
    authorId: chance.pickone(authors)._id,
    title: chance.animal(),
  })));
};

