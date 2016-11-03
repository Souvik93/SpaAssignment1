/**
 * Created by souvikda on 11/3/2016.
 */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/form');

    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'pages/form.html',
            controller: 'myCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'pages/AboutUs.html'
        });
});