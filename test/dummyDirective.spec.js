'use strict';

import dummyDirective from '../js/dummy-directive';

describe('test the dummy directive', () => {
    beforeEach(() => {
        loadModule(dummyDirective);
    });

    it('should show dummy directive', inject(() => {
        // given:
            let $element = compileDirective(`<dummy-directive><p>Some stuff</p></dummy-directive>`);

        // then:
            expect($element.find('p')).toExist();
            expect($element.find('button')).toExist();
            expect($element).toHaveClass('dummy-directive');
            expect($element).toHaveText('Some stuff');
    }));

    it('button clickies updates the text', inject(() => {
        // given:
        let $element = compileDirective(`<dummy-directive><p></p></dummy-directive>`);
        let $button = $element.find('button');
        let $output = $element.find('p');

        $button.triggerHandler('click');

        // then:
        expect($output).toHaveText('quarter to the void');
    }));

});
