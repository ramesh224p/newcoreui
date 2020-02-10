angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

  $urlRouterProvider.when('', '/login');

  $stateProvider
  .state('app.icons', {
    url: "/icons",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Icons'
    }
  })
  .state('app.icons.cosmetics', {
    url: '/cosmetics',
    templateUrl: 'views/icons/cosmetics.html',
    ncyBreadcrumb: {
      label: 'cosmetics'
    }
  })
  .state('app.icons.Manicure', {
    url: '/Manicure',
    templateUrl: 'views/icons/Manicure.html',
    ncyBreadcrumb: {
      label: 'Manicure'
    }
  })
  .state('app.icons.Pedicure', {
    url: '/Pedicure',
    templateUrl: 'views/icons/Pedicure.html',
    ncyBreadcrumb: {
      label: 'Pedicure'
    }
  })
  .state('app.components', {
    url: "/components",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Components'
    }
  })
  .state('app.components.totalusers', {
    url: '/totalusers',
    templateUrl: 'views/components/totalusers.html',
    ncyBreadcrumb: {
      label: 'totalusers'
    }
  })
  .state('app.components.Strength', {
    url: '/Strength',
    templateUrl: 'views/components/Strength.html',
    ncyBreadcrumb: {
      label: 'Strength'
    }
  })
  .state('app.components.Cardio', {
    url: '/cardio',
    templateUrl: 'views/components/cardio.html',
    ncyBreadcrumb: {
      label: 'cardio'
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

