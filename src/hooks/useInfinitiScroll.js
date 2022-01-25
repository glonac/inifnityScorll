import {useEffect , useState } from 'react'
import axios from "axios";

export default function useInfinitiScroll(page){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        setLoading(true);
        setError(false);
            axios({
                method: 'GET',
                params:{_start:page ,_limit:10},
                url: 'https://jsonplaceholder.typicode.com/posts'
            }).then(result =>{
                setLoading(false)
                setPosts(prevPosts => {
                    return [...prevPosts ,result.data]
                })
            }).catch(e =>{
                setError(true);
            })
        },[page]
    )
    return {loading ,error ,posts}
}
