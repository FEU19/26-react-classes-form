import React from 'react';
import Info from './Info';
import Counter from './Counter';
import Lifecycle from './Lifecycle';
import Form from './Form';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLifecycle: true };
    }

    // funktioner i en klass kallas för "metoder"
    render() {
        return (
            <main>
                <Info weather="Gray and cloudy with a chance of sun" />
                <Counter />
                
                {this.state.showLifecycle ? <Lifecycle /> : null}
                <button onClick={() => this.setState({ showLifecycle: !this.state.showLifecycle })}>Hide/show Lifecycle</button>

                <Form />
            </main>
        )
    }
}

export default Main;
