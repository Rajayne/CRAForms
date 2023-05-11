# React Forms

### Testing Requirements

- Every component needs a smoke and snapshot test.
- Test core functionality aka. ability to enter data, submit form, and updates to DOM must have tests.

## Part 1: Color Box Maker

Create a new React application, which contains the following components:

1. App - render the BoxList component.
2. BoxList - render all of the Box components along with the NewBoxForm component. Place state that contains all of the boxes here.
3. Box - display a `<div>` with a background color, width, and height based on the props passed to it.
4. NewBoxForm - render a form that creates a new Box when submitted. Must specify the Box’s width, height, and background color. When submitted, clear input values.
5. Each Box component should have a button with the text of “X” that removes the target box when clicked. Requires passing a function down as props (button should included in the Box component, not be a separate component).

## Part 2: Todo App

Create a Todo App that allows users to see, add, edit, and remove todos. Should contain the following components:

1. App - render the TodoList component
2. TodoList - render the NewTodoForm component and the list of Todo components. Place state that contains all of the todos in this component.
3. NewTodoForm - render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created.
4. Todo - display a `<div>` with the task of the todo.
5. Each Todo component should have a button with the text “X” that removes the todo when clicked.

# Further Study

1. Each Todo component should also display a button with the text “edit” that when clicked, displays form with the task of the todo as an input and a button to submit the form. When the form is submitted, the task of the text should be updated and the form should be hidden.
2. When each Todo component is displayed, add a button with the text of “Mark as completed”. When this button is clicked, add a strike through the text of the todo.
3. Instead of a button that when clicked adds a strike through, refactor your application so that when that button is clicked, if the todo is completed (something each todo will have in state), add a strike through, otherwise if a todo is not completed, remove the strike through.
4. Add styling to the application! Try to use a CSS animation that fades out a Todo when it is deleted (this will involve adding/removing CSS classes). Write this using SASS!
5. Save your todos in localStorage and retrieve them when the page loads.
