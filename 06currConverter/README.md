This project demonstrate the currency conversion of various currency. For this currency API is integrated for various currency name and its current value.

API=https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

Topics that learned in this project

# Hooks:

1. Hooks were added to React in version 16.8.
2. Hooks allow function components to have access to state and other React features.
3. Because of this, class components are generally no longer needed.

# Custom Hooks:

1. Hooks are reusable functions.
2. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

# useId:

1. useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

# useEffect:

1. In this project useEffect use in API custom hook as it need to fetch API as soon the hook get mounted

# Reusable Components:

1. A reusable component is a piece of UI that can be used in various parts of an application to build more than one UI instance.
2. For instance, we can have a button component display with different colors in several parts of our application.

# JS:

1. onChange
2. map
3. swaping

Tricks:
Exporting all component from 1 single index.js

# Note:

1. to iterate elements in react use "key" for optimization because while rendering react hits a lot in a performance as it asumes that its going on recreating the same dom, hence need "key" to make sure it's new everytime

1.2 Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

2. useId hook should not use to generate "Key" in react.
