/**
 * Created by souvikda on 11/3/2016.
 */
/**
 * Created by souvikda on 10/25/2016.
 */
var app = angular.module('myApp', ['ui.router']);


app.controller("myCtrl", function($location) {
    var loc = $location.absUrl();
    this.message = loc;
    console.log(loc);

    if ($location.search()['fname'] ===undefined && $location.search()['lname']===undefined && $location.search()['empId']===undefined && $location.search()['emailId']===undefined ) {

        this.url = "Nothing fetched from URL!!!!";
        console.log("Value-->"+loc+$location.search()['fname']);
    }
    else{this.url = "Value fetched from URL!!!!";
        console.log("Value After Else-->"+$location.search()['fname']);}


    this.fn=$location.search()['fname'];
    this.ln=$location.search()['lname'];
    this.emp_id=$location.search()['empId'];
    this.email=$location.search()['emailId'];
    this.show = function () {
        console.log("Hello From Show Function");
        var loc=$location.absUrl();
        this.msg="Congrats!! URL Created . Save It For Further Use :)";
        this.message=loc+"?fname="+this.fn+"&lname="+this.ln+"&empId="+this.emp_id+"&emailId="+this.email;
    };
});

app.directive("bookmarkPage", function ($window, $location) {
    return {
        restrict: "AEC",
        link: function (scope, element, attrs) {
            $(element).click(function (e) {
                var bookmarkURL = window.location.href;
                var bookmarkTitle = document.title;
                var triggerDefault = false;

                if (window.sidebar && window.sidebar.addPanel) {
                    // Firefox version < 23
                    window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
                } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
                    // Firefox version >= 23 and Opera Hotlist
                    var $this = $(this);
                    $this.attr('href', bookmarkURL);
                    $this.attr('title', bookmarkTitle);
                    $this.attr('rel', 'sidebar');
                    $this.off(e);
                    triggerDefault = true;
                } else if (window.external && ('AddFavorite' in window.external)) {
                    // IE Favorite
                    window.external.AddFavorite(bookmarkURL, bookmarkTitle);
                } else {
                    // WebKit - Safari/Chrome
                    alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
                }

                return triggerDefault;
            });
        }

    };
});


;/**
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