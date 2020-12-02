//!define inital state atau tamplate untuk setiap reducer atau penampung

const INITIAL_STATE = {
    username : '',
    password : '',
    email : ''
}

//!bikin function dengan nama reducernya dengan parameter tamplate yang sudah dibuat
//!paramater (state, action)
//!kondisi menggunakan switch case
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOG_IN' : 
        return {
            ...state, //!copy state
            username: action.payload.username,
            password : action.payload.password,
            email : action.payload.email
        }
        case "LOG_OUT" : 
        return INITIAL_STATE
        default : 
        return state
    }
}

export default userReducer