const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  set appetizers(food) {
    return this._courses.appetizers.push(food);
  },
  set mains(food) {
    return this._courses.mains.push(food);
  },
  set desserts(food) {
    return this._courses.desserts.push(food);
  },

  // Method to add a dish
  addDishToCourse ( courseName, dishName, dishPrice ) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    if ( courseName === "appetizers" ) {
      this.appetizers = dish;
    }
    if ( courseName === "mains" ) {
      this.mains = dish;
    }
    if ( courseName === "desserts" ) {
      this.desserts = dish;
    }
  },

  // Method to randomly pick a meal
  getRandomDishFromCourse( courseName ) {
    const dishes = this._courses[courseName];
    const i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },

  // Method to randomly generate a 3 course meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    const total = appetizer.price + main.price + dessert.price;
    return "Your random meal starts with the " + appetizer.name + ". Then for the main dish you have " + main.name + ". For dessert you will have " + dessert.name + ". Your grand total will be $" + total + ", not including tax.";
  }
};

menu.addDishToCourse( "appetizers", "mozzarella sticks", 5.00 );
menu.addDishToCourse( "appetizers", "shrimp", 3.50 );
menu.addDishToCourse( "appetizers", "salad", 8.35 );
menu.addDishToCourse( "mains", "spaghetti", 5.50 );
menu.addDishToCourse( "mains", "chicken", 8.24 );
menu.addDishToCourse( "mains", "steak", 5.00 );
menu.addDishToCourse( "desserts", "ice cream", 2.00 );
menu.addDishToCourse( "desserts", "creme brulee", 4.20 );
menu.addDishToCourse( "desserts", "brownie", 1.00 );

console.log( menu.generateRandomMeal() );
