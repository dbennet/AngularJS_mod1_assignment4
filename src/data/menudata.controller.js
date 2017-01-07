(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService) {
  var md = this;

  // Use factory to create new shopping list service
  var menuData = MenuDataService();

  md.categories = menuData.getAllCategories();
  md.items = menuData.getItemsForCategory();
  
}

})();
