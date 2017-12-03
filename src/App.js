import React, { Component } from 'react';

import './App.css';
import Home from "./paginas/home";
import Albums from "./paginas/albums";
import Posts from "./paginas/posts";
import Fotos from "./paginas/fotos";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component{

  state = {
    posteos: []
  }

  componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/posts")
      .then(respuesta => respuesta.json())
      .then((datos) => {
        
       this.setState({
          cargando: false,
          nombre: datos.nombre,
          apellido: datos.apellido,
          edad: datos.edad,
          ropa: datos.ropa,

          posteos: datos
        });

      });
  }

  render(){
    return (
     <MuiThemeProvider >
      <div className="App">

        <Router>
          <div>

            <nav>
              <Link to='/'>Home</Link>
              <Link to='/albums'>Albums</Link>
              <Link to='/posts'>Posts</Link>
              <Link to='/fotos'>Fotos</Link>
            </nav>

            <Route exact path='/' component={Home} />
            <Route path='/albums' component={Albums} />
            <Route path='/fotos/' component={Fotos} />
            <Route path='/posts' component={Posts} />
          </div>
        </Router>

        {this.state.posteos.map((posteo) => {
          return (
            <Card>>
              <CardTitle title="Card title" subtitle={posteo.title} />
              <CardText>
                <p>{posteo.body}</p>
              </CardText>
            </Card>
            )
        })}
      </div>
      </MuiThemeProvider> 
    );
  }
}

export default App;