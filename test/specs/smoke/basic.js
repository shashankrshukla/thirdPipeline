//start
const assert = require('assert')

describe('Testing the title of the Weather Webpage', () => {
    it('should have the right title', () => {
        browser.url('/')
        const butt = $('/html/body/div/button');
        butt.click();
        // const title = browser.getTitle()
        // assert.strictEqual(title, 'Weather');

    })
})
//end