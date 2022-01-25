import {useEffect, useState} from 'react'
import axios from "axios";

export default function useOneUser(id) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
            setLoading(true);
            setError(false);
            axios({
                method: 'GET',
                params: {id: id},
                url: 'https://jsonplaceholder.typicode.com/users'
            }).then(result => {
                setLoading(false)
                setUser(result.data[0])
            }).catch(e => {
                setError(true);
            })
        }, []
    )
    return {loading, error, user}

}

