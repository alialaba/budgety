//BUDGET CONTROLLER
let budgetCntroller = (function () {

})();

//UI CONTROLLER
let UIController = (function () {
    //DOMs strings allocate variable
    let DOMStrings = {
        inputType: ".add__type",
        inputDecription: ".add__description",
        inputValue: ".add__value"
    }


    //getting the inputs value
    return {
        getInputs: function () {
            //returning object of  the  inputs value
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDecription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }
        }

    }

})()

//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    //function that add items
    const addItemCtrl = () => {
        //get the field input data


        let input = UICtrl.getInputs();
        console.log(input);
        //add the item to the budget controller

        //add the item to the UI
        //calculate the budget
        //display the budget  on the UI
    }
    //button variable
    let addBtn = document.querySelector(".add__btn");
    //the button click event 
    addBtn.addEventListener("click", addItemCtrl);

    //the return/ enter press event
    document.addEventListener("keypress", function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            addItemCtrl();
        }
    })

})(budgetCntroller, UIController);


