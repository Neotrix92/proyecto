import React, { Component } from 'react';

export default class Albums extends Component{

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
			



			

{this.state.posteos.map((posteo) => {
          return (
            <Card>
              <CardTitle title="Card title" subtitle={posteo.title} />
              <CardText>
                <p>{posteo.body}</p>
              </CardText>
            </Card>
            )
        })}


			
				
			
				
			);
		
	}
}