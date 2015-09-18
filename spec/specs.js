
describe('topping', function() {
  it("returns the cost of a topping", function() {
    var top = new Topping('pepperoni');
    expect(top.price).to.equal(1);
  });
});

describe('pizza', function() {
  it("returns a new pie", function() {
    var pizza = new Pizza('small');
    expect(pizza.size).to.equal('small');
  });

  it("adds toppings to a pie", function() {
    var pizza = new Pizza('small');
    expect(pizza.size).to.equal('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    expect(pizza.toppings.length).to.equal(1);
  });

  it("adds toppings to a pie unless already there", function() {
    var pizza = new Pizza('small');
    expect(pizza.size).to.equal('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    expect(pizza.toppings.length).to.equal(1);
  });

});
