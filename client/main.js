import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Tracker} from'meteor/tracker';
//Mongodb
import {Players} from "../imports/api/players";
//React components
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).
            <button onClick={()=> Players.update({_id:player._id},{$inc:{score:1}})}>+1</button>
            <button onClick={()=> Players.update({_id:player._id},{$inc:{score:-1}})}>-1</button>
            <button onClick={()=> Players.remove({_id:player._id})}>X</button>
        </p>;
    });

};



Meteor.startup(function () {
    Tracker.autorun(()=>{
        const players = Players.find().fetch();
        const title = "Score Keep";
        let jsx = (
            <div>
                <TitleBar title={title}/>
                {renderPlayers(players)}
                <AddPlayer score={10}/>

            </div>
        );
        ReactDom.render(jsx,document.getElementById('app'))
    });
    //Inset new doc into db
   // Players.insert({name: 'Tom', score:15});

});