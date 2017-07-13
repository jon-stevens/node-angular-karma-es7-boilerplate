'use strict';

import dummyController from './controller';
import dummyTemplate from './template.html';


export default angular.module('directive.dummyDirective', [])

    .directive('dummyDirective', [() => {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                show: '=?show'
            },
            controller: dummyController,
            template: dummyTemplate
        };
    }])

    .name;
