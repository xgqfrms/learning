# Chai Assertion Library


http://chaijs.com/

http://chaijs.com/guide/installation/#node




$ npm install chai



Chai是一个用于node和浏览器的BDD / TDD断言库，
可以与任何JavaScript测试框架愉快地配合使用。


Chai有几个接口，允许开发人员选择最舒适。
链式BDD风格提供了一种表达性语言和可读风格，
而TDD断言风格提供了更古典的感觉。


Should

chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);



Expect

var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);



Assert

var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);






















