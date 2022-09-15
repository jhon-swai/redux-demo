# Redux Basic
A basic use of redux with node. Our project is going to be focused on purchasing cakes and ice cream from a shop.

## Scenario
A customer comes to the shop (store) and requests for an item (cake or ice cream). The shop keeper takes the item and hands it to the customer. The customer receives, pays and leave the shop. 
<br/>

Note The customer can not take the cake himself the cake has to be given to him by the shopkeeper.

key items
- Installation of redux
- action types 
- Actions
- Reducers
- Store
- dispatch


## Install Redux
```
npm install redux
```
## Create Action Types

```JS
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

```
## Actions
```js
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

```
## Initial State
```js
const initialCakesState = {
    quantity: 10
}

const initialIcecreamState = {
    quantity: 30
}
```

## Reducers
```js
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
```
## combine the reducers 
```js
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
```

## Store
```js
// create your store
const store = createStore(rootReducer)
```

## Dispatch
```js
// sample call the actions
store.dispatch(buyCake())
store.dispatch(buyIcecream())
```
## Release
```
1.0.0

