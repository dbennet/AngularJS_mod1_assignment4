(function () {
'use strict';

angular.module('Data')
.service('MenuItemService', MenuItemService);


MenuDataService.$inject = ['$http'];
function MenuItemService($http) {
  var service = this;
  
    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
        });

        console.log("Here is the response for menu_items.json" + response);
        return response;
    };
 
}

})();
