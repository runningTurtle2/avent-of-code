
const fs = require('node:fs');

fs.readFile('/home/running/dev/avent_of_code/2025/input/01.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  countZeros(data)
});

// 7199
function countZeros(file) {
  let zeroCount = 0; // our return
  let current = 50; // default 50
  const inputArr = file.split('\n');
  //const inputArr = file;
  for (let i = 0; i < inputArr.length; i++) {
    const prevPosition = current;
    const isAdd = (inputArr[i].charAt(0) == 'R') ? true : false;
    let distance = parseInt(inputArr[i].substr(1, inputArr[i].length))
    let fullRotation = parseInt(distance / 100) 

    console.log('Value: .....', inputArr[i])
    console.log(`Direction-0: ${inputArr[i].charAt(0)}`)
    console.log('Distance-0: ', distance)
    console.log('Current-0:  ', current)
    console.log('ZeroCount-0:', zeroCount)
    console.log(`Rotations-0: ${fullRotation}\n`)

    zeroCount += fullRotation;
    distance %= 100  

      console.log('Distance-1: ', distance)
      console.log('ZeroCount-1:', zeroCount, '\n')
      if (isAdd) {
        current += distance
  
      } else {
        current -= distance;

        if(current < 0){
          current += 100;
        }
      }

      console.log('Current-1: ', current)
      current %= 100;
      console.log('Current-2: ', current, '\n')
      
      if(current == 0 || prevPosition != 0 && (
      (prevPosition > current && isAdd) || 
      (prevPosition < current && !isAdd))
      ){

        zeroCount++
        console.log('Current-3:  ', current)
        console.log('ZeroCount-2:', zeroCount , '\n')
        
      }
  }
  console.log('Total ZeroCounts: ', zeroCount)
}
