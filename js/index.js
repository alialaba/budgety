//BUDGET CONTROLLER
let budgetCntroller = (function () {
    let Income = function (id, decription, value) {
        this.id = id;
        this.decription = decription;
        this.value = value;
    }

    let Expense = function (id, decription, value) {
        this.id = id;
        this.decription = decription;
        this.value = value;

    }
    //data structure for adding item;
    let data = {
        allItems={
            exp: [],
            inc: []
        },
        total={
            exp: 0,
            inc: 0
        }

    }
})();


//UI CONTROLLER
let UIController = (function () {
    //DOMs strings allocate variable
    let DOMStrings = {
        inputType: ".add__type",
        inputDecription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }


    //getting the inputs value
    return {
        getInputs: function () {
            //method for returning object of  the  inputs value
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDecription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }
        },
        //method for getting access to DOMstring
        getDOMStings: function () {
            return DOMStrings;
        }
    }

})()

//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    let setEventListeners = function () {
        //getting acces to the DOMstring in UICtrl
        let DOM = UICtrl.getDOMStings();

        //button variable
        let addBtn = document.querySelector(DOM.addBtn);
        //the button click event 
        addBtn.addEventListener("click", addItemCtrl);

        //the return/ enter press event
        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                addItemCtrl();
            }
        })

    }
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
    //set a public method
    return {
        init: function () {
            console.log("the app is working");
            setEventListeners()

        }
    }

})(budgetCntroller, UIController);


controller.init();