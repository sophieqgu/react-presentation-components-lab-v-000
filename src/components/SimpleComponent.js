// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponenent extends Component {
    state = {
        mood: "happy"
    }

    handleClick = () => {
        let newMood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: newMood
        })
    }

    render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponenent