import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Navbar, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
    constructor(props) {
        super();

        this.state = {
            tag: ''
        };
    }

    onChange = (e) => {
        this.setState({
            tag: e.target.value
        });
    }

    handleSubmit = (e) => {
        console.log('Search input: ', this.state.tag);
        this.setState({
            tag: ''
        });
    };

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Lambda School React II</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <input type="text" placeholder="Search" onChange={this.onChange} value={this.state.tag} />
                    {' '}
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Navbar.Form>
            </Navbar>
        )
    }
}