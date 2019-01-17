'use strict'


const rng = x => Math.round(Math.random() * x)
const mod = (x, y) => Math.round(x - Math.floor(x / y) * y)
const sumNumbers = xs =>
    xs
        .slice()
        .reverse()
        .reduce((acc, a, b) => acc + a * (b + 2), 0)

/**
 * Gera números de CPF válidos
 * @param {String} [mask] - Máscara a ser aplicada no número gerado
 * @param {String} [placeholder='x'] - Caratér placeholder usado na máscara
 * @return {String}
 * @example
 * gerarCPF()
 * @example <caption>Usando máscaras</caption>
 * gerarCPF('xxx.xxx.xxx-xx')
 * @example <caption>Usando máscaras com placeholder customizado</caption>
 * gerarCPF('___.___.___-__', '_')
 */
const gerarCPF = (mask, placeholder = 'x') => {
    const numbers = []

    while (numbers.length < 9) {
        numbers[numbers.length] = rng(9)
    }

    while (numbers.length < 11) {
        let last = 11 - mod(sumNumbers(numbers), 11)

        if (last > 9) {
            last = 0
        }

        numbers[numbers.length] = last
    }

    const result = numbers.join('')

    if (!mask) {
        return result
    }

    if (mask.match(new RegExp(placeholder, 'g')).length < 11) {
        throw new Error('The CPF mask should contain 11 placeholders')
    }

    const placeholderRegex = new RegExp(placeholder)
    for (let i = 0; i < 11; i++) {
        mask = mask.replace(placeholderRegex, result[i])
    }

    return mask
}
/*
let ret = []

for (let i = 0 ; i< 1000000; i++){
    ret.push(gerarCPF())
}
// let ret = [gerarCPF(),gerarCPF()]
ret.push(ret)
*/


module.exports = gerarCPF
