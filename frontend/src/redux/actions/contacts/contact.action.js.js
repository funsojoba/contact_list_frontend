import { FETCH_CONTACT_SUCCESSFUL, FETCH_CONTACT_FAILED } from "../types";
import axios from 'axios'
import { headers } from '../../../request'

const token = localStorage.getItem('token')

const fetchContactSuccess = (payload) => {
    return {
        type: FETCH_CONTACT_SUCCESSFUL,
        payload
    }
}

const fetchContactFailed = (payload) => {
    return {
        type: FETCH_CONTACT_FAILED,
        payload
    }
}

const getContact = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/v1/', headers(token))
        .then(res => {
            dispatch(fetchContactSuccess(res.data))
            console.log(res)
        }).catch(err => {
            dispatch(fetchContactFailed(err))
            console.log(err.response)
        })
}

export default getContact