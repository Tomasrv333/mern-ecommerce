// import axios from '../utils/axios.config';
import { useEffect, useState } from "react";

export default () => {
    const [auth, setAuth] = useState();

    const verifyAuth = async () => {
        try{
            const res = await axios.get('/api/auth/is_logged_in')
            return res.data;
        } catch(err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        (
            async () => {
                const data = await verifyAuth();
                console.log(data)
                setAuth(data);
            }
        )();
    });

    return { auth };
};