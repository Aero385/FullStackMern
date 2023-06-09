import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar} from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './styles.css';

import { getPosts} from './actions/posts';
import { useDispatch } from 'react-redux';


const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className='appBar' position='static' color='inherit'>
        <Toolbar>
          <Typography className='heading' variant='h2' > Memories </Typography>
          <img className='image' src={memories} alt='memories' height='60'/>
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className='mainContainer' justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid className='postsContainer' item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
