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
  this.jobArea = function () {
    return faker.random.arrayElement(faker.definitions.br.cpf);
  };

}

module['exports'] = Br;
