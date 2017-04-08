const should = require('chai').should();

const  fizzBuzzGenerator = require('../fizzBuzzer');

describe('fizzBuzzGenerator', function() {
  it('should return fizz if num divisible by 3, buzz if divisible by 5, and fizz-buzz if divisible by both', function() {
    const normalCases = [
    {num: 33, expected: 'fizz'},
    {num: 10, expected: 'buzz'},
    {num: 30, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzGenerator(input.num);
      answer.should.equal(input.expected);
    });
  });
});