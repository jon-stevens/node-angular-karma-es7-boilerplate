'use strict';

import controller from './controller';
import template from './template.html';


export default angular.module('directive.game', [])

    .directive('game', [() => {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                show: '=?show'
            },
            controller,
            template
        };
    }])

    .name;
