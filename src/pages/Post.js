import React from 'react';
import {
    Link,
} from "react-router-dom";
import {useParams} from "react-router-dom";
import useOnePost from "../hooks/useOnePost";
import {Grid, Paper, Typography} from "@mui/material";

const Post = () => {
    const {id} = useParams();
    const {loading, error, post, user} = useOnePost(id);
    return (
        <>
            {post && post[0] &&
                <Paper sx={{maxWidth: 1000, my: 1, mx: 'auto', p: 5}}>
                    <Grid container wrap="nowrap" spacing={2} direction={'column'}>
                        <Grid item>
                            <Typography variant={'h5'}>{post[0].title}</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                {post[0].body}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Link to={`/user/${user.id}`}>{user.name}</Link>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </>
    );
}

export default Post;

