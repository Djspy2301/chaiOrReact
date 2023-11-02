This project demonstarate the Context API the concepts is as follows:

# Context:

1. React Context is a way to manage state globally.
2. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

# Context API:

1. allows data to be passed through a component tree without having to pass props manually at every level.
2. This makes it easier to share data between components and it is associated pnly with react.
3. Except Context API we can use other state management libraries like Redux, React-Redux, Redux-toolkit(RTK), Zustand, etc,.

# Prop-Drilling:

1. Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely.
2. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.

# Code Implementation & Concepts:

1. useContext: useContext is a React Hook that lets you read and subscribe to context from your component.

Step1:
create context in new js file and store it in variable and export it-> React.createContext()
Note: As soona as context is created it becomes "Provider" by default. Created context can be called as global variable.

Step2:
Now create "ContextProvider.jsx" file as we have to set provider at the top of the fragment so we can get access to all variables. create function that takes props of "children" and return it in HTML with wrapper of 'UserContext.Provider' which has attribute "value" that contains variables

Step3:
In other components where we want context api use the hook called "useContext(<nameof_context>)" and use it
