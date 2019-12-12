import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';

Meteor.startup(() => {
  // code to run on server at startup
    const jsx = (
        <div>
            <h1>Score Keep</h1>
        </div>
    );
    ReactDom.render(jsx,document.getElementById('app'))
});