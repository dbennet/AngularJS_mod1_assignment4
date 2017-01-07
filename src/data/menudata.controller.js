(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService) {
  var md = this;

  md.categories = MenuDataService.getAllCategories();
  
  console.log(md.categories);
  md.items = MenuDataService.getItemsForCategory();
  
}

})();
