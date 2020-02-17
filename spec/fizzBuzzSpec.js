describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('a number is', function() {
    it('divisible by three', function() {
      expect(fizzbuzz._isDivisible(3, 3)).toBe(true);
    });

    it ('not divisible by three', function() {
      expect(fizzbuzz._isDivisible(3, 4)).toBe(false);
    });
  });

  describe('play', function() {
    it('returns FizzBuzz for numbers divisible by fifteen', function() {
      expect(fizzbuzz._play(30)).toEqual('FizzBuzz');
    });

    it('returns Fizz for numbers divisible by three', function() {
      expect(fizzbuzz._play(9)).toEqual('Fizz');
    });

    it('returns Buzz for numbers divisible by five', function() {
      expect(fizzbuzz._play(10)).toEqual('Buzz');
    });

    it('returns the number for other cases', function() {
      expect(fizzbuzz._play(11)).toEqual(11);
    })
  });
});