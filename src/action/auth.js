export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

const userLoginSuccess = user =>{
    return{
        type: 'USER_LOGIN_SUCCESS',
        payload:{
            user
        }
    }  
}

export const userLogin = user => dispatch =>{
    console.log(user)
    new Promise((resolve,reject)=>{
        if(user.name == "neha@gmail.com" && user.password == 'password'){
            return resolve(true);
        }
        else{
            reject(new Error(alert("Credential didn't match")));
        }
    })
    .then(response=>{
        dispatch(userLoginSuccess(response))
    })
    .catch(error=>{
        console.log(error)
    })
}
