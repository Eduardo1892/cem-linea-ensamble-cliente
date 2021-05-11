import { useReducer } from "react"
import { 
    SIGNIN_ERROR, 
    SIGNIN_dark,
    SIGNOUT,
    AUTH_USER_dark,
    AUTH_USER_ERROR,
} from "../types"
import AuthContext from "./AuthContext"
import AuthReducer from "./AuthReducer"
import clienteAxios from '../../config/clienteAxios'
import { handleError } from "../../helpers"
import tokenAuth from "../../config/token"

const AuthState = props => {

    const initialState = {
        usuario: null,
        autenticado: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const iniciarSesion = async (codigo, password) => {

        try {

            const resp = await clienteAxios.post('/api/auth/web',{
                codigo,
                password,
            })
            
            localStorage.setItem('token', 'token')
            //localStorage.setItem('token', resp.data.token)
            tokenAuth(resp.data.token)

            dispatch({
                type: SIGNIN_dark,
                payload: resp.data.usuario,
            })
            
        } catch (e) {
            handleError(e)
            dispatch({
                type: SIGNIN_ERROR
            })
        }

    }

    const cerrarSesion = () => {

        localStorage.removeItem('token')
        tokenAuth(null)

        dispatch({
            type: SIGNOUT,
        })

    }

    const usuarioAutenticado = async () => {
        try {

            tokenAuth(localStorage.getItem('token'))

            const resp = await clienteAxios.get('/api/auth/usuario')

            dispatch({
                type: AUTH_USER_dark,
                payload: resp.data.usuario,
            })

        } catch (e) {
            handleError(e)
            dispatch({
                type: AUTH_USER_ERROR,
            })
        }
    }
    
    return  (
            <AuthContext.Provider
                value={{
                    usuario: state.usuario,
                    autenticado: state.autenticado,
                    iniciarSesion,
                    cerrarSesion,
                    usuarioAutenticado,
                }}
            >
                {props.children}
            </AuthContext.Provider>)
}

export default AuthState