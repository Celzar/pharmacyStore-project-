import {
    SET_CURRENT_USER
} from '../Types/index'

// @import libraries
import isEmpty from 'is-empty'

let initialState = {
    isAuthenticated: false,
    user: {}

}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }
    
        default: return state
    
    }


}