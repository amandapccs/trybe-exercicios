const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
    const minDmg = 15;
    return Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
}

const warriorDamage = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = warrior.strength * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
    return warriorDamage;
}

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
};

//Part II
const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorAtk = warriorDamage(warrior);
    dragon.healthPoints -= warriorAtk;
    warrior.damage = warriorAtk;
  },
  mageTurn: (mageAttack) => {
    const mageAtk = mageAttack(mage);
    dragon.healthPoints -= mageAtk.damageDealt;
    mage.mana -= mageAtk.manaSpent;
    mage.damage = mageAtk.damageDealt;
  },
  dragonTurn: (dragonDamage) => {
    const dragonAtk = dragonDamage(dragon);
    warrior.healthPoints -= dragonAtk;
    mage.healthPoints -= dragonAtk;
    dragon.damage = dragonAtk;
  },
  thisTurn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.thisTurn());

// console.log(battleMembers)
