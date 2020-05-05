import React, { Component } from 'react';

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;
        
        if(posts.length === 0) return null
        console.log(posts)
    }
    
    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        )
    }
}
export default Listado;