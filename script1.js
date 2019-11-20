function computePi() {
    document.getElementById('pi').innerHTML = (4 * atan(1/5) - atan(1/239)) * 4
  }
  
  function atan(x) {
    var result = x;
    var xSquared = x * x;
    
    var term = x;
    var divisor = 1;
    
    while (term != 0) {
      divisor += 2;
      term *= xSquared;
      result -= term / divisor;
  
      divisor += 2;
      term *= xSquared;
      result += term / divisor;
    }
    
    return result;
  }