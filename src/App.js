import React, { Component } from 'react';
import Github from './github/Github'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './App.css'

export const set = (x) => ({ type: 'SET', value: x })
export const reset = () => ({ type: 'RESET' })

export const githubReducer = (state = [], action) => {
  switch (action.type) {
    case 'RESET':
      return state = []
    case 'SET': {
      if (action.value === 'null')
        return state.concat([''])
      else
        return state.concat([action.value])
    }
    default:
      return state
  }
}

export const rootReducer = combineReducers({ githubs: githubReducer })
export const store = createStore(rootReducer,applyMiddleware(logger,thunk))

export default class App extends Component {
  render() {
    return (
      <div align="center">
        <header className="App-header">
          <br /><h1>My-App</h1><br />
        </header>


        <div>
          <Provider store={store}>
            <Github />


          </Provider>
        </div>
      </div>
    )
  }
}



