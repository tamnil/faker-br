/*
 *   Calculate Credit Card
 *
 *       
 *
 */

//datasets


const amount =  1;

const ccData = require('./credit_card_data.json').card_data

const getCcBrands = () => Object.keys(ccData)

//helper functions
var pseudoRandom = Math.random;

const add = x => y => x + y;
const multiply = x => y => x * y;

const plusTwo =  add(2);

const timesTwo =  multiply(2);


const ifMoreThanNineThenReset = (x) => (x > 9) ? (x - 9) : (x)

const isDefined = (el) => typeof el != 'undefined';

const digitsLeft = (ccnumber,length) => ccnumber.length < (length - 1);

const isLastElement = (pos,len)  => pos != (len - 2);

const addDigit = (str) => str + Math.floor(pseudoRandom()*10);

const mergeObject = (acc,el) =>  Object.assign( acc, el)

const reverseString =  el => el.split('').reverse().reduce((acc,el) => acc + el) ;

const checkDigit = sum => (( Math.floor(sum/10) + 1) * 10 - sum) % 10;

const schemaFormatter =  (el) => 
    ({ [el]: {
        prefixList : ccData[el].prefix,
        digitCount : ccData[el].digitCount
    }})

const Schemes = getCcBrands().map(schemaFormatter).reduce(mergeObject)

const mountFinaCcNumber = (ccnumber,sum) => ccnumber += checkDigit(sum);   

const createUndefinedArrayByLength = (length) => Array(length).fill(undefined);

const reverseCCnumber = (reversedCCnumberString) => 
    createUndefinedArrayByLength(reversedCCnumberString.length)
        .map((val,idx) => parseInt( reversedCCnumberString.charAt(idx) )) 



const calculateOdd = pos => timesTwo( reversedCCnumber[ pos ] ); 

const randomArrayIndex = (prefixList) =>  Math.floor(pseudoRandom() * prefixList.length);

const reversedCCnumber = (ccnum) => reverseCCnumber(reverseString(ccnum))


const ifLastElemmentAddChecksum = (pos, len, sum, ccNumber) => {

    return isLastElement(pos, len) ?  add(sum) (reversedCCnumber(ccNumber)[ pos + 1 ]) : sum ;
}





const checksumCard = (ccNumber,len,pos = 0,sum = 0) => {
    var odd = timesTwo( reversedCCnumber(ccNumber)[ pos ] );
    sum = add(ifMoreThanNineThenReset(odd))(sum)
    sum = ifLastElemmentAddChecksum(pos,len,sum,ccNumber);
    pos = plusTwo(pos);

    return  (pos < len - 1)?  checksumCard(ccNumber, len, pos, sum) : sum
}



const generateDigits = (ccnumber,length) => {

    ccnumber = addDigit(ccnumber );
    return digitsLeft(ccnumber,length) ? generateDigits(ccnumber,length) : ccnumber
}
const  completed_number = (prefix, length) => {

    const ccnumber = generateDigits(prefix,length);
    const sum = checksumCard(ccnumber,length)


    // calculate check digit
    return mountFinaCcNumber(ccnumber,sum);

}

/**
 * Actually generate a credit card number
 */

const  credit_card_number = (prefixList, length) => {
    let ccnumber = prefixList[ randomArrayIndex(prefixList) ];
    return completed_number(prefixList[ randomArrayIndex(prefixList) ], length)
}

/**
 * The entry-point function
 */


const creditCard = function(CardScheme, howMany, randomGen){
    pseudoRandom = randomGen || pseudoRandom;
    // var amount = howMany || 1;
    // Try to get configs to the selected Scheme

    let selectedCard = isDefined( Schemes[CardScheme] ) ? CardScheme : "mastercard";
    return   credit_card_number(
        Schemes[selectedCard].prefixList,
        Schemes[selectedCard].digitCount,
        amount
    );
}



module.exports = creditCard
