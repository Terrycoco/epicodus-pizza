var PriceList = new Object();
  PriceList['small'] = 7;
  PriceList['medium'] = 9;
  PriceList['large'] = 12;
  PriceList['pepperoni'] = 1;
  PriceList['mushroom'] = .5;
  PriceList['onion'] = .5;
  PriceList['ham'] = 1;
  PriceList['bacon'] = 1;
  PriceList['pineapple']=.75;
  PriceList['anchovies']=.5;
  PriceList['olives']=.25;
  PriceList['extra cheese']=.5;
  PriceList['fresh basil']=.75;



var Topping = function(name) {
  this.name = name;
  this.price = PriceList[name];
};


var Item = function(name) {
  this.name = name;
  this.basePrice = PriceList[name];
  this.toppings = [];
  var cat = ['small', 'medium','large'];
  if (cat.indexOf(this.name) > -1) {
    this.category = "pizza";
  } else {
    this.category = "topping";
  }

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
  };

};



var Items = function () {
  this.items = [];
  for (var key in PriceList) {
     var item = new Item(key);
     this.items.push(item);
  }
  this.find = function(itemName) {
    for (var i=0;i<this.items.length;i++) {
      if (this.items[i].name == itemName) {
        return this.items[i];
      }
    }
    return false;
  };
};

var Order = function() {
  this.items = [];
  this.total = function() {
    var cost = 0;
    this.items.forEach(function(item) {
      cost += item.cost();
    });
    return cost;
  }
  this.addItem = function(item, quantity) {
    for (var i=1; i <= quantity; i++) {
      this.items.push(item);
    }
  };
};

$(document).ready(function() {
  var items = new Items();
  function showToppings() {
      items.items.forEach(function(item) {
        if (item.category == 'topping') {
          $("#toppings").append('<input type="checkbox" name="topping" value="' + item.name + '">' + item.name + '<br>');
        }
      });
  };
  showToppings();

  $("#order-form").submit(function(e) {
    e.preventDefault();
    //gather items ordering
    var size = $("#order-form input[type='radio']:checked").val();

    if (size != null) {
      var pie = new Item(size);
    }




    var selectedToppings = $("#order-form input:checkbox:checked").map(function(){
        return $(this).val();
    });



    tops = "";
    for (var t=0; t < selectedToppings.length; t++) {
     pie.addTopping(new Topping(selectedToppings[t]));
     tops += '<li class="list-group-item">' + pie.toppings[t].name + '</li>';
   }

    $("#order").append(
      '<ul class="list-group">' + pie.name.toUpperCase() + tops + '<ul>'
    );
  });


});
