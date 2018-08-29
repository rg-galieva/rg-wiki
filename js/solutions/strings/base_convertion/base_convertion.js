/*
615 base1=7 base2=13
615(7) => (6 * 7**2) + (1 * 7**1) + 5 => 306

###  base: 13
pow  0   1    2
     1   13   169
    _____________
  1           1
  2
  3
  4
  5
  6
  7  1
  8
  9
  A      1
  B
  C
  D

306 % 169 = 137 ==> 1 * 13**2 + 137 ====> 1
137 % 13  = 7   ==> 10 * 13**1 + 7  ====> A
7 % 13    = 7   ==> 7 * 13**0       ====> 7
Result: 1A7
*/

function baseConverter(input, base1, base2) {
    if ((base1 && base2) < 2 || (base1 && base2) > 36) {
        throw new Error('Base between 2 and 36');
    }

    const stringifiedInput = input.toString();

    return parseInt(stringifiedInput, base1).toString(base2)
}


module.exports = baseConverter;