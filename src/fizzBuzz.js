function Fizzbuzz() {};

// var fizzbuzz = new Fizzbuzz();

Fizzbuzz.prototype._isDivisible = function(divisor, num) {
  return (num % divisor === 0);
}

Fizzbuzz.prototype._play = function(num) {
  if(this._isDivisible(15, num)) {
    return 'FizzBuzz';
  };
  
  if (this._isDivisible(3, num)) {
    return 'Fizz';
  };

  if (this._isDivisible(5, num)) {
    return 'Buzz';
  } else {
    return num;
  };
};

Fizzbuzz.prototype.show = function() {
  for(var i = 1; i < 101; i++) {
    console.log(this._play(i));
  }
}

