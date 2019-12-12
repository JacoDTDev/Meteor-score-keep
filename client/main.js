import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import {Tracker} from'meteor/tracker';
import {Players} from "../imports/api/players";

const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
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
            </div>
        );
        ReactDom.render(jsx,document.getElementById('app'))
    });
    //Inset new doc into db
   // Players.insert({name: 'Tom', score:15});

});