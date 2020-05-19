import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }; //写一个状态，初始值为0
    }
    // 加个生命周期函数
    render() {
        return (
            <div>
                <p>you click { this.state.count } times</p>
                <button onClick={this.addCount.bind(this)}>click me</button>
            </div>
        );
    }
    addCount(){
        this.setState({count: this.state.count+1})
    }
}

export default Example3;