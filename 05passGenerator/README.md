Topics covered:

1 UseCallback: useCallback is a React Hook that lets you cache a function definition between re-renders.
--> It means it will store the data in cache memory for more optimized results

2 useEffect: useEffect is a React Hook that lets you synchronize a component with an external system.
--> In this project useEffect is used to demonstrate multiple states simultaneously that are rendered at same time

    Synchronizing with Effects:
    -->Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen.
    -->Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

3 useRef: useRef is a React Hook that lets you reference a value that’s not needed for rendering.
-->In this project useRef is used for taking refference of input field that contains password so that we can target the password by refference so that we can copy it and perform various operation on refference value.
--> For eg.,
I we can highlight the copied field for more user satisfaction.
II we can add range to manipulate how much field we want to copy by refference.
