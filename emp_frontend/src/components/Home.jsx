import React, { useEffect, useState } from 'react';
import {Button,Card,CardContent,CardMedia,Grid,Typography} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptors';

const Home = () => {
  const[emp,setemp]=useState([]);
  const navigate=useNavigate();
  useEffect (()=>{
    axiosInstance.get('http://localhost:4000/emp').then((res)=>{
      //console.log(res);
      setemp(res.data);
    }).catch ((error)=>{
      console.log(err);
    })
  },[])
  function update_data(val){
navigate('/empform',{state:{val}})
  }
  return (
    <Grid container spacing={4} sx={{ marginTop: '3%' }}>
      {emp.map((row, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
        
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.empname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {row.empmail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {row.empphone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {row.address}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{ marginRight: '5px' }}
              color="success" onClick={()=>{
              update_data(row)
              }}>
              UPDATE
            </Button>
            <Button variant="contained" color="error">
              DELETE
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
