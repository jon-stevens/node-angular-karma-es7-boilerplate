'use strict';

export default function DummyCtrl ($window, $document, $scope) {

    $scope.text = ``;
    $scope.show = false;

    $scope.tellTime = () => {
        doThing();
    };

    function doThing () {
        $scope.text = 'quarter to the void';
        return true
    }
}

DummyCtrl.$inject = ['$window', '$document', '$scope'];
