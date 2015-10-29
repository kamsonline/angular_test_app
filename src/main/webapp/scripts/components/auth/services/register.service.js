'use strict';

angular.module('yukamApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


