// const sum = require('./01');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
const totalZeros = require('./01')


const testArr = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82']


test('The Example Array given by the problem', () => {
    expect(totalZeros(testArr)).toBe(6)
})


