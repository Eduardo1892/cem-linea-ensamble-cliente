import { 
    SIGNIN_ERROR, 
    SIGNIN_SUCCESS,
    SIGNOUT,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR, 
} from "../types"


const AuthReducer = (state, action) => {

    switch (action.type) {

        case AUTH_USER_SUCCESS:
        case SIGNIN_SUCCESS:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
            }
        case AUTH_USER_ERROR:
        case SIGNIN_ERROR:
        case SIGNOUT:
            return {
                ...state,
                usuario: null,
                autenticado: false,
            }
        default:
            return state
    }

}

export default AuthReducer