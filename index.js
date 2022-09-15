const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// action types
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "Buying cake from the store"
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
    }
}

const initialCakesState = {
    quantity: 10
}

const initialIcecreamState = {
    quantity: 30
}

const cakeReducer = (state =initialCakesState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            quantity: state.quantity - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state=initialIcecreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            quantity: state.quantity - 1
        }
        default: return state
    }
}

// combine the reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

// create your store
const store = createStore(rootReducer)

// get the initial state from the reducer
console.log("Initial State",store.getState())

// Listener
const unsubscribe = store.subscribe(
    ()=> console.log("Updated state", store.getState())
)

// sample call the actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()