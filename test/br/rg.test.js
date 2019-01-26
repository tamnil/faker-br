
'use strict'

const assert = require('assert')
const should = require('chai').should
const expect = require('chai').expect

const faker = require('../../index.js')






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



