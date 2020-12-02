
const INITIAL_STATE = {
    count : 0
}

const countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TAMBAH' :
            return{
                count : state.count + 1
            }
        case 'KURANG' :
            return{
                count : state.count -1
            }
        default :
        return state
    }
}

export default countReducer