/**
 *
 * @namespace faker.name
 */
function Br (faker) {

  /**
   * jobArea
   *
   * @method jobArea
   * @memberof faker.name
   */
  this.cpf =  (opts) => faker.definitions.br.cpf(opts); 

  this.cnpj = (opts) =>faker.definitions.br.cnpj(opts);

}

module['exports'] = Br;
