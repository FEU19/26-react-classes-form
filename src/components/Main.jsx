import React from 'react';
import Info from './Info';
import Counter from './Counter';

class Main extends React.Component {

    // funktioner i en klass kallas för "metoder"
    render() {
        return (
            <main>
                <Info weather="Gray and cloudy with a chance of sun" />
                <Counter />
            </main>
        )
    }
}

export default Main;
