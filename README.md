# BUDGETY

## Planning Step 1 Todo-List:

- Add Event Listener
- Get inputs values
- Add new item to data structure
- Add new item to UI
- Calculate Budget
- update the UI

## Implementing the module pattern

### What you will learn

- how to use the module pattern
- more about private and public data, encapsulation and seperation of concern

## Setting up the first eventListener

### What you will learn

- How to set up eventlistner for click and keypress
- How to use event object

## Reading input data

### What you will learn

- How to read data from different HTML input

## Creating an intialiazed function

### What you will learn

- How and why to create an intialized function (basical for eventlistners)

## Creating income and expense function constructor

### What you will learn

- How to choose function constructor that meet our application needs
- How to setup a proper data structure for our budget controller

## Adding new item to our budget controller

### What you will learn

- How to avoid conflict in our data structure
- How and why to pass data from one module to another (addItem to the data structure)

## Adding new item to the UI

### What you will learn

- A technique for adding big chunks of HTML to the DOM (addListedItem)
- How ato replace parts of strings
- How to do DOM manipulation using insertAdjacentHTML method.

## Clearing input fields

### What you will learn

- How to clear HTML Field (clearfields)
- How to use querySelectorAll
- How to convert a list to an array.
- A better way to loop through an array (for loop, foreach)

## Updating the budget UI controller

### What you will learn

- DOM Manipulation by updating the budget and total value

## Planning Step 2 Todo-List:

- Add Event Listener
- Delete item from data structure
- Delete item from the UI
- Re-calculate Budget
- update the UI

## Setting up the delete event listener using event delegation

### What you will learn

- How to use event delegation i practice
- How to use Unique IDs in HTML to connect the UI with data modal
- How to use parentNode property for DOM Traversing.

## deleting an item from our budget controller

### What you will learn

- How to loop over an array using map method
- How to remove elements from an array using splice method

## deleting an item from UI

### What you will learn

- How to remove an element from the DOM(more DOM Manipulation)

## Planning Step 3 Todo-List:

- Calculate percentage
- update percentage in UI
- Display the current month and year
- Number formatting
- improve input field UX

## Updating the percentage in the controller:

- Reinforcing the concepts and technques learnt so far

\***\*\*\*\*\***\*\***\*\*\*\*\***Tips on Module:\***\*\*\*\*\***\*\***\*\*\*\*\***

- Module is an important aspect of any robust applications architecture
- keeps the units of codes for project both cleanly seperated and organized.
- Encapsulate some data into privacy and expose some publicly.
  NB:We create module in our project is because we want to keep pieces of our codes related to one another together inside a seperate and independent and organised unit and in each of this module, it will have varaible,methods and functions that are private meaning they are only accessible inside the module. so that no other code will over write our data, so our data or code will be save .apart from variables, functions we will also have public variables, methods and functions that can be acess publicly. \***\*\*\*\*\***\*\***\*\*\*\*\***Creation of Module\***\*\*\*\*\***\*\***\*\*\*\*\***
  this can be done by using module pattern by knowing the consect of closures and IIFE
