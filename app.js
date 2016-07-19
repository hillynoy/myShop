(function () {
    'use strict';
    var app = angular.module("myShop", []);
    app.controller("myCtrl", function ($scope) {
        $scope.products = [
            {title: 'LEGS',
                img: {src: './pics/legs.jpg'},
                price: '$12.99',
                info: 'bla bla bla bla amazing legs for the summer!'},
            {title: 'LIGHTER',
                img: {src: './pics/lighter.jpg'},
                price: '$99.99',
                info: 'bla bla bla bla make your dreams come true with this lighter today!!'},
            {title: 'SAW',
                img: {src: './pics/saw.jpg'},
                    price: '$13.20',
                    info: 'bla bla bla bla today you can cut anything!!!'},
            {title: 'MATCHES',
                img: {src:'./pics/matches.jpg'},
                price: '$50.99',
                info: 'bla bla bla bla fantastic matches to fulfill all of your culinary needs!'}
        ]
    })
}) (); 