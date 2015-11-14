'use strict';

angular.module('jhipsterangulartranslateApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
