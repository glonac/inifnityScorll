import React from 'react';
import {Link, useParams} from "react-router-dom";
import useOneUser from "../hooks/useOneUser";
import {Grid, Paper, Typography} from "@mui/material";

const User = () => {
    const {id} = useParams();
    const {loading, error, user} = useOneUser(id);
    return (
        <>
            {user &&
                <Paper sx={{maxWidth: 1000, my: 1, mx: 'auto', p: 5}}>
                    <Grid container wrap="nowrap" spacing={2} direction={'column'}>
                        <Grid item>
                            <Typography variant={'h5'}>{user.name}</Typography>
                        </Grid>
                        {user.email &&
                            <Grid item xs>
                                <Typography>{user.email}
                                </Typography>
                            </Grid>
                        }
                        {user.website &&
                            <Grid item xs>
                                <Typography>
                                    {user.website}
                                </Typography>
                            </Grid>
                        }
                    </Grid>
                </Paper>
            }
        </>
    );
}

export default User;
