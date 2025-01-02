# React 18 StrictMode and useEffect Pitfall

This repository demonstrates a common issue encountered when using `useEffect` with state updates in React 18, especially within `StrictMode`.  React 18's automatic batching of state updates can lead to unexpected behavior if a side effect in `useEffect` relies on state updated within the same render cycle. StrictMode helps surface these problems.

## The Problem

The `bug.js` file contains a component that updates its state and logs a message to the console within the `useEffect` hook.  In StrictMode, this leads to an error because the side effect attempts to access the updated state before the render cycle completes. 

## The Solution

The `bugSolution.js` file shows how to fix the issue.  The key change is to ensure that the dependency array in `useEffect` includes any state variables that the side effect depends on. This guarantees the effect only runs when the dependent state changes.