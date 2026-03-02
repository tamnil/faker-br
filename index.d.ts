/**
 * TypeScript type definitions for faker-br
 *
 * faker-br is a Brazilian extension of Faker.js (v4.x) that adds CPF, CNPJ,
 * RG, and credit card generators under the `faker.br` namespace, along with
 * pt_BR as the default locale.
 *
 * @see https://github.com/tamnil/faker-br
 */

// -- Brazilian extension interfaces ------------------------------------------

interface BrCpfOptions {
  /** If true, returns formatted CPF (XXX.XXX.XXX-XX). Default: false (digits only). */
  format?: boolean;
}

interface BrCnpjOptions {
  /** If true, returns formatted CNPJ (XX.XXX.XXX/XXXX-XX). Default: false (digits only). */
  format?: boolean;
}

interface FakerBr {
  /**
   * Generate a valid Brazilian CPF (Cadastro de Pessoa Fisica).
   * @param opts - Optional formatting options.
   * @returns A valid 11-digit CPF string, optionally formatted.
   * @example
   * faker.br.cpf()               // "12345678901"
   * faker.br.cpf({ format: true }) // "123.456.789-01"
   */
  cpf(opts?: BrCpfOptions): string;

  /**
   * Generate a valid Brazilian CNPJ (Cadastro Nacional de Pessoa Juridica).
   * @param opts - Optional formatting options.
   * @returns A valid 14-digit CNPJ string, optionally formatted.
   * @example
   * faker.br.cnpj()               // "12345678000190"
   * faker.br.cnpj({ format: true }) // "12.345.678/0001-90"
   */
  cnpj(opts?: BrCnpjOptions): string;

  /**
   * Generate a Brazilian RG (Registro Geral) number.
   * @returns A 9-digit RG string.
   * @example
   * faker.br.rg() // "123456789"
   */
  rg(): string;

  /**
   * Generate a valid credit card number.
   * @param cardScheme - Card brand: "visa", "mastercard", or "amex". Default: "mastercard".
   * @returns A valid credit card number string with Luhn checksum.
   * @example
   * faker.br.credit_card()             // "5412345678901234"
   * faker.br.credit_card("visa")       // "4123456789012345"
   */
  credit_card(cardScheme?: string): string;
}

// -- Core Faker module interfaces --------------------------------------------

interface FakerName {
  firstName(gender?: 0 | 1): string;
  lastName(gender?: 0 | 1): string;
  findName(firstName?: string, lastName?: string, gender?: 0 | 1): string;
  gender(): string;
  prefix(gender?: 0 | 1): string;
  suffix(): string;
  title(): string;
  jobTitle(): string;
  jobDescriptor(): string;
  jobArea(): string;
  jobType(): string;
}

interface FakerAddress {
  zipCode(format?: string): string;
  zipCodeByState(state?: string): string;
  zipCodeValidByState(state?: string): string;
  zipCodeValid(): string;
  city(format?: string): string;
  cityPrefix(): string;
  citySuffix(): string;
  streetName(): string;
  streetAddress(useFullAddress?: boolean): string;
  streetSuffix(): string;
  streetPrefix(): string;
  secondaryAddress(): string;
  county(): string;
  country(): string;
  countryCode(): string;
  state(useAbbr?: boolean): string;
  stateAbbr(): string;
  latitude(max?: number, min?: number, precision?: number): string;
  longitude(max?: number, min?: number, precision?: number): string;
  direction(useAbbr?: boolean): string;
  cardinalDirection(useAbbr?: boolean): string;
  ordinalDirection(useAbbr?: boolean): string;
  nearbyGPSCoordinate(
    coordinate?: [number, number],
    radius?: number,
    isMetric?: boolean
  ): [string, string];
}

interface FakerCompany {
  companyName(format?: number): string;
  companySuffix(): string;
  suffixes(): string[];
  catchPhrase(): string;
  catchPhraseAdjective(): string;
  catchPhraseDescriptor(): string;
  catchPhraseNoun(): string;
  bs(): string;
  bsAdjective(): string;
  bsBuzz(): string;
  bsNoun(): string;
}

interface FakerFinance {
  account(length?: number): string;
  accountName(): string;
  routingNumber(): string;
  mask(length?: number, parens?: boolean, ellipsis?: boolean): string;
  amount(
    min?: number,
    max?: number,
    dec?: number,
    symbol?: string
  ): string;
  transactionType(): string;
  currencyCode(): string;
  currencyName(): string;
  currencySymbol(): string;
  bitcoinAddress(): string;
  creditCardNumber(provider?: string): string;
  creditCardCVV(): string;
  ethereumAddress(): string;
  iban(formatted?: boolean): string;
  bic(): string;
}

interface FakerImage {
  image(width?: number, height?: number, randomize?: boolean): string;
  imageUrl(
    width?: number,
    height?: number,
    category?: string,
    randomize?: boolean,
    https?: boolean
  ): string;
  avatar(): string;
  abstract(width?: number, height?: number, randomize?: boolean): string;
  animals(width?: number, height?: number, randomize?: boolean): string;
  business(width?: number, height?: number, randomize?: boolean): string;
  cats(width?: number, height?: number, randomize?: boolean): string;
  city(width?: number, height?: number, randomize?: boolean): string;
  food(width?: number, height?: number, randomize?: boolean): string;
  nightlife(width?: number, height?: number, randomize?: boolean): string;
  fashion(width?: number, height?: number, randomize?: boolean): string;
  people(width?: number, height?: number, randomize?: boolean): string;
  nature(width?: number, height?: number, randomize?: boolean): string;
  sports(width?: number, height?: number, randomize?: boolean): string;
  technics(width?: number, height?: number, randomize?: boolean): string;
  transport(width?: number, height?: number, randomize?: boolean): string;
}

interface FakerLorem {
  word(num?: number): string;
  words(num?: number): string;
  sentence(wordCount?: number, range?: number): string;
  sentences(sentenceCount?: number, separator?: string): string;
  paragraph(sentenceCount?: number): string;
  paragraphs(paragraphCount?: number, separator?: string): string;
  slug(wordCount?: number): string;
  lines(lineCount?: number): string;
  text(times?: number): string;
}

interface FakerHacker {
  abbreviation(): string;
  adjective(): string;
  noun(): string;
  verb(): string;
  ingverb(): string;
  phrase(): string;
}

interface FakerInternet {
  avatar(): string;
  email(firstName?: string, lastName?: string, provider?: string): string;
  exampleEmail(firstName?: string, lastName?: string): string;
  userName(firstName?: string, lastName?: string): string;
  protocol(): string;
  url(): string;
  domainName(): string;
  domainWord(): string;
  domainSuffix(): string;
  ip(): string;
  ipv6(): string;
  userAgent(): string;
  color(format?: string): string;
  password(
    len?: number,
    memorable?: boolean,
    pattern?: RegExp,
    prefix?: string
  ): string;
}

interface FakerDatabase {
  column(): string;
  type(): string;
  collation(): string;
  engine(): string;
}

interface FakerPhone {
  phoneNumber(format?: string): string;
  phoneNumberFormat(arrayIndex?: number): string;
  phoneFormats(): string;
}

interface FakerDate {
  past(years?: number, refDate?: Date): Date;
  future(years?: number, refDate?: Date): Date;
  between(from: Date | string, to: Date | string): Date;
  recent(days?: number, refDate?: Date): Date;
  soon(days?: number, refDate?: Date): Date;
  month(options?: { abbr?: boolean; context?: boolean }): string;
  weekday(options?: { abbr?: boolean; context?: boolean }): string;
}

interface FakerCommerce {
  color(): string;
  department(): string;
  productName(): string;
  productAdjective(): string;
  productMaterial(): string;
  product(): string;
  price(
    min?: number,
    max?: number,
    dec?: number,
    symbol?: string
  ): string;
}

interface FakerSystem {
  fileName(ext?: string, type?: string): string;
  commonFileName(ext?: string, type?: string): string;
  mimeType(): string;
  commonFileType(): string;
  commonFileExt(type?: string): string;
  fileType(): string;
  fileExt(mimeType?: string): string;
  directoryPath(): string;
  filePath(): string;
  semver(): string;
}

interface FakerGit {
  branch(): string;
  commitSha(): string;
  shortSha(): string;
  commitMessage(): string;
  commitEntry(options?: { merge?: boolean }): string;
}

interface FakerVehicle {
  vehicle(): string;
  manufacturer(): string;
  model(): string;
  type(): string;
  fuel(): string;
  vin(): string;
  color(): string;
}

interface FakerRandom {
  number(
    options?: number | { min?: number; max?: number; precision?: number }
  ): number;
  float(
    options?: number | { min?: number; max?: number; precision?: number }
  ): number;
  arrayElement<T = any>(array?: T[]): T;
  arrayElements<T = any>(array?: T[], count?: number): T[];
  objectElement<T = any>(
    object?: Record<string, T>,
    field?: "key" | "value"
  ): T;
  uuid(): string;
  boolean(): boolean;
  word(type?: string): string;
  words(count?: number): string;
  image(): string;
  locale(): string;
  alpha(options?: number | { count?: number; upcase?: boolean }): string;
  alphaNumeric(count?: number): string;
  hexaDecimal(count?: number): string;
}

interface FakerHelpers {
  randomize<T = any>(array?: T[]): T;
  slugify(str?: string): string;
  replaceSymbolWithNumber(str?: string, symbol?: string): string;
  replaceSymbols(str?: string): string;
  replaceCreditCardSymbols(str?: string, symbol?: string): string;
  repeatString(str?: string, num?: number): string;
  regexpStyleStringParse(str?: string): string;
  shuffle<T = any>(array?: T[]): T[];
  mustache(str?: string, data?: Record<string, any>): string;
  createCard(): Record<string, any>;
  contextualCard(): Record<string, any>;
  userCard(): Record<string, any>;
  createTransaction(): Record<string, any>;
}

// -- Main Faker interface ----------------------------------------------------

interface FakerStatic {
  /** Brazilian-specific data generators (CPF, CNPJ, RG, credit card). */
  br: FakerBr;

  name: FakerName;
  address: FakerAddress;
  company: FakerCompany;
  finance: FakerFinance;
  image: FakerImage;
  lorem: FakerLorem;
  hacker: FakerHacker;
  internet: FakerInternet;
  database: FakerDatabase;
  phone: FakerPhone;
  date: FakerDate;
  commerce: FakerCommerce;
  system: FakerSystem;
  git: FakerGit;
  vehicle: FakerVehicle;
  random: FakerRandom;
  helpers: FakerHelpers;

  /** Internal definitions object populated from locale data. */
  definitions: Record<string, any>;

  /** Available locale data. */
  locales: Record<string, any>;

  /** Current locale (default: "pt_BR"). */
  locale: string;

  /** Fallback locale when a key is missing (default: "en"). */
  localeFallback: string;

  /**
   * Set the active locale.
   * @param locale - Locale identifier (e.g. "pt_BR", "en", "es").
   */
  setLocale(locale: string): void;

  /**
   * Seed the random number generator for reproducible data.
   * @param value - Seed value or array of seed values.
   */
  seed(value: number | number[]): void;

  /**
   * Generate data from a template string.
   * @param str - Template with `{{module.method}}` placeholders.
   * @returns Interpolated string.
   * @example
   * faker.fake("{{name.firstName}} {{name.lastName}}") // "Maria Silva"
   */
  fake(str: string): string;

  /**
   * Generate a unique value by retrying the given method until no duplicates occur.
   * @param method - The faker method to call.
   * @param args - Arguments to pass to the method.
   * @param opts - Options: maxTime (ms), maxRetries.
   */
  unique<T = any>(
    method: (...args: any[]) => T,
    args?: any[],
    opts?: { maxTime?: number; maxRetries?: number }
  ): T;
}

declare const faker: FakerStatic;

export = faker;
