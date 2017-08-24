var Browser = require('zombie')
var assert  = require('assert')


describe('main page', function() {
  before(function() {
    this.browser = new Browser({ site: 'http://localhost:4502' })
  })

  before(function(done) {
    this.browser.visit('/', done)
  })

  it('should say hello world', function() {
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
})
