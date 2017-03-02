(function() {
    'use strict'
    angular.module('example', []);
})();

(function() {
    'use strict';
    angular
        .module('example')
        .controller('MainCtrl', CoreFunction)
    function CoreFunction() {
        var vm = this,
            addressCollection = [],
            isEditing = false;
        // functions that are not attached to the view model 
        var add = function() {
                var newPerson = {};
                if (!angular.equals({}, vm.person)) {
                    if (isEditing !== false) {
                        addressCollection[isEditing] = vm.person;
                        isEditing = false;
                    } else {
                        newPerson = vm.person
                        addressCollection.push(newPerson);
                    }
                    vm.addresses = addressCollection;
                    vm.person = {};
                }
            },
            edit = function(editPerson) {
                isEditing = addressCollection.indexOf(editPerson);
                vm.person = angular.copy(editPerson);
            },
            remove = function(removePerson) {
                var index = addressCollection.indexOf(removePerson);
                addressCollection.splice(index, 1);
                if (addressCollection.length === 0) {
                    vm.person = {};
                    vm.addresses = undefined;
                }
            },
            reset = function() {
                vm.person = {};
                vm.search = '';
                isEditing = false;
            }
        // view model attached click handlers
        vm.addClickHandler = function() {
            add();
        }
        vm.editClickHandler = function(editPerson) {
            edit(editPerson);
        }
        vm.removeClickHandler = function(removePerson) {
            remove(removePerson);
        }
        vm.resetClickHandler = function() {
            reset();
        }
    }
}());
