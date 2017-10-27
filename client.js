var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
    var people = [{ name: 'Xong', github: 'xongxiong' }, 
                  {name: 'Chris', github: 'christopher-black'}, 
                  {name: 'Kris', github: 'kdszafranski'}];
    guess.people = people;
    guess.newName = '';
    guess.newGithub = '';
    guess.submit = function() {
        people.push({name: guess.newName, github: guess.newGithub});
        console.log(people);
    }

    var rand = 0;
    
    guess.initRand = function () {
        rand = Math.floor(Math.random() * people.length)
        console.log(rand);
        guess.dispName = people[rand].name;
        console.log(people[rand].name);
    }
    
    guess.thisPerson = function(person) {
        console.log(person);
        if (guess.dispName === person.name) {
            alert('Correct!');
            people[i].remove();
        } else {
            alert('Try Again!');
        }
        guess.dispName = person.name;
    }
});

