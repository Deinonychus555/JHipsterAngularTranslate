 'use strict';

angular.module('jhipsterangulartranslateApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterangulartranslateApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterangulartranslateApp-params')});
                }
                return response;
            },
        };
    });