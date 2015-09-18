// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('topping', function() {
  it("returns the cost of a topping", function() {
    var top = new Topping('pepperoni', 1);
    expect(top.price).to.equal(1);
  });
});
