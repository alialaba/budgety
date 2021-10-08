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
        totals: {
            exp: 0,
            inc: 0

        },
        budget: 0,
        //-1 is use to show that something is not exitense 
        percentage: -1
    }
    //function that calculate total budget
    let calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach((cur) => {
            sum += cur.value;
        })
        //set data.totals[type] to the total sum
        data.totals[type] = sum;
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


        //calculate budget method
        calculateBudget: function () {
            //calculate total income and expense
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate the budget:(income - expense)
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

            } else {
                data.percentage = -1;
            }
        },
        //method that returns the calculatedtotal budget
        getBudgets: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'

    }


    //public
    return {
        //getting the inputs value
        getInputs: function () {
            //method for returning object of  the  inputs value
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDecription).value,
                //parseFloat changes to number
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
            }
        },
        //adding the list item
        addListItems: function (obj, type) {
            let html, newHtml, element
            //create HTML String with placeholder

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description" >%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id ="exp-%id%" ><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
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
            //covert to an array
            fieldArr = Array.prototype.slice.call(fields);

            // foreach method can accept 3 params in its callback function 
            fieldArr.forEach((cur, index, arr) => {
                cur.value = '';
            })

            //bring back cursor to description input 
            fieldArr[0].focus();
        },
        //method to display budget update on UI
        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '--';

            }
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
        document.querySelector('.container').addEventListener('click', ctrlDeleteItem);

    }
    var updateBudget = function () {
        //1. calculate the budget
        budgetCtrl.calculateBudget()

        //2.Return the budget
        var budget = budgetCtrl.getBudgets();
        //3.display the budget  on the UI

        UICtrl.displayBudget(budget)
    }

    //function that add items
    const addItemCtrl = () => {

        let input, newItem
        //1. get the field input data
        input = UICtrl.getInputs();
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            //3. add the item to the UI
            UICtrl.addListItems(newItem, input.type);

            //4. clear fields
            UICtrl.clearfields();
            //5. calculate and update budget
            updateBudget()
        }


    }
    //function that delete items
    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;
        //traversed to the parent element and retrieved the unique id
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //removing - and converting itemID to an array;
        splitID = itemID.split('-');
        //inc-0 ||type[0] id[1]
        type = splitID[0];
        ID = splitID[1];

    }

    //set a public method for running the app
    return {
        init: function () {
            console.log("the app is working");
            setEventListeners()

            //reset all budgets to zero (0);
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })

        }
    }

})(budgetController, UIController);


controller.init();