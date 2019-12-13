import React from 'react';
import {Players} from "../api/players";

const handleSubmit = function(e){
    e.preventDefault();
    let playerName = e.target.playerName.value;

    if(playerName){
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: this.props.score
        })
    }
};

export default class AddPlayer extends React.Component{
    render() {
        return (
            <div>
                <form onSubmit={handleSubmit.bind(this)}>
                    <input type='text' name='playerName' placeholder='Player name'/>
                    <button>Add Player</button>
                </form>
            </div>
        );
    }
}