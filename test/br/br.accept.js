const assert = require('assert')
const should = require('chai').should
const expect = require('chai').expect

const faker = require('../../index.js')



//helper functions:
const testSize = 1000;
const counter = x => Array(x).fill(undefined);
const batchTest = x => counter(testSize).map(x);


// warzone for development
describe('warzone',() => {
    describe('welcome to main warzone',()=>{

        it('tests area',()=>{
            console.log(faker.br.credit_card('VISA'))
            console.log(faker.commerce.product())




            console.log(
    Object.getOwnPropertyNames(faker.br.credit_card),
                faker.br.credit_card.a
            )



        })


    })

})

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

describe('test RG  ', () => {
    const rg = require('../../lib/locales/pt_BR/br/document/rg.js')


    describe('unit test Rg', () => {
        it('is istring',() => {
            assert(rg().length === 9 , 'rg is equal  9' )
            assert(typeof rg()  === 'string', 'rg equal string')
        })
    })

    describe('rg functional test',() => {

let  br = faker.br
        assert(typeof br.rg === 'function',' is function')
        assert(typeof br.rg() === 'string', 'is string' )
        assert( br.rg().length === 9 , 'is length 9' )
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

