import React, { Component } from 'react'
import axios from 'axios';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

// import { HashRouter } from "react-router-dom";


export class App extends Component {
  constructor() {
    super()
  
    this.state = {
      inventory: []
    };
    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }

    
  componentDidMount() {
    axios.get('/api/inventory').then( results => {
      this.setState({ posts: results.data });
    });
  }

  updatePost( id, text ) {
   axios.put('/api/products/:id', { text }).then( results => {
     this.setState({ posts: results.data });
   });
  }

  deletePost( id ) {
    axios.delete('/api/products/:id').then( results => {
      this.setState({ posts: results.data });
    });
  }

  createPost( text ) {
    axios.post('/api/product', { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }
 

 
  
  render() {
      
    
      return (
      // <HashRouter>
      <div>
        <Header />
        <Dashboard inventory = { this.state.inventory } />
        <Form />
     
            Learn React      
      </div>
      // </HashRouter>
    )
  }
}

export default App;
