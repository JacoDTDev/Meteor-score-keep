import{Meteor} from "meteor/meteor";
import React from 'react';

export default class TitleBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Score Keep</h1>
            </div>
        );
    }

}