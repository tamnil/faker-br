const assert = require('assert')
const should = require('chai').should
const expect = require('chai').expect

const faker = require('../../index.js')


describe('hello world',() => {


    it('Should return ',()=>{


        let test = [];
        for(let i =1 ; i <10; i++){
            // console.log(faker.br.cpf())
            console.log(faker.br.cnpj({mask:false}))
            // test.push(faker.br.cnpj())

            expect(faker.br.cpf().length).to.be.equal(11)
            expect(faker.br.cpf()).to.be.an('string')
            console.log(faker.br.cpf({format:true}) )
            console.log(faker.br.cnpj({format:true}) )

        }

        console.log(test)
        assert(true)
    })

})
