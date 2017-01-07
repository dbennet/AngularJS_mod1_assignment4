(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService) {
  var md = this;

  var response = MenuDataService.getAllCategories();
  md.categories = response.data;
  
  console.log(md.categories);
  md.items = MenuDataService.getItemsForCategory();
  
}

})();
