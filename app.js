(function () {
    "use strict";
    var app = angular.module("myShop", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/products.html',
                    controller: 'StoreController'
                })
                .when('/cart', {
                    templateUrl: 'partials/cart.html',
                    controller: 'StoreController'
                })
                .when('/home', {
                    templateUrl: 'partials/products.html',
                    controller: 'StoreController'
                }).when('/:id', {
                    templateUrl: 'partials/detail.html',
                    controller: 'StoreController'})
                .otherwise({redirectTo: '/'})
        });

    // app.controller("StoreController", function ($http) {
    //     $http.get('https://api.myjson.com/bins/3gbst').then(function(data) {
    //         console.log(data);
    //     });
    //
    // url: https://api.myjson.com/bins/3gbst


    app.controller("StoreController", function ($scope, $location, $routeParams) {
      
        $scope.products = [
            {
                "id": 0,
                "title": "Bamba",
                "img": {"src": "./pics/bamba.jpg"},
                "price": 12.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla amazing !"
            },

            {   "id": 2,
                "title": "Wonka",
                "img": {"src": "./pics/candy1.jpg"},
                "price": 99.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla make your dreams come true with this lighter today!!"},

            {   "id": 3,
                "title": "Krembo",
                "img": {"src": "./pics/krembo.jpg"},
                "price": 13.20,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla today you can cut anything!!!"},

            {   "id": 4,
                "title": "Mike n Ike",
                "img": {"src":"./pics/mike.jpg"},
                "price": 50.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},

            {   "id": 5,
                "title": "Reeses",
                "img": {"src": "./pics/wonka1.jpg"},
                "price": 12.99,
                "inStock": "false",
                "addedToCart": "false",
                "info": "bla bla bla bla amazing !"},

            {   "id": 6,
                "title": "Mike n Ike",
                "img": {"src":"./pics/wonka3.jpg"},
                "price": 50.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},

            {   "id": 7,
                "title": "Krembo",
                "img": {"src": "./pics/wonka4.jpg"},
                "price": 13.20,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla today you can cut anything!!!"},

            {   "id": 8,
                "title": "Mikeush",
                "img": {"src":"./pics/wonka5.jpg"},
                "price": 50.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},

            {   "id": 10,
                "title": "Bamba",
                "img": {"src": "./pics/wonka6.jpg"},
                "price": 12.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla amazing !"},
            
            {   "id": 11,
                "title": "Krembo",
                "img": {"src": "./pics/wonka7.jpg"},
                "price": 13.20,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla today you can cut anything!!!"},

            {   "id": 12,
                "title": "Mike n Ike",
                "img": {"src":"./pics/wonka8.jpg"},
                "price": 50.99,
                "inStock": "false",
                "count": 0,
                "info": "bla bla bla bla fantastic matches to fulfill all of your culinary needs!"},

            {   "id": 13,
                "title": "Reeses",
                "img": {"src": "./pics/wonka9.jpg"},
                "price": 12.99,
                "inStock": "false",
                "addedToCart": false,
                "count": 0,
                "info": "bla bla bla bla amazing !"
            }
        ];
        
        $scope.cart = [];
        
        if ($routeParams.id) {
            $scope.p = $scope.products.filter(function (item) {
                return item.id == $routeParams.id;
            })[0];
        }
        //if the added to class is "true" means that the user clicked "buy", then we'll add the information of that item into "cart" 
           $scope.addItem = function (p) {
               p.addedToCart = true;
               $scope.cart.push(p);
               console.log($scope.cart);
           };
          
        $scope.countItems = function (product) {
            
            product.count++;
            console.log(product);
        }
    });
})
();
