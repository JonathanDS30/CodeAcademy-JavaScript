const menu = {
  _menu : '',
  _price : 0,
  
  // setter meal 
  set meal(mealToCheck){
    if(typeof(mealToCheck) === 'string'){
      return this._meal = mealToCheck;
    }
  },
  // setter price
  set price(priceToCheck){
    if(typeof(priceToCheck) === 'number'){
      return this._price = priceToCheck;
    }
  },
  // getter _meal _price
  get todaysSpecial(){
    if (this._meal && this._price) {
      return `Today's meal is ${this._meal} for ${this._price}`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

menu.meal = 'Pizza';
menu.price = 100;

console.log(menu.todaysSpecial);
console.log(menu);
