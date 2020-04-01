// Budget Controller
let budgetController = (function() {
  // some code
})();

// UI Controller
let UIController = (function() {
  //some code
})();

// Global App Controller
let controller = (function(budgetCtrl, UICtrl) {
  let ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the ui
    // 4. calculate the budget
    // 5. display the budget on the ui
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.shiftKey === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
