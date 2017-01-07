(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/data/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<',
  }
});

CategoriesComponentController.$inject = [];
function CategoriesComponentController() {
  var $ctrl = this;
}

})();
