(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/home.template.html'
  })

  // Premade list page
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: 'src/menu/menudata.template.html',
    controller: 'MenuDataController as md',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('menuItems', {
    url: '/menu-items/{itemName}',
    templateUrl: 'src/menu/menuitems.template.html',
    controller: 'MenuItemController as mt',
    resolve: {
      item: ['$stateParams', 'MenuItemService',
            function ($stateParams, MenuItemService) {
              return MenuItemService.getItemsForCategory($stateParams.itemName);
            }]
    }
  });
  
  }

})();
