import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import memories from "./image/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" className={classes.heading} align="center">
          Memories
        </Typography>
        <img
          src={memories}
          alt={memories}
          height="60"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            align-items="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
