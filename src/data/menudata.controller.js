(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService) {
  var md = this;

  var promise = MenuDataService.getAllCategories();
  
    promise.then(function (response) {
      md.categories = response.data;     
    })
    .catch(function (error) {
        console.log("Something went terribly wrong.");
        md.categories = [];
    });
  
  
  console.log(md.categories);
  md.items = MenuDataService.getItemsForCategory();
  
}

})();
