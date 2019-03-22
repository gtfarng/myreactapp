import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { set, reset, store } from '../App'
import { connect } from 'react-redux'

class Github extends Component {
    state = {
        user: 'gtfarng',
        data: []
    }

    componentDidMount = () => {
        this.fetchUser(this.state.user)
    }

    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                store.dispatch(reset())
                store.dispatch(set('' + response.data.id))
                store.dispatch(set('' + response.data.login))
                store.dispatch(set('' + response.data.name))
                store.dispatch(set('' + response.data.url))
                store.dispatch(set('' + response.data.avatar_url))
                this.setState({ data: response.data })
                console.log(response.data)
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div>

                <div>
                    <br /><br />
                    <h1>Github ( ReactApp-Redux )</h1><br /><br />
                    <img src={this.props.githubs[4]} alt="avatar" width="200px" /><br /><br />

                    <h4>ID : <small>{this.props.githubs[0]} </small></h4>
                    <h4>User : <small>{this.props.githubs[1]}</small> </h4>
                    <h4>Name : <small>{this.props.githubs[2]} </small></h4>
                    <h4>URL :<small> {this.props.githubs[3]}</small> </h4><br/><br />


                    <input name="user" onChange={this.handleChange} placeholder="Username" />
                    <button onClick={() => this.fetchUser(this.state.user)} class="btn btn-success" style={{ margin: '15px' }} >Search</button><br /><br /><br />


                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        githubs: state.githubs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set: () => dispatch(set()),
        reset: () => dispatch(reset())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Github)