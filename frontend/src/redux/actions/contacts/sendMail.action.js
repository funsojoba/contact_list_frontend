import { SEND_MAIL_SUCCESS, SEND_MAIL_FAILED } from "../types";
import axios from "axios";
import { headers } from "../../../request";

const token = localStorage.getItem('token')
const sendMailFailed = (payload)=>{
    return {
        type: SEND_MAIL_FAILED,
        payload
    }
}

const sendMailSuccess = (payload)=>({
    type: SEND_MAIL_SUCCESS,
    payload
})

const sendMail = (payload, id) => (dispatch)=>{
    axios.post('http://127.0.0.1:8000/api/v1/send-mail/'+id, headers(token))
    .then(res => {
        dispatch(sendMailSuccess(res.data))
        console.log(res)
    }).catch(err =>{
        dispatch(sendMailFailed(err))
        console.log(err)
    })
}

export default sendMail