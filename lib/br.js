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
  this.rg =  (opts) => faker.definitions.br.rg(opts); 

  this.cnpj = (opts) =>faker.definitions.br.cnpj(opts);
  this.credit_card = (opts) =>faker.definitions.br.credit_card(opts);

}

module['exports'] = Br;
