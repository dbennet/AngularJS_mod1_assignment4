(function () {
'use strict';

angular.module('Data')
.controller('MenuDataController', MenuDataController);


//MenuDataController.$inject = ['MenuDataService'];
MenuDataController.$inject = ['items'];
function MenuDataController(items) {
  var md = this;
  md.categories = items;

   //var promise = MenuDataService.getAllCategories();
  
    //promise.then(function (response) {
    //  md.categories = response.data;     
    //})
    //.catch(function (error) {
    //    console.log("Something went terribly wrong.");
    //    md.categories = [];
    //});
  
    // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
  
  
  //console.log(md.categories);
  //md.items = MenuDataService.getItemsForCategory();
  
}

})();
