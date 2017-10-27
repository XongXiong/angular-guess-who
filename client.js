var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
    var people = [{ name: 'Xong', github: 'xongxiong', show: true}, 
                  {name: 'Chris', github: 'christopher-black', show: true}, 
                  {name: 'Kris', github: 'kdszafranski', show: true}];
    guess.people = people;
    guess.newName = '';
    guess.newGithub = '';
    guess.submit = function() {
        people.push({name: guess.newName, github: guess.newGithub});
        console.log(people);
    }

    guess.rand = 0;
    
    guess.initRand = function () {
        guess.rand = Math.floor(Math.random() * people.length)
        guess.dispName = people[guess.rand].name;
    }

    guess.thisPerson = function(person) {
        console.log(person.name);
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
        console.log(i);
        people[i].show = false;
    }
});

