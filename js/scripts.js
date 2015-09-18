var ItemPrice = new Object();
  ItemPrice['small'] = 7;
  ItemPrice['medium'] = 9;
  ItemPrice['large'] = 12;
  ItemPrice['pepperoni'] = 1;
  ItemPrice['mushroom'] = .5;
  ItemPrice['onion'] = .5;
  ItemPrice['ham'] = 1;
  ItemPrice['bacon'] = 1;
  ItemPrice['pineapple']=.75;
  ItemPrice['anchovies']=.5;
  ItemPrice['olives']=.25;
  ItemPrice['extra cheese']=.5;
  ItemPrice['fresh basil']=.75;

var Topping = function(name) {
  this.name = name;
  this.price = ItemPrice[name];
};

var Pizza = function(size) {
  this.size = size;
  this.basePrice = ItemPrice[size];
  this.toppings = [];
  this.cost = function() {
    var cost = this.basePrice;
    this.toppings.forEach(function(topping) {
      cost += topping.price;
    });
    return cost;
  };
  this.addTopping = function(topping) {
    for (var i = 0; i < this.toppings.length; i++) {
      if (this.toppings[i].name === topping.name) {
        return false;
      }
    }
    this.toppings.push(topping);
    return true;
    }
  };
