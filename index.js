const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "Buying cake from the store"
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state =initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

const store = createStore(reducer)

// get the initial state from the reducer
console.log("Initial State",store.getState())

// Listener
const unsubscribe = store.subscribe(
    ()=> console.log("Updated state", store.getState())
)

// call the actions
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()