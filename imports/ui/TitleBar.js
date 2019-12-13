import{Meteor} from "meteor/meteor";
import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
TitleBar.propTypes={
    title: PropTypes.string.isRequired

};
TitleBar.defaultProps = {
    title:'Default title'
};