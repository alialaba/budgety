//BUDGET CONTROLLER
let budgetController = (function () {
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
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                //ID is the unique number that got assign to each item added for expense || income;
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create an item based on inc and exp
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //push into our data structure
            data.allItems[type].push(newItem);

            //return the new item element
            return newItem;
        },

        testing: function () {
            console.log(data)
        }
    };


})();


//UI CONTROLLER
let UIController = (function () {
    //DOMs strings allocate variable
    let DOMStrings = {
        inputType: ".add__type",
        inputDecription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: '.expenses__list'
    }


    //public
    return {
        //getting the inputs value
        getInputs: function () {
            //method for returning object of  the  inputs value
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDecription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }
        },
        //adding the list item
        addListItems: function (obj, type) {
            let html, newHtml, element
            //create HTML String with placeholder

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description" >%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id ="expense-%id%" ><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }


            //Replace theplaceholder test with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.decription);
            newHtml = newHtml.replace('%value%', obj.value);
            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        //method to clear fields
        clearfields: function () {
            var fields, fieldArr
            //inside the bracket we uses CSS format
            fields = document.querySelectorAll(DOMStrings.inputDecription + ', ' + DOMStrings.inputValue);
            fieldArr = Array.prototype.slice.call(fields);

            // foreach method can accept 3 params in its callback function 
            fieldArr.forEach((cur, index, arr) => {
                cur.value = '';
            })

            //bring back cursor to description input 
            fieldArr[0].focus();
        },
        //method for getting access to DOMstring
        getDOMStrings: function () {
            return DOMStrings;
        }
    }

})()

//GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {

    let setEventListeners = function () {
        //getting acces to the DOMstring in UICtrl
        let DOM = UICtrl.getDOMStrings();

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

        let input, newItem
        //1. get the field input data
        input = UICtrl.getInputs();
        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)
        //3. add the item to the UI
        UICtrl.addListItems(newItem, input.type);
        //clear fields
        UICtrl.clearfields();
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

})(budgetController, UIController);


controller.init();