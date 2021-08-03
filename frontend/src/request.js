export const headers = token =>{
    return {
        headers:{
            'Content-Type':'apllication/json',
            'Authorization':'Token '+token
        }
    }
}