const giftShop = require('./02')

// Gift Shop Problem Test One
// const test_giftShopOne = '11-22';
// const test_giftShopTwo = '95-115';
// const test_giftShopThree = '998-1012';
// const test_giftShopFour = '1188511880-1188511890';
// const test_giftShopFive = '222220-222224';
// const test_giftShopSix = '1698522-1698528';
// const test_giftShopSeven = '446443-446449';
// const test_giftShopEight = '38593856-38593862';

//const test_giftShop = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862';

// test('GiftShop example 1: should return 2 (11 and 22 are invalid)', () => {
//     expect(giftShop(test_giftShopOne)).toBe(2)
// })
// test('GiftShop example 2: should return 1 (99 is invalid) ', () => {
//     expect(giftShop(test_giftShopTwo)).toBe(1)
// })
// test('GiftShop example 3: should return 1 (1010 is invalid)', () => {
//     expect(giftShop(test_giftShopThree)).toBe(1)
// })
// test('GiftShop example 4: should return 1 (1188511885 is invalid) ', () => {
//     expect(giftShop(test_giftShopFour)).toBe(1)
// })
// test('GiftShop example 5: should return 1 (222222 is invalid) ', () => {
//     expect(giftShop(test_giftShopFive)).toBe(1)
// })
// test('GiftShop example 6: should return 0 (None are invalid) ', () => {
//     expect(giftShop(test_giftShopSix)).toBe(0)
// })
// test('GiftShop example 7: should return 1 (446446 is invalid) ', () => {
//     expect(giftShop(test_giftShopSeven)).toBe(1)
// })
// test('GiftShop example 8: should return 1 (38593859 is invalid) ', () => {
//     expect(giftShop(test_giftShopEight)).toBe(1)
// })

// Actual test
// test('GiftShop should return 1227775554', () => {
//     expect(giftShop(test_giftShop)).toBe(1227775554)
// })


/** Part Two */
const GIFT_SHOP_TWO = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
const test_giftShopOne = '11-22';
const test_giftShopTwo = '95-115';
const test_giftShopThree = '998-1012';
const test_giftShopFour = '1188511880-1188511890';
const test_giftShopFive = '222220-222224';
const test_giftShopSix = '1698522-1698528';
const test_giftShopSeven = '446443-446449';
const test_giftShopEight = '38593856-38593862';
const test_giftShopNine = '565653-565659';
const test_giftShopTen = '824824821-824824827';
const test_giftShopEleven = '2121212118-2121212124';

test('GiftShop example 1: should return 2 (11 and 22 are invalid)', () => {
    expect(giftShop(test_giftShopOne)).toBe(2)
})
test('GiftShop example 2: should return 2 (99 and 111 are invalid) ', () => {
    expect(giftShop(test_giftShopTwo)).toBe(2)
})
test('GiftShop example 3: should return 2 (999 and 1010 are invalid)', () => {
    expect(giftShop(test_giftShopThree)).toBe(2)
})
test('GiftShop example 4: should return 1 (1188511885 is invalid) ', () => {
    expect(giftShop(test_giftShopFour)).toBe(1)
})
test('GiftShop example 5: should return 1 (222222 is invalid) ', () => {
    expect(giftShop(test_giftShopFive)).toBe(1)
})
test('GiftShop example 6: should return 0 (None are invalid) ', () => {
    expect(giftShop(test_giftShopSix)).toBe(0)
})
test('GiftShop example 7: should return 1 (446446 is invalid) ', () => {
    expect(giftShop(test_giftShopSeven)).toBe(1)
})
test('GiftShop example 8: should return 1 (38593859 is invalid) ', () => {
    expect(giftShop(test_giftShopEight)).toBe(1)
})
test('GiftShop example 9: should return 1 (565656 is invalid) ', () => {
    expect(giftShop(test_giftShopNine)).toBe(1)
})
test('GiftShop example 10: should return 1 (824824824 is invalid) ', () => {
    expect(giftShop(test_giftShopTen)).toBe(1)
})
test('GiftShop example 11: should return 1 (2121212121 is invalid) ', () => {
    expect(giftShop(test_giftShopEleven)).toBe(1)
})

// Actual test
test('GiftShop should return 4174379265', () => {
    expect(giftShop(test_giftShop)).toBe(4174379265)
})