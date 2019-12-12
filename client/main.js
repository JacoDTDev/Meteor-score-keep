import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Tracker} from'meteor/tracker';
import {Players} from "../imports/api/players";

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).
            <button onClick={()=> Players.update({_id:player._id},{$inc:{score:1}})}>+1</button>
            <button onClick={()=> Players.update({_id:player._id},{$inc:{score:-1}})}>-1</button>
            <button onClick={()=> Players.remove({_id:player._id})}>X</button>
        </p>;
    });
};

const handleSubmit = function(e){
    e.preventDefault();
    let playerName = e.target.playerName.value;

    if(playerName){
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        })
    }
};

Meteor.startup(function () {
    Tracker.autorun(()=>{
        const players = Players.find().fetch()
        let title = 'Score Keep';
        let name = "Andy";
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                <p>This is my second p.</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type='text' name='playerName' placeholder='Player name'/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDom.render(jsx,document.getElementById('app'))
    });
    //Inset new doc into db
   // Players.insert({name: 'Tom', score:15});

});