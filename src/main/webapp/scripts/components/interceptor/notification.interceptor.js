 'use strict';

angular.module('yukamApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-yukamApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-yukamApp-params')});
                }
                return response;
            }
        };
    });
