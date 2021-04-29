import { toast } from 'react-toastify'

export const handleError = (e) => {

    console.log({e})
    let error = {
        tipo: 'error'
    }
    //error de servidor.
    if(!e.response){
        error = {
            ...error,
            msg: 'Algo va mal, vuelva a intentar'
        }
        toast.error(error.msg, {containerId: 'sys_msg'})

    //rescata los errores generados por validaciones sin express-validator 
    }else if(e.response.data.hasOwnProperty('msg')){

        //si es un error por token, elimina el token del localstorage.
        if(e.response.data.msg === 'TokenExpiredError' || e.response.data.msg === 'TokenMissingError'){
            localStorage.removeItem('token')
            //falta redirigir!
            toast.error('Error de token', {containerId: 'sys_msg'})
        }else{
             error = {
                ...error,
                msg: e.response.data.msg
            }
            toast.error(error.msg, {containerId: 'sys_msg'})
        }
       
    }
    
    return error

}