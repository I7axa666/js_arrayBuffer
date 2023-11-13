import Character from './characterBase';

export default class DarkSids extends Character {
  constructor(type) {
    super(type);
    this.stoned = false;
    const darkTypes = ['deamon', 'magician'];
    if (darkTypes.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Не темный персонаж');
    }
  }

  attack(distance) {
    this.damage -= (distance - 1) * 10;
    const stonedDamage = this.damage - Math.log2(distance) * 5;
    return this.stoned ? stonedDamage : this.damage;
  }
}
