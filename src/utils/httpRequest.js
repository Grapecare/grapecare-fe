import axios from 'axios';
import storeInit from "../redux/store"
import { removeUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const httpRequest = async (url, method = 'get', body = null, contentType = "application/json", others) => {
    const token = storeInit.store.getState()?.auth?.user?.token;
    try {
        const response = await axios({
            url,
            method,
            data: body,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': contentType
            },
            ...others,
        });
        return response?.data;
    } catch (error) {
        if(error.response?.status === 401){
            storeInit.store.dispatch(removeUser());
            // window.location.href = "/login"
            return error.response?.data;
        }else{
            return error.response?.data;
        }
    }
};

export default httpRequest;