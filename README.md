# Faker-br - Baseado no faker-br para desenvolvimento no Brasil

* Tamnil Saito Jr. < tamnil@gmail.com >




Fork baseado no Faker.js para implementação no Brasil em lingua portuguesa. Este pacote mantém todas as definições de linguagem do Faker.js V 4.0.x. o idioma principal foi alterado de en para "pt_BR" , e fallback para "en". Portanto a língua nativa do faker se torna o português.
    As funçoẽs nativas do faker foram mantidas.

incluisão da seguintes funções:

- gerador de cpf
- gerador de cnpj
- gerador de RG (todo)
- gerador de CEP (todo)
- gerador de profissões (todo)



## Uso

    var faker = require('faker-br');
    
    console.log(faker.br.cnpj());    
    let meuCpf = faker.br.cpf();
    
As funçoes básicas são do faker 4.1 (https://github.com/Marak/faker.js).  
    
### Browser

    <script src = "faker-br.js" type = "text/javascript"></script>
    <script>
      var randomName = faker.name.findName(); // Caitlyn Kerluke
      var randomEmail = faker.internet.email(); // Rusty@arne.info
      var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    </script>

### Node.js

    var faker = require('faker-br');

### Aplicação

    var randomName = faker.br.cpf(); // Rowan Nikolaus
    var randomEmail = faker.br.cnpj(); // Kassandra.Haley@erich.biz

## API


## Implementações para pt_BR

name.gender
name.firstname (extended)
name.male_first_name (new)
name.female_first_name (new)
name.name (new)
name.gender (new)
name.prefix (new)
name.title (new)





### API Methods
#### faker-br
* br
  * cpf
  * cnpj
  
* address
  * zipCode
  * city
  * cityPrefix
  * citySuffix
  * streetName
  * streetAddress
  * streetSuffix
  * streetPrefix
  * secondaryAddress
  * county
  * country
  * countryCode
  * state
  * stateAbbr
  * latitude
  * longitude
* commerce
  * color
  * department
  * productName
  * price
  * productAdjective
  * productMaterial
  * product
* company
  * suffixes
  * companyName
  * companySuffix
  * catchPhrase
  * bs
  * catchPhraseAdjective
  * catchPhraseDescriptor
  * catchPhraseNoun
  * bsAdjective
  * bsBuzz
  * bsNoun
* database
  * column
  * type
  * collation
  * engine
* date
  * past
  * future
  * between
  * recent
  * soon
  * month
  * weekday
* fake
* finance
  * account
  * accountName
  * mask
  * amount
  * transactionType
  * currencyCode
  * currencyName
  * currencySymbol
  * bitcoinAddress
  * ethereumAddress
  * iban
  * bic
* hacker
  * abbreviation
  * adjective
  * noun
  * verb
  * ingverb
  * phrase
* helpers
  * randomize
  * slugify
  * replaceSymbolWithNumber
  * replaceSymbols
  * shuffle
  * mustache
  * createCard
  * contextualCard
  * userCard
  * createTransaction
* image
  * image
  * avatar
  * imageUrl
  * abstract
  * animals
  * business
  * cats
  * city
  * food
  * nightlife
  * fashion
  * people
  * nature
  * sports
  * technics
  * transport
  * dataUri
* internet
  * avatar
  * email
  * exampleEmail
  * userName
  * protocol
  * url
  * domainName
  * domainSuffix
  * domainWord
  * ip
  * ipv6
  * userAgent
  * color
  * mac
  * password
* lorem
  * word
  * words
  * sentence
  * slug
  * sentences
  * paragraph
  * paragraphs
  * text
  * lines
* name
  * firstName
  * lastName
  * findName
  * jobTitle
  * prefix
  * suffix
  * title
  * jobDescriptor
  * jobArea
  * jobType
* phone
  * phoneNumber
  * phoneNumberFormat
  * phoneFormats
* random
  * number
  * float
  * arrayElement
  * objectElement
  * uuid
  * boolean
  * word
  * words
  * image
  * locale
  * alphaNumeric
  * hexaDecimal
* system
  * fileName
  * commonFileName
  * mimeType
  * commonFileType
  * commonFileExt
  * fileType
  * fileExt
  * directoryPath
  * filePath
  * semver


## Localization



### Individual Localization Packages

By default, requiring `faker` will include *all* locale data.
In a production environment, you may only want to include the locale data for a specific set of locales.

```js
// loads only de locale
var faker-br = require('faker/locale/de');
```

## Setting a randomness seed

If you want consistent results, you can set your own seed:

```js
faker.seed(123);
us of version `v2.0.0` faker-br has support for multiple localities.

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to de
faker.setLocale("de");
// or
faker.locale = "de";
```
var firstRandom = faker.random.number();

// Setting the seed again resets the sequence.
faker.seed(123);

var secondRandom = faker.random.number();

console.log(firstRandom === secondRandom);
```

## Tests

    npm install .
    make test

You can view a code coverage report generated in coverage/lcov-report/index.html.

## Building faker-br

faker-br uses [gulp](http://gulpjs.com/) to automate it's build process. Running the following build command will generate new browser builds, documentation, and code examples for the project.

```
npm run-script build
```

## Building JSDocs

```
npm run-script doc
```


## Maintainer

#### Tamnil Saito Junior <tamnil@gmail.com>

Faker-br - Copyright (c) 2018
Tamnil Saito Junior 

http://github.com/tamnil/faker-br/

Faker-br was forked by and has used data definitions from:
 * http://github.com/marak/faker.js/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

-----------------------------------

Permissão é concedida, gratuitamente, a qualquer pessoa que obtiver
uma cópia deste software e dos arquivos de documentação associados
"Software"), para lidar com o Software sem restrições, incluindo
sem limitação os direitos de usar, copiar, modificar, mesclar, publicar,
distribuir, sublicenciar e / ou vender cópias do Software, e para
permitir que pessoas a quem o Software é fornecido façam isso, sujeitas a
as seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser
incluído em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO,
EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS
COMERCIABILIDADE, ADEQUAÇÃO A UM FIM ESPECÍFICO E
NÃO INFRAÇÃO. EM NENHUM CASO, OS AUTORES OU OS TITULARES DOS DIREITOS DE AUTOR
RESPONSÁVEL POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRAS RESPONSABILIDADES, QUER EM AÇÃO
CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE, FORA OU EM CONEXÃO
COM O SOFTWARE OU O USO OU OUTRAS OFERTAS NO SOFTWARE.






