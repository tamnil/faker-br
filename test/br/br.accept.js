const assert = require('assert')
const should = require('chai').should
const expect = require('chai').expect

const faker = require('../../index.js')



//helper functions:
const testSize = 1000;
const counter = x => Array(x).fill(undefined);
const batchTest = x => counter(testSize).map(x);


describe('test cpf unit tests',() => {



    it('Should test cpf unmasked type and size ',()=>{
        batchTest(() => {
            let cpf = faker.br.cpf()
            expect(cpf.length).to.be.equal(11,'cpf length is not equal 11')
            expect(cpf).to.be.an('string', 'cpf is not string')
        });
    })

})

describe('Test Credit Card BR', () => {

    it('',() => {




    })

})


describe('', () => {
    describe('', () => {
        it('',() => {
        })
    })
})

describe('', () => {
    describe('', () => {
        it('',() => {
        })
    })
})

