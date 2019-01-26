#!/usr/bin/env node
/*
*   Tamnil Saito Junior 2019
*
*
*
*/

const faker = require('./')

const argv = process.argv

const stripFirstTwo = (el , idx) =>  idx > 1 

const args = argv.filter(stripFirstTwo)

const mainArg = args[0];

const log = console.log

const fakerCategoriesPath = mainArg ? mainArg.split('.') : ['cli-help'];

const isFirstElement = (idx) => idx === 0;

const fakerMainCategory = faker[fakerCategoriesPath[0]]

const generateFakerFunction = (acc,el,idx) => isFirstElement(idx ) ?  acc : acc[el]

const evaluatedFaker = fakerCategoriesPath.reduce( generateFakerFunction ,fakerMainCategory)

const response = evaluatedFaker ? evaluatedFaker() : 'undefined Faker-br function';

console.log(response)

