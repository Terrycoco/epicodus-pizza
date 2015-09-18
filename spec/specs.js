
describe('topping', function() {
  it("returns the cost of a topping", function() {
    var top = new Topping('pepperoni');
    expect(top.price).to.equal(1.00);
  });
});

describe('item', function() {
  it("returns a new pie", function() {
    var pizza = new Item('small');
    expect(pizza.name).to.equal('small');
  });

  it("adds toppings to a pie", function() {
    var pizza = new Item('small');
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
    expect(pizza.cost()).to.equal(8.50);
  });

});

describe('items', function() {
  it('returns collection of all available item objects', function() {

    var itms = new Items();
    expect(itms.find('pepperoni').category).to.equal('topping');
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
    order.addItem(pizza);
    expect(order.items.length).to.equal(1);
  });

  it("returns total cost of an order", function() {
    var order = new Order();
    var pizza = new Item('small'); //7
    var top = new Topping('pepperoni'); //1
    pizza.addTopping(top);
    var top = new Topping('onion');  //.5
    pizza.addTopping(top);
    order.addItem(pizza);
    expect(order.total()).to.equal('$8.50');
  });


});
