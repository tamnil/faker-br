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
  this.cpf = function () {
    return faker.random.arrayElement(faker.definitions.br.cpf);
  };

  this.cnpj = function () {
    return faker.random.arrayElement(faker.definitions.br.cnpj);
  };

}

module['exports'] = Br;
