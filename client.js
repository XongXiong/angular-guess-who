var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
    // Starting Array with people shown
    var peopleArr = people;
    console.log(peopleArr);
    // Hidden Array that contains person object when person is clicked on
    var hiddenPeople = [];

    guess.people = peopleArr;
    guess.newName = '';
    guess.newGithub = '';
    
    guess.submit = function() {
        peopleArr.push({name: guess.newName, github: guess.newGithub, show:true});
    }

    guess.initRand = function () {
        rand = Math.floor(Math.random() * peopleArr.length)
        guess.dispName = peopleArr[rand].name;
        randomId();
    }

    guess.thisPerson = function(person) {
        if (guess.dispName === person.name) {
            alert('Correct!');
            thisPersonShow(person);
            guess.initRand();
        } else {
            alert('Try Again!');
        } 
    }

    function thisPersonShow(person) {
        var i= guess.people.indexOf(person);
        peopleArr.splice(i, 1);
        hiddenPeople.push(person);
        if (peopleArr.length === 0) {
            for (var j = 0; j < hiddenPeople.length; j++) {
                peopleArr.push(hiddenPeople[j]);
            }
            hiddenPeople = [];
            alert('Congratulations!')
        }
    }
    
    function randomId() {
        for (var k = 0; k < peopleArr.length; k++) {
            var personId= Math.floor(Math.random() * peopleArr.length);
            peopleArr[personId].id = k;
         }
        }
});

