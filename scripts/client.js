var myApp = angular.module('MyApp', []); //these don't have to be the same

myApp.controller('WelcomeController', function () {
    console.log('WelcomeController is running');
    var self = this; //anything we attach to self will be part of this controller
    self.message = 'Hello World'; //self goes from empty object, to empty object with message property 

    self.newThing = {}; //self.newThing.name and self.newThing.happinessPoints

    self.favoriteThings = [
        {
            name: 'Gummi Bears',
            happinessPoints: 150
        },
        {
            name: 'Dinosaurs',
            happinessPoints: 10
        },
        {
            name: 'AngularJS',
            happinessPoints: 149
        }
    ]


    self.greet = function () {
        console.log('Hello Angular!');
        
    }

    self.addNewThing = function(){
        self.favoriteThings.push(self.newThing);    
        self.newThing = {};
    }
});