'use strict';

import gameApp from '../js/module';

describe('module directive', () => {
    beforeEach(() => {
        loadModule(gameApp);
    });

    it('should show game directive', inject(() => {
        // given:
            let $element = compileDirective(`<game><p>Some stuff</p></game>`);

        // then:
            expect($element.find('p')).toExist();
            expect($element.find('button')).toExist();
            expect($element).toHaveClass('module-app');
            expect($element).toHaveText('do a thing');
    }));

});
