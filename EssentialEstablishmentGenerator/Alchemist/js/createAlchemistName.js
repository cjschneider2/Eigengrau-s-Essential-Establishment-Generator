/* global setup dice */
setup.createAlchemistName = function (chemistFirstName) {
  var alchemistNameRoll = dice(1, 5)
  var name
  var adjective = ['Bubbling', 'Spicy', 'Soggy', 'Fizzy', 'Liquid', 'Fluorescent', 'Clear', 'Alcoholic', 'Abyssal', 'Angelic', 'Elven', 'Measured', 'Marked', 'Glass', 'Glass', 'Copper', 'Corked', 'Burning', 'Red', 'Blue', 'Green', 'Gold', 'Yellow', 'Vile', 'Genuine', 'Original'].seededrandom()
  var noun = ['Potion', 'Liquid', 'Fumes', 'Bottle', 'Vial', 'Firewater', 'Mortar and Pestle', 'Lab', 'Laboratory', 'Chemist', 'Alchemist', 'Brewer', 'Lotion', 'Wishes'].seededrandom()
  var adjective2 = ['Bubbling', 'Spicy', 'Soggy', 'Fizzy', 'Liquid', 'Fluorescent', 'Clear', 'Alcoholic', 'Abyssal', 'Angelic', 'Elven', 'Measured', 'Marked', 'Glass', 'Glass', 'Copper', 'Corked', 'Burning', 'Red', 'Blue', 'Green', 'Gold', 'Yellow', 'Vile', 'Genuine', 'Original'].seededrandom()
  var rider = ['Chemist', 'Alchemist', 'Potion Shop', 'Potionery', 'Ointmentary', 'Juice Bar', 'Lab', 'Laboratory', 'Secret Lair'].seededrandom()
  switch (alchemistNameRoll) {
    case 1:
      name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      name = chemistFirstName + ' and ' + adjective2
      // name = 'The ' + adjective + ' ' + noun
      break
    case 3:
      name = 'The ' + noun + ' and ' + adjective2
      break
    case 4:
      name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      name = adjective + ' ' + noun
      break
    default:
      name = 'The ' + adjective + ' Alchemist'
  }
  return name
}
