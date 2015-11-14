'use strict';

angular.module('jhipsterangulartranslateApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


