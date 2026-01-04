
// const testArr = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82']
// countZeros(testArr)

function countZeros(file) {
  let totalZeros = 0; // our return
  let current = 50; // default 50
  const MAX = 99;
  const MIN = 0;
  let passesZero = 0;

  const inputArr = file;

  for (let i = 0; i < inputArr.length; i++) {
    const isAdd = (inputArr[i].charAt(0) == 'R') ? true : false;
    const number = parseInt(inputArr[i].substr(1, inputArr[i].length))
    let isZero = (current === 0) ? true : false;

    if (isAdd) {
      let temp = (current + number)



      while (temp > MAX) {
        temp -= 100;

        if (temp !== 0) {
          passesZero++
        }
      }
      current = temp;

    } else {
      let temp = (current - number)
      if (isZero && temp < MIN) {
        passesZero--
      }
      while (temp < MIN) {
        temp += 100;

        if (temp !== 0) {
          passesZero++
        }
      }

      current = temp;

    }


    if (current === 0) { totalZeros++ }

  }
  return totalZeros+passesZero;
}
module.exports=countZeros
