//
//
//
// Budget Controller
let budgetController = (function() {
  let Expence = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      // Creating new id
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

      // Create new item based on 'inc or 'exp' type
      if (type === exp) {
        newItem = new Expence(ID, des, val);
      } else if (type === inc) {
        newItem = new Income(ID, des, val);
      }

      //Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    }
  };
})();

//
//
// UI Controller
let UIController = (function() {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

//
//
// Global App Controller
let controller = (function(budgetCtrl, UICtrl) {
  let setupEventListeners = function() {
    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.shiftKey === 13) {
        ctrlAddItem();
      }
    });
  };

  let ctrlAddItem = function() {
    // 1. Get the field input data
    let input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the ui
    // 4. calculate the budget
    // 5. display the budget on the ui
  };

  return {
    init: function() {
      console.log("Aplication has started.");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
