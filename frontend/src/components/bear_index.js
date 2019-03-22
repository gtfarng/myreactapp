import React, { Component } from 'react';
import BearAdd from './bear_add';
import BearShow from './bear_show';
import BearEdit from './bear_edit';
import BearGet from './bear_get'
import '../App.css'

export default class BearIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { name: 'gtfarng', weight: 55 };
        console.log("State: ", this.state)
    }


    editBear = (item) => {
        console.log(item.data.name + item.data.weight);
        this.setState({ name: item.data.name, weight: item.data.weight });
    }

    render() {
        return (
            <div className="container">
                <div className="App">
                    <header className="App-header">
                        <br /> <h1>My-ReactApp (Bear-Redux)</h1><br />
                    </header>

                </div>
                <br />
                <BearShow editBear={this.editBear} />
                <br />
                <BearGet />
                <br />  <br />
                <div className="row">
                    <div className="col-md-6">
                        <BearAdd />
                    </div>
                    <div className="col-md-6">
                        <BearEdit />
                    </div>

                </div>
                <br /><br /><br /> <br /><br />
            </div>
        );
    }
}

