var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
    var people = [{ name: 'Xong', github: 'xongxiong', show: true}, 
                  {name: 'Chris', github: 'christopher-black', show: true}, 
                  {name: 'Kris', github: 'kdszafranski', show: true}];

    var hiddenPeople = [];

    guess.people = people;
    guess.newName = '';
    guess.newGithub = '';
    guess.submit = function() {
        people.push({name: guess.newName, github: guess.newGithub, show:true});
    }
    
    guess.initRand = function () {
        rand = Math.floor(Math.random() * people.length)
        guess.dispName = people[rand].name;
        
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
        people.splice(i, 1);
        hiddenPeople.push(person);
        if (people.length === 0) {
            for (var j = 0; j < hiddenPeople.length; j++) {
                people.push(hiddenPeople[j]);
            }
            hiddenPeople = [];
        }
    }
});

