export default class Character {
  constructor(type) {
    this.type = type;
    this.damage = 100;
  }

  attack() {
    return this.damage;
  }
}
