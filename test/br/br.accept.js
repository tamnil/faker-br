const assert = require('assert')

const faker = require('../../index.js')


describe('hello world',() => {


    it('hello world',()=>{

let test = [];
for(let i =1 ; i <10; i++){
        console.log(faker.br.cpf())
        console.log(faker.br.cnpj({mask:false}))
    // test.push(faker.br.cnpj())
    

}
console.log(test)
        assert(true)
    })

})
