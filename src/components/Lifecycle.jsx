import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                Lifecycle demo -
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
            </div>
        );
    }

}

export default Lifecycle;
