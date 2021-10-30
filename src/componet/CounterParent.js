import React, { Component } from 'react'
import Counter from './Counter'
import {Button} from "react-bootstrap"

export default class CounterParent extends Component {
    // state={
    //     show: false
    // }
    constructor(props) {
        super(props)
        this.state ={
            show: false
        }
    }

    toggle() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                {/* <button onClick={() => this.toggle()}>show</button> */}
                <Button onClick={() => this.toggle()} variant="danger">  {this.state.show ? "Hide"  : "SHow"}
</Button >
                {/* <Button onClick={() => this.setState({show:!this.state.show})} >Hide</Button>
                */}

                {this.state.show ? <Counter/>   : null}

            </div>
        )
    }
}
