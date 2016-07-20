(function () {
    "use strict";
    var app = angular.module("myShop", []);
    // app.controller("StoreController", function ($http) {
    //     $http.get('https://api.myjson.com/bins/4psap').then(function(data) {
    //         console.log(data);
    //     });
    
        // url: https://api.myjson.com/bins/4psap
    
    app.controller("StoreController", function ($scope) {
        
        $scope.products = [
            {"title": "Bamba",
                "img": {"src": "./pics/bamba.jpg"},
                "price": 12.99,
                "inStock": "false",
                "info": "bla bla bla bla amazing !"},
            
            {"title": "Wonka",
                "img": {"src": "./pics/candy1.jpg"},
                "price": 99.99,
                "inStock": "false",
                "info": "bla bla bla bla make your dreams come true with this lighter today!!"},
            
            {"title": "Krembo",
                "img": {"src": "./pics/krembo.jpg"},
                    "price": 13.20,
                "inStock": "false",
                "info": "bla bla bla bla today you can cut anything!!!"},
            
            {"title": "Mike n Ike",
                "img": {"src":"./pics/mike.jpg"},
                "price": 50.99,
                "inStock": "false",
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},
            
            {"title": "Reeses",
                "img": {"src": "./pics/mike.jpg"},
                "price": 12.99,
                "inStock": "false",
                "info": "bla bla bla bla amazing !"},
            
            {"title": "Twizzlers",
                "img": {"src": "./pics/Twizzlers.jpg"},
                "price": 99.99,
                "inStock": "false",
                "info": "bla bla bla bla make your dreams come true with this lighter today!!"},
            
            {"title": "Krembo",
                "img": {"src": "./pics/krembo.jpg"},
                "price": 13.20,
                "inStock": "false",
                "info": "bla bla bla bla today you can cut anything!!!"},
            
            {"title": "Mikeush",
                "img": {"src":"./pics/mike.jpg"},
                "price": 50.99,
                "inStock": "false",
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},
            {"title": "Bamba",
                "img": {"src": "./pics/bamba.jpg"},
                "price": 12.99,
                "inStock": "false",
                "info": "bla bla bla bla amazing !"}
        ]
    });
    })
(); 