const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB 
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
     { ‘A’: ‘Ben’ },
     { ‘B’: ‘CardiB’},
     { ‘C’: ‘CardiB’},
     { ‘D’: ‘Paul’}
   ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number75

      function newNumber() {
        number = 64;

        // Log B: number64
      }

      newNumber();

      // Log C: number 64
    }

    numberFunction();

    // Log D: number 30

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting welcome
      }

      newGreeting();

      // Log C: greeting welcome
    }

    greetingGenerator();

    // Log D: greeting howdy

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit (const/let do not hoist, so this case an error would be returned because *temporal dead zone)
          const fruit = 'strawberry';
        }

        // Log B: fruit mango
      }

      // Log C: fruit mango (var doesn't have block scope)
    }

    eatFruit()

    // Log D: fruit apple

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // on line 215 we are declaring a global variable, assigning it a value of 'apple'. 
    //On line 217 we are declaring a function eatFruit.
    //233 eatFruit is being invoked
    // inside of eatFruit is an if statement. If fruit variable does not equal 'kiwi', declare variable 
    //fruit and assign value of 'mango'. 
    //Then check if fruit variable is true. If so, log fruit. Fruit returns a reference error because
    //const/let do not hoist. Logging fruit in this block is a a temporal dead zone. 
    //Now we declare a variable 'fruit' and assign to the value 'strawberry'.
    //outside of this block we log fruit. Mango is returned because we are logging within the first if block.
    // outside of the if blocks we log fruit inside of the entire function. Mango is returned 
    //because var does not have block scope.
    //Next we log fruit in the global scope. Apple is returned. Our global fruit variable has not been
    //reassigned by any functions.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
    {'b': 'flipflop'},
    {'a': 'undefined'},
    {'c': 'flipflop'},
    ];
    return result;

    // Annotation:
    // on line 469 we declare a global variable named shoe and assign it to 
    //equal flipflop
    //Then we declare a gobal function named putOnShoe, but we skip down to line 469
    //because it hasn't been invoked yet. On line 469 we log the value of shoe, which
    //is 'flipflop' at this point in time. Then we go ahead and invoke our putOnShoe function
    // and when we try to log shoe within our function, we get undefined because our
    //shoe declaration on line 473 is hoisted to the top of that function scope.
    //Once we've finished executing putOnShoe, we go back down to line 478 and log
    //shoe again which will give us flipflop
  }
}

module.exports = scope;