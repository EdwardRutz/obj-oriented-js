"use strict";

//An example of a object literal
const fluffy = {
  animal: 'cat',
  age: 11,
  breed: 'Maine-Coon',
  meow: function(){
    console.log('Meoow!');
  }
};

//Calling properties with Dot notation
console.log(fluffy.age);
console.log(fluffy.breed);
fluffy.meow();

//Bracket Notation
console.log(fluffy['age']);
console.log(fluffy['breed']);
fluffy['meow']();

//Using variables and brackets
var prop = 'breed';
console.log(fluffy[prop]);

//Changing object properties
fluffy.age = 22;
fluffy.color = 'Orange';

//Show object in console
console.log(fluffy);

