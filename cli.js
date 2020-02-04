#!/usr/bin/env node
/*
*   Tamnil Saito Junior 2019
*
*
*
*/

'use strict'

const _ = require('lodash')

// console.log(_)

const faker = require('./')

const argv = process.argv

const isFunction =  data => typeof data  === 'function';

const removeFirstTwo = ([x,y,...z]) =>  z

const args = removeFirstTwo(argv)

const first = ([x,...y]) => x

const mainArg = first(args);

const fakerCategoriesPath =  mainArg.split('.') || ['cli-help'];

const isZero = (num) => num === 0;

const fakerMainCategory = faker[first(fakerCategoriesPath)]

const generateFakerFunction = (acc,el,idx) => isZero(idx ) ?  acc : acc[el]

const evaluatedFaker = fakerCategoriesPath.reduce( generateFakerFunction ,fakerMainCategory)

const response = evaluatedFaker ? evaluatedFaker : 'undefined Faker-br function';

if(typeof response === 'function'){
console.log(response())
}else{
console.log(response)
}

