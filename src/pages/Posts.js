import {
    Link,
} from "react-router-dom";
import useInfinitiScroll from "../hooks/useInfinitiScroll";
import {useCallback, useRef, useState} from "react";
import {Card, CircularProgress, Grid, Paper, Typography} from "@mui/material";

const Posts = () => {
    const [page, setPage] = useState(0);
    const {loading, error, posts} = useInfinitiScroll(page);

    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => {
                    return prevPage + 1
                })
            }
        });
        if (node) observer.current.observe(node)
    }, [loading])

    return (
        <div className="Posts">
            <Typography variant={"h3"} align="center" sx={{my:1, mx:'auto'}}>Posts</Typography>
            {posts.map((posts, index) => {
                return <div key={index}>
                    {posts.map((post, key) => {
                        return (
                            <>
                                <Paper sx={{maxWidth: 1000, my: 1, mx: 'auto', p: 5}}>
                                    <Grid container wrap="nowrap" spacing={2} direction={'column'}>
                                        <Grid item>

                                            {posts.length === key + 1 ?
                                                <Link ref={lastPostElementRef} key={key}
                                                      to={`/post/${post.id}`}>{post.title}</Link>
                                                :
                                                <Link key={key} to={`/post/${post.id}`}>{post.title}</Link>
                                            }
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>
                                                {post.body}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </>
                        );
                    })}
                </div>
            })}
            {loading &&
                <CircularProgress  color="secondary" />
            }
            {error &&
                <Typography variant={"h3"} align="center" sx={{my:1, mx:'auto'}}>Error</Typography>
            }
        </div>
    );
}

export default Posts;