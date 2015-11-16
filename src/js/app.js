/*console.log('Router Outside');
'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        console.log('Router Inside');
        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }
]);*/

/*
'use strict';
angular.module('app', ['ngCookies', 'ui.bootstrap', 'ui.router', 'ngRoute'])
    .config(config);
//    .run(run);


config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    // For unmatched routes
    $urlRouterProvider.otherwise('/');
    console.log('Router Inside');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            controller: 'MasterCtrl',
            templateUrl: 'dashboard.html'
        })
        .state('tables', {
            url: '/tables',
            controllegr: 'MasterCtrl',
            templateUrl: 'templates/tables.html'
        }).state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'templates/login.view.html'

        }).state('register', {
            url: '/register',
            controller: 'RegisterController',
            templateUrl: 'templates/register.view.html'
        });
}

/*run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

function run($rootScope, $location, $cookieStore, $http) {
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
}
console.log('Router End...');
*/
