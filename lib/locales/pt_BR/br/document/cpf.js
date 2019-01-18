'use strict'


const rng = x => Math.round(Math.random() * x)
const mod = (x, y) => Math.round(x - Math.floor(x / y) * y)
const sumNumbers = xs =>
    xs
        .slice()
        .reverse()
        .reduce((acc, a, b) => acc + a * (b + 2), 0)
const format = (cpf) => strip(cpf).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");


const strip = (cpf) => (cpf || "").toString().replace( /[^\d]/g, "" );

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
const gerarCPF = (opts = {}, placeholder = 'x') => {
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

    let result = numbers.join('')

    return opts.format ? format(result) :  result

}

module.exports = gerarCPF
