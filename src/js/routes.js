'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                controller: 'MasterCtrl',
                views: {
                    "sidebar": {
                        templateUrl: "templates/sidebar.html"
                    },
                    "main": {
                        templateUrl: 'templates/dashboard.html'
                    },
                    "headbar": {
                        templateUrl: "templates/headbar.html"
                    }
                },
                // templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                controller: 'MasterCtrl',
                views: {
                    "sidebar": {
                        templateUrl: "templates/sidebar.html"
                    },
                    "main": {
                        templateUrl: 'templates/tables.html'
                    },
                    "headbar": {
                        templateUrl: "templates/headbar.html"
                    }
                },
                //templateUrl: 'templates/tables.html'
            }).state('login', {
                url: '/login',
                views: {
                    "sidebar": {
                        template: "",
                    },
                    "main": {
                        templateUrl: 'templates/login.view.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    },
                    "headbar": {
                        template: ""
                    }
                },
                // templateUrl: 'templates/login.view.html',

            }).state('register', {
                url: '/register',
                views: {
                    "sidebar": {
                        template: ""
                    },
                    "main": {
                        templateUrl: 'templates/register.view.html',
                        controller: 'RegisterController',
                        controllerAs: 'vm'
                    },
                    "headbar": {
                        template: ""
                    }
                },
                // templateUrl: 'templates/register.view.html',

            }).state('home', {
                url: '/home',

                views: {
                    "sidebar": {
                        templateUrl: "templates/sidebar.html"
                    },
                    "main": {
                        templateUrl: 'templates/home.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    },
                    "headbar": {
                        templateUrl: "templates/headbar.html"
                    }
                },
                // templateUrl: 'templates/home.view.html',


            });
    }
]).run(['$rootScope', '$location', '$cookieStore', '$http', function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}]);
