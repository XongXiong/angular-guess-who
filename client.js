var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
    // Starting Array with people shown
    var peopleArr = people;
    // Hidden Array that contains person object when person is clicked on
    var hiddenPeople = [];

    guess.people = peopleArr;
    guess.newName = '';
    guess.newGithub = '';
    
    console.log(peopleArr);

    // Clicking the submit button runs function to push input data into peopleArr array
    guess.submit = function() {
        if (guess.newName === '' || guess.newGithub === ''){
            alert('You missed an input field')
        } else {
        peopleArr.push({name: guess.newName, github: guess.newGithub, show:true, id: peopleArr.length});
        console.log(peopleArr);
        }
    }

    // On initializing, run function to randomize names and runs the randomId function
    guess.initRand = function () {
        rand = Math.floor(Math.random() * peopleArr.length)
        guess.dispName = peopleArr[rand].name;
        randomId();
    }

    // Clicking on the correct picture will run this function 
    guess.thisPerson = function(person) {
        if (guess.dispName === person.name) {
            alert('Correct!');
            // runs thisPersonShow function with information from selected person
            thisPersonShow(person);
            // rerun's the guess.initRand function after selecting the right person
            guess.initRand();
        } else {
            alert('Try Again!');
        } 
    }

    // Called in guess.thisPerson function
    function thisPersonShow(person) {
        // Finds index of selected person from the peopleArr array
        var i= guess.people.indexOf(person);
        // Removes the selected person from peopleArr
        peopleArr.splice(i, 1);
        // Pushed the selected person to the hiddenPeople array
        hiddenPeople.push(person);
        // When there are no more items to select from,
        // we push the indexes of hiddenPeople array to peopleArr to do a "reset"
        if (peopleArr.length === 0) {
            for (var j = 0; j < hiddenPeople.length; j++) {
                peopleArr.push(hiddenPeople[j]);
            }
            // Clears hiddenPeople array after winning game
            hiddenPeople = [];
            alert('Congratulations!')
        }
    }
    
    // Called in guess.initRand function to randomize a number for the index
    // Sets the value of indices' id to k which goes up in the loop based on the length of peopleArr
    function randomId() {
        for (var k = 0; k < peopleArr.length; k++) {
            var personId= Math.floor(Math.random() * peopleArr.length);
            peopleArr[personId].id = k;
         }
        }
});

