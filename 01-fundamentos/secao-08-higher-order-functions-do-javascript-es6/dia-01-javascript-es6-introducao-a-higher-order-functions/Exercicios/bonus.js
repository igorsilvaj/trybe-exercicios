// const mage = {
//     healthPoints: 130,
//     intelligence: 45,
//     mana: 125,
//     damage: undefined,
// };

// const warrior = {
//     healthPoints: 200,
//     strength: 30,
//     weaponDmg: 2,
//     damage: undefined,
// };

// const dragon = {
//     healthPoints: 350,
//     strength: 50,
//     damage: undefined,
// };
// const battleMembers = { mage, warrior, dragon };
// const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 15) + 16);
// const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
// const mageDamage = (mage) => {
//     if (mage.mana >= 15) {
//         return {
//             damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
//             manaSpent: 15,
//         }
//     }
//     return 'Não possui mana suficiente';
// }
// const gameActions = {
//     warriorTurn: (calcDamage) => {
//         warrior.damage = calcDamage(warrior);
//         dragon.healthPoints -= warrior.damage;
//     },
//     mageTurn: (calcDamage) => {
//         mage.damage = calcDamage(mage);
//         mage.mana -= calcDamage();
//         dragon.healthPoints -= mage.damage;
//     },
//     dragonTurn: (calcDamage) => {
//         dragon.damage = calcDamage(dragon);
//         warrior.healthPoints -= dragon.damage;
//         mage.healthPoints -= dragon.damage;
//     },
//     finalTurn: () => battleMembers,
// };
// console.log(gameActions.warriorTurn(warriorAttack));
// console.log(gameActions.finalTurn());


////////////////////////////////////////////////////////////////////////////


// const mage = {
//     healthPoints: 130,
//     intelligence: 45,
//     mana: 125,
//     damage: undefined,
// };
// const warrior = {
//     healthPoints: 200,
//     strength: 30,
//     weaponDmg: 2,
//     damage: undefined,
// };
// const dragon = {
//     healthPoints: 350,
//     strength: 50,
//     damage: undefined,
// };

// const battleMembers = { mage, warrior, dragon };

// const warriorAttack = (warrior) => {
//     const minDmg = warrior.strength;
//     const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
//     const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
//     console.log('test');
//     return warriorDmg;
// };
// const mageAttack = (mage) => {
//     const mageMana = mage.mana;
//     const minDmg = mage.intelligence;
//     const maxDmg = minDmg * 2;
//     const turnStats = {
//         manaSpent: 0,
//         damageDealt: 'Not enough mana...',
//     };
//     if (mageMana > 15) {
//         const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
//         turnStats.manaSpent = 15;
//         turnStats.damageDealt = mageDamage;
//         return turnStats;
//     }
//     return turnStats;
// };
// const dragonAttack = (dragon) => {
//     const minDmg = 15;
//     const maxDmg = Math.floor(Math.random() * dragon.strength);
//     const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
//     return dragonDmg;
// };

// const gameActions = {
//     warriorTurn: (warriorAttack) => {
//         const warriorDamage = warriorAttack(warrior);
//         warrior.damage = warriorDamage;
//         dragon.healthPoints -= warriorDamage;
//     },
//     mageTurn: (mageAttack) => {
//         const mageTurnStats = mageAttack(mage);
//         const mageDamage = mageTurnStats.damageDealt;
//         mage.damage = mageDamage;
//         mage.mana -= mageTurnStats.manaSpent;
//         dragon.healthPoints -= mageDamage;
//     },
//     dragonTurn: (dragonAttack) => {
//         const dragonDamage = dragonAttack(dragon);
//         mage.healthPoints -= dragonDamage;
//         warrior.healthPoints -= dragonDamage;
//         dragon.damage = dragonDamage;
//     },
//     turnResults: () => battleMembers,
// };

// // gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.turnResults());