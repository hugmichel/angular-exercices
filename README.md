Exercices
=========

Task 1
------
a. Display a material input field and a label with the text "write something in the input field to change this label".

b. If the user types characters in the input field, update the text on the label accordingly.


Task 2
------
a. Display two 2 tabs with different content.

b. If the user clicks on one of the tabs, the main content of the page changes accordingly.

 
Task 3
------
1. Create a pipe function that takes a string as input and validates the following:

    a. The given string is an integer

    b. The given string is at least 3 characters long

    c. The given string contains at least a 9

2. When the validation is wrong the system should return an error to the user explaining what condition failed.

3. Apply the pipe function to the input field from task 1


Task 4 [optional]
-----------------
1. Create a unit test that validates your pipe function in the following way

    a. Running the function with the input "test" shall return an error "the inserted text is not an integer"

    b. Running the function with the input "109" shall return "validated"

    c. Running the function with the input "11" shall return an error "the inserted text is too short and it does not contain a 9"


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
