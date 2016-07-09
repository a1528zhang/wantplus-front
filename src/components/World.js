import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class World extends Component {
    render() {
        const { changeWorld} = this.props;
        return (
            <button onClick={changeWorld}>change world!</button>
        )
    }
}
export default World;