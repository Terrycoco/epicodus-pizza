
describe('topping', function() {
  it("returns the cost of a topping", function() {
    var top = new Topping('pepperoni');
    expect(top.price).to.equal(1);
  });
});

describe('item', function() {
  it("returns a new pie", function() {
    var pizza = new Item('small');
    expect(pizza.size).to.equal('small');
  });

  it("adds toppings to a pie", function() {
    var pizza = new Item('small');
    expect(pizza.size).to.equal('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    expect(pizza.toppings.length).to.equal(1);
  });

  it("adds toppings to a pie unless already there", function() {
    var pizza = new Item('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    expect(pizza.toppings.length).to.equal(1);
  });

  it("returns total cost of pie", function() {
    var pizza = new Item('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    var top = new Topping('onion');
    pizza.addTopping(top);
    expect(pizza.cost()).to.equal(8.5);
  });

});

describe("order", function() {
  it("adds items to an order", function() {
    var order = new Order();
    var pizza = new Item('small');
    var top = new Topping('pepperoni');
    pizza.addTopping(top);
    var top = new Topping('onion');
    pizza.addTopping(top);
    order.addItem(pizza, 2);
    expect(order.items.length).to.equal(2);
  });

  it("returns total cost of an order", function() {
    var order = new Order();
    var pizza = new Item('small'); //7
    var top = new Topping('pepperoni'); //1
    pizza.addTopping(top);
    var top = new Topping('onion');  //.5
    pizza.addTopping(top);
    order.addItem(pizza, 2);
    expect(order.total()).to.equal(17);
  });
});
