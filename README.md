# budgety
## Implementing the module pattern
### What you will learn 
- how to use the module pattern
- more about private and public data, encapsulation and seperation of concern 
## Setting up the first eventListener
### What you will learn 
- How to set up eventlistner for click and  keypress
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
- How to setup a  proper data structure for our budget controller
## Adding new item to our budget controller
### What you will learn 
- How to avoid conflict in our data structure
- How and why to pass data from one module to another (addItem to the data structure)
## Adding new item to the UI
### What you will learn 
- A technique for adding big chunks of HTML to the DOM (addListedItem)
- How ato replace parts of strings 
- How to do DOM manipulation using insertAdjacentHTML method.


*********************Tips on Module:*********************
- Module is an important aspect of any robust applications architecture
- keeps the units of codes for project both cleanly seperated and organized.
- Encapsulate some data into privacy and expose some publicly.
NB:We create module in our project is because we want to keep pieces of our codes related to one another together inside a seperate and independent and organised unit and in each of this module, it will have varaible,methods and functions that are private meaning they are only accessible inside the module. so that no other code will over write our data, so our data or code will be save .apart from variables, functions we will also have public variables, methods and functions that can be acess publicly.
*********************Creation of Module*********************
this can be done by using module pattern by knowing the consect of closures and IIFE

