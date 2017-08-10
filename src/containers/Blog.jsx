import React, { Component } from 'react';

class Blog extends Component {
    constructor (props) {
        super(props);

        this.state = {
            blogPosts: [],
            homePagePost:''
        };
    }

    render() {
        return (
            <div>
                <Dashboard />
                <Segment />
            </div>
        )
    }
}