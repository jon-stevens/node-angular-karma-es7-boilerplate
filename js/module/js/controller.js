'use strict';

export default function DummyCtrl ($window, $document, $scope) {

    const config = {};

    $scope.show = false;

    $scope.confirm = () => {
        doThing();
    };

    function doThing () {
        const d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        return true
    }
}

DummyCtrl.$inject = ['$window', '$document', '$scope'];
