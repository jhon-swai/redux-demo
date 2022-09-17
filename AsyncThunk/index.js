const redux = require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios")

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAIL = "FETCH_USER_FAIL"

// Actions
const fetchUserRequest = ()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    }
}
const fetchUserFail = (error)=> {
    return {
        type: FETCH_USER_FAIL,
        payload: error
    }
}

// reducer initial state
const initialState = {
    loading: false,
    data: [],
    error: ""
}
// reducer
const reducer = (state = initialState, action)=> {
    switch(action.type){
        case FETCH_USER_REQUEST: return {
            data: [],
            loading: true,
            error: ""
        }
        case FETCH_USER_SUCCESS: return {
            loading:false,
            data: action.payload,
            error: ""
        }
        case FETCH_USER_FAIL: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default: return {
            loading: false,
            data: [],
            error: "the default switch has run " + action.type
        }
    }
}


const fetchUsers = () => {
    return function(dispatch, getState){
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                //response.data is the array of users
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch( error =>{
                //error.message
                dispatch(fetchUserFail(error.message))
            })
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// initial state
console.log("****initial state", store.getState())

store.subscribe(()=> {console.log("*********Changed state", store.getState())})

store.dispatch(fetchUsers())








