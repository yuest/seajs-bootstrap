var expect = require('expect.js')
describe('Development process', function() {
  it('should support a bdd approach.', function() {
    expect(process.env.NODE_ENV).to.eql('test')
  })
})
