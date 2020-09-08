import {USER_LOGIN_SUCCESS} from '../action/auth';

const auth = (state={}, action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload.user
            }
        default:
            return {
                ...state
            }
    }

}

export default auth;