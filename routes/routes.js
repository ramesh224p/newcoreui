angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

  $urlRouterProvider.when('', '/login');

  $stateProvider
  .state('app.bueaty', {
    url: "/bueaty",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'bueaty'
    }
  })
  .state('app.bueaty.cosmetics', {
    url: '/cosmetics',
    templateUrl: 'views/bueaty/cosmetics.html',
    ncyBreadcrumb: {
      label: 'cosmetics'
    }
  })
  .state('app.bueaty.Manicure', {
    url: '/Manicure',
    templateUrl: 'views/bueaty/Manicure.html',
    ncyBreadcrumb: {
      label: 'Manicure'
    }
  })
  .state('app.bueaty.Pedicure', {
    url: '/Pedicure',
    templateUrl: 'views/bueaty/Pedicure.html',
    ncyBreadcrumb: {
      label: 'Pedicure'
    }
  })
  .state('app.gym', {
    url: "/gym",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'gym'
    }
  })
  .state('app.gym.totalusers', {
    url: '/totalusers',
    templateUrl: 'views/gym/totalusers.html',
    ncyBreadcrumb: {
      label: 'totalusers'
    }
  })
  .state('app.gym.Strength', {
    url: '/Strength',
    templateUrl: 'views/gym/Strength.html',
    ncyBreadcrumb: {
      label: 'Strength'
    }
  })
  .state('app.gym.Cardio', {
    url: '/cardio',
    templateUrl: 'views/gym/cardio.html',
    ncyBreadcrumb: {
      label: 'cardio'
    }
  })
  .state('app.gym.uploadpics', {
    url: '/uploadpics',
    templateUrl: 'views/gym/uploadpics.html',
    ncyBreadcrumb: {
      label: 'uploadpics'
    }
  })
  .state('app.charts', {
    url: '/charts',
    templateUrl: 'views/charts.html',
    ncyBreadcrumb: {
      label: 'Charts'
    },
    //resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        //   return $ocLazyLoad.load([
          //     {
             //      serial: true,
           //        files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
         //      }
       //    ]);
     // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/charts.js']
        });
      }]
  //  }
  })

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'views/common/layouts/full.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Root',
      skip: true
    }
  })
  .state('app.main', {
    url: '/dashboard',
    templateUrl: 'views/main.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Home',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit' },
  })
  .state('appSimple', {
    abstract: true,
    templateUrl: 'views/common/layouts/simple.html',
    })

  // Additional Pages
  .state('appSimple.login', {
    url: '/login',
    templateUrl: 'views/pages/login.html'
  })
  .state('appSimple.register', {
    url: '/register',
    templateUrl: 'views/pages/register.html'
  })
  .state('forgotpass', {
    url: '/forgotpass',
    templateUrl: 'views/pages/forgotpass.html'
  })
  .state('appSimple.404', {
    url: '/404',
    templateUrl: 'views/pages/404.html'
  })
  .state('appSimple.500', {
    url: '/500',
    templateUrl: 'views/pages/500.html'
  })
}]);

