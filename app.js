(function () {
    "use strict";
    var app = angular.module('myShop', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/detail/:title', {
                    templateUrl: 'productDetail.html',
                    controller: 'ProductDetailController'
                })
                .when('/', {
                    templateUrl: 'products.html',
                    controller: 'StoreController'
                })
                .otherwise({redirectTo: '/'});
        });


    app.controller("StoreController", function ($http, $scope) {
        $scope.products = [];
        $http.get('https://api.myjson.com/bins/4psap').then(function(response) {
            console.log('Products', response.data);
            $scope.products = response.data;
        });

    });
    
    app.controller("ProductDetailController", function ($scope, $routeParams) {
        $scope.product;

    });
    
})
();




/*
 url: https://api.myjson.com/bins/4psap
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
 "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"}
 ]*/