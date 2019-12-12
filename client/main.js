import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';

const renderPlayer=()=>{
    return [<p key='1'>1</p>,<p key='2'>2</p> ]
};
Meteor.startup(() => {
  // code to run on server at startup
    const title = 'Score Keep';

    const jsx = (
        <div>
            <h1>{title}</h1>
            {renderPlayer()}
        </div>
    );
    ReactDom.render(jsx,document.getElementById('app'))
});