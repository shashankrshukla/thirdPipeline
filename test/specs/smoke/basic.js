//start
const assert = require('assert')

describe('Testing the title of the Weather Webpage', () => {
    it('should have the right title', () => {
        browser.url('/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Weather');
        browser.setTimeout({
            'script': 60000
        })
        browser.executeAsync((done) => {
            console.log('this should not fail')
            setTimeout(done, 25000)
        })
    })
})
//end