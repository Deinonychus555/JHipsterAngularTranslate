'use strict';

angular.module('jhipsterangulartranslateApp')
    .controller('PersonDetailController', function ($scope, $rootScope, $stateParams, entity, Person) {
        $scope.person = entity;
        $scope.load = function (id) {
            Person.get({id: id}, function(result) {
                $scope.person = result;
            });
        };
        $rootScope.$on('jhipsterangulartranslateApp:personUpdate', function(event, result) {
            $scope.person = result;
        });
    });
