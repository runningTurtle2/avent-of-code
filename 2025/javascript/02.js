/**
 * Find all invalid ID's within a range
 * Input comes as a long line with numbers separated by commas (,) and dashes(-)
 * Rules:
 * 1. repeated patterns are invalid (55, 123123, 949494, 38593859(two 3859's))
 * 2. No leading zeros (011, 03, 099999)
 * 3. add all invalid id's to return sum: ex:(11, 44) 11+44 = 55;
 * 
 */

/** Create two functions. 
 * One will return number of invalid ID's to test function
 * Second will return the actual solution. The SUM of (ALL Invalid ID's)
 */

// Time of completion: 50 minutes

// const text = '61-71,12004923-12218173,907895-1086340,61083-74975,7676687127-7676868552,3328-4003,48-59,3826934-3859467,178-235,75491066-75643554,92-115,1487-1860,483139-586979,553489051-553589200,645895-722188,47720238-47818286,152157-192571,9797877401-9798014942,9326-11828,879837-904029,4347588-4499393,17-30,1-16,109218-145341,45794-60133,491-643,2155-2882,7576546102-7576769724,4104-5014,34-46,67594702-67751934,8541532888-8541668837,72-87,346340-480731,3358258808-3358456067,78265-98021,7969-9161,19293-27371,5143721-5316417,5641-7190,28793-36935,3232255123-3232366239,706-847,204915-242531,851-1135,790317-858666';

// // Actual function; return sum of invalid ID's
// function giftShop(test){

//     let invalidIds = 0;

//     const ALL_RANGES = test.split(',');
//     for(let i = 0; i < ALL_RANGES.length; i++){

//         // console.log(ALL_RANGES[i])

//         const LOW = ALL_RANGES[i].split('-')[0]
//         const HIGH = ALL_RANGES[i].split('-')[1]


//         // first evaluate string, if leading 0 then count UP
//         if(LOW[0] == '0'){
//             invalidIds += parseInt(LOW[0])
//         }else if( HIGH[0] == '0'){
//             invalidIds += parseInt(HIGH[0])
//         }
//         // convert string into INT
//         const LOW_NUM = parseInt(LOW) // this will remove leading 0
//         const HIGH_NUM = parseInt(HIGH)

//         for(let j = LOW_NUM; j <= HIGH_NUM; j++ ){
    
//             // get length of INT
//             const INT_LENGTH = j.toString().length;
    
//             if(INT_LENGTH % 2 == 0){
//                 //11 or 14 ...
//                 const FIRST_HALF = j.toString().slice(0, (INT_LENGTH / 2))
//                 const SECOND_HALF = j.toString().slice((INT_LENGTH / 2))
//                 // console.log('first and second', FIRST_HALF, ' ', SECOND_HALF)

//                 if(FIRST_HALF === SECOND_HALF){
//                     // console.log(`First Half: ${FIRST_HALF} and Second half ${SECOND_HALF} are repeated`)
//                     invalidIds += j
//                 }
//             } else {
//                 // console.log('ODD NUMBER did not run.........')
//             }
//         }
//         // console.log(`\nInvalid ID SUM: ${invalidIds}\n\n`)

//     };


//     return invalidIds;
// }
// const RESULT = giftShop(text)
// console.log(RESULT)

// PART TWO
function giftShopTwo(){

}
const RESULT_TWO = giftShopTwo()
console.log(RESULT_TWO)


// TEST function
const TEXT = '11-22'
function giftShopIDCheck(test){

    const LOW = test.split('-')[0]
    const HIGH = test.split('-')[1]
    // find invalid ID's
    let invalidIds = 0;

    // first evaluate string, if leading 0 then count UP
    if(LOW[0] == '0' || HIGH[0] == '0'){
        invalidIds++ 
    }
    // convert string into INT
    const LOW_NUM = parseInt(LOW) // this will remove leading 0
    const HIGH_NUM = parseInt(HIGH)


    for(let i = LOW_NUM; i <= HIGH_NUM; i++ ){
        const INT_LENGTH = i.toString().length;

        if(INT_LENGTH % 2 == 0){
            
            const FIRST_HALF = i.toString().slice(0, (INT_LENGTH / 2))
            const SECOND_HALF = i.toString().slice((INT_LENGTH / 2))

            if(FIRST_HALF === SECOND_HALF){
                console.log(`First Half: ${FIRST_HALF} and Second half ${SECOND_HALF} are repeated`)
                invalidIds++
            }
        }
    }

    return invalidIds;
}
const RESULT_TEST = giftShopIDCheck(TEXT)
console.log(RESULT_TEST)

module.exports=giftShopIDCheck