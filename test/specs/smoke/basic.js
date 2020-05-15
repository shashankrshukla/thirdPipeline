//start
const assert = require('assert')

describe('Testing the title of the Weather Webpage', () => {
    it('should have the right title', () => {
        browser.url('/')
        const butt = $('/html/body/div/button');
        browser.setTimeout({
            'script': 60000
        })
        browser.executeAsync((done) => {
            console.log('this should not fail')
            setTimeout(done, 5000)
        })
        butt.click();
        browser.setTimeout({
            'script': 60000
        })
        browser.executeAsync((done) => {
            console.log('this should not fail')
            setTimeout(done, 5000)
        })
        const title = browser.getTitle()
        assert.strictEqual(title, 'Weather');

        const title1 = browser.getTitle()
        assert.strictEqual(title1, 'Weather');
    })
})
//end