Day-09
React Redux

***Redux***
The Store
your every application is made up of your UI and states,
***Remember that the main goal of Redux is to make the state management of an application more predictable***
// The store should have four parts
 **1. The state
2. Get the state.
 3. Listen to changes on the state.
 4. Update the state**
 
 For update the state we must take care of the state, like all the players at the same time play different thing can make states unpredicatable so for that there is rule to be followed.
 
 ***Rule#01***
Only an event can change the state of the store.

**Actions** 
Record of state changes.
=>we use a plain JavaScript object to keep track of what the specific event was. This object is called an **Action**.
Look at Action
```
{
  type: "ADD_PRODUCT_TO_CART"
}
```
_every_ Action must have a `type` property otherwise Redux will throw an error.

We need a function to update state and which returns new state, but for that function we need two aruguments , the current state and the action which occured. That is being done using pure functions.

Rule02
the function that returns new state needs to be pure function

***Pure Functions***
**Pure functions**  are integral to how state in Redux applications is updated. By definition, pure functions:

1.  Return the same result if the same arguments are passed in
2.  Depend solely on the arguments passed into them
3.  Do not produce side effects, such as API requests and I/O operation

**Reducer** 
A reducer must be a pure function

A function with current state and action is called as reducer funcation.

when we have 2 reducers like todo reducer and goal reducer , we can't pass arguments to getStore, so for that we will create root reducer to pass reducers todos,goals. 
