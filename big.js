// Simple JS
const bigOne = new Big(1)
let preciseX = bigOne.div(5)

let x = 1/5




// Complex Atan

var precision = 300
Big.DP = precision

function computePi() {
  var bigOne = new Big(1)	
  document.getElementById('pi').innerHTML = 
    ((atan(bigOne.div(5)).times(4)).minus(atan(bigOne.div(239)))).times(4)
	.toPrecision(precision)
}

function atan(x) {
  var preciseX = new Big(x);
  var result = preciseX;
  var xSquared = preciseX.times(preciseX);
  
  var term = preciseX;
  var divisor = new Big(1);
  
  while (term.times(new Big(10).pow(precision)) > 1) {
    divisor = divisor.plus(2);
    term = term.times(xSquared);
    result = result.minus(term.div(divisor));

    divisor = divisor.plus(2);
    term = term.times(xSquared);
    result = result.plus(term.div(divisor));
  }
  
  return result;
}