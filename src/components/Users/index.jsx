import React, { Component } from 'react'
import './styles.css'

class User extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-left">
                    <img src={this.props.avatar} alt="avatar"/>
                </div>
                <div className="card-right">
                    <h2>{this.props.name}</h2>
                    <p><em>Age: </em>{this.props.age}</p>
                    <p><em>Country: </em>{this.props.country}</p>
                </div>
            </div>
        )

    }
}


export default User