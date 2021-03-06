(function () {

    var app = angular.module("myShop");
    app.controller("StoreController", function ($scope, $location, $routeParams, $http) {

        angular.element(document).ready(function () {
            init();
        });

        function init() {
            if ($scope.cart === undefined || $scope.cart == []) {
                if (localStorage.getItem("cart")) {
                    $scope.cart = JSON.parse(localStorage.getItem("cart"));
                    console.log($scope.cart);
                }
            }

            if ($scope.products == undefined) {
                $http({
                    method: 'GET',
                    url: 'https://api.myjson.com/bins/20cqh'
                }).then(
                    function successCallback(response) {

                        $scope.products = response.data;
                        if ($routeParams.id) {
                            $scope.p = $scope.products.filter(function (item) {
                                return item.id == $routeParams.id;
                            })[0];
                        }
                    },
                    function errorCallback(response) {
                    }
                );
            }
        }

       

        /*   localStorage.removeItem("cart");
         $scope.cart = [];

         if (localStorage.getItem("cart")) {
         $scope.cart = JSON.parse(localStorage.getItem("cart"));
         }*/


        $scope.addItem = function (p) {
            p.addedToCart = true;
            $scope.cart.push(p);
            //localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify($scope.cart));
            console.log($scope.cart);
        };

        $scope.countItems = function (product) {
            product.count++;
        }
    })
    ;

})();