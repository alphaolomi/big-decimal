/**
 * computePi1
 */
function computePi1() {
  document.getElementById("pi").innerHTML = 4 * atan(1);
}


/**
 * atan1
 * @param {*} x 
 */
function atan1(x) {
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

/**
 * computePi2
 */
function computePi2() {
  document.getElementById("pi").innerHTML = (4 * atan(1 / 5) - atan(1 / 239)) * 4;
}

/**
 * atan2
 * @param {*} x 
 */
function atan2(x) {
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
