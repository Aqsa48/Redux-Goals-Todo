/* Create An Action Creator
 *
 * You need to create an action creator called 'mealCreator' that should:
 *   - Accept an id
 *   - Return a Redux action with a 'type' property that has a value of 'CREATE_MEAL'
 *   - Include the id passed to the action creator
*/
/// Library Code
function createStore(reducer) {


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
const CREATE_MEAL = 'CREATE_MEAL'

function createMealAction(act) {
    return {
        type: CREATE_MEAL,
        act,
    }
}

function mealCreator(state = [], action) {
    if (action.type === CREATE_MEAL) {
        return state.concat([action.act])
    }

    return state
}

const store = createStore(mealCreator)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})


// this will update the reducer everytime, you add action to
store.dispatch(createMealAction({
    id: 0,
    name: 'Making Sweet dish',
    complete: true,
}))

store.dispatch(createMealAction({
    id: 1,
    name: 'Making Briyani',
    complete: false,
}))


