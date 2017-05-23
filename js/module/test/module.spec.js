'use strict';

import gameApp from '../js/module';

describe('module directive', () => {
    beforeEach(() => {
        loadModule(gameApp);
    });

    it('should show game directive', inject(() => {
        // given:
            let $element = compileDirective(`<dummy-directive><p>Some stuff</p></dummy-directive>`);

        // then:
            expect($element.find('p')).toExist();
            expect($element.find('button')).toExist();
            expect($element).toHaveClass('module-app');
            expect($element).toHaveText('Some stuff');
    }));

    it('button clickies updates text thingies', inject(() => {
        // given:
        let $element = compileDirective(`<dummy-directive><p></p></dummy-directive>`);
        let $button = $element.find('button');
        let $output = $element.find('p');

        $button.triggerHandler('click');

        // then:
        expect($output).toHaveText('quarter to the void');
    }));

});
