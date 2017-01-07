(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/data/items.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<',
  }
});

ItemsComponentController.$inject = [];
function ItemsComponentController() {
  var $ctrl = this;
}


})();
