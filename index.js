// we created a function called createStore() that returns a store object
// createStore() must be passed a "reducer" function when invoked
// the store object has three methods on it:
// .getState() - used to get the current state from the store
// .subscribe() - used to provide a listener function the store will call when the state changes
// .dispatch() - used to make changes to the store's state
// the store object's methods have access to the state of the store via closure





/// Library Code
function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state

    let state // 1. The State

    let listeners = []

    const getState = () => state // Get the Store method ,it just returns the state object!
    //Listener 
    const subscribe = (listen) => {   //Listen to changes on the state.
        listeners.push(listen)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,  // a we call the function create store we will return our getState.
        subscribe,
        dispatch
    }
}


// App Code
// Action 
function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state
}

const store = createStore(todos)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})


// this will update the reducer everytime, you add action to
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: 'want to learn redux',
        complete: false
    }
})

// const store = createStore();
// store.subscribe(() => {
//     console.log("the new state is here" + store.getState)
// })

// // we provide user to a way to unsubscribe the changings
// const unsub = store.subscribe(() => {
//     console.log("the store updated" + store.subscribe)
// })

// unsub()

