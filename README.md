# Hooks Demo Todo List
----
This project is a from a live coding demo I gave to the React developer community. The goal of the demo was to introduce React Hooks and create a to-do list using a class component and function component. The components were developed in parts and alongside each other in order to compare the different approaches effectively. This is in a similar vein to the fantastic [introductory talk given by Sophie Albert, Dan Abramov and Ryan Florence](https://www.youtube.com/watch?v=dpw9EHDh2bM).

The demo gave a basic overview, example uses and optimization tips for useState, useEffect and useContext. It makes use of component mounting, updating and unmounting lifecycles and showcases similar side effects made using useEffect. It also highlights the ability to create custom, reusable Hooks. 

## Structure
----
The class component can be found in `components/ClassExample` and the function component can be found in `components/HooksExample`. 

The `/a` route renders the Class component and the `/b` route renders the function component. 