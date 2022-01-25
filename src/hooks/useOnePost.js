import {useEffect, useState} from 'react'
import axios from "axios";

export default function useOnePost(id) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    useEffect(() => {
            setLoading(true);
            setError(false);
            axios({
                method: 'GET',
                params: {id: id},
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).then(result => {
                setPost(result.data)
                return result.data[0].userId;
            }).then(userId => {
                axios({
                    method: 'GET',
                    params: {id: userId},
                    url: 'https://jsonplaceholder.typicode.com/users'
                })
                    .then(resUser => {
                        setUser(resUser.data[0]);
                    }).catch(e => {
                    setError(true);
                })
            }).catch(e => {
                setError(true);
            })
        }, []
    )
    return {loading, error, post, user}
}
