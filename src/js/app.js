export default class Validator {
  static validateUsername(name) {
    return /^[a-z]([a-z\-_]|\d(?!\d{3}))*[a-z]$/i.test(name);
  }
}
