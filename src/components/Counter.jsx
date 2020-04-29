import React from 'react';

class Counter extends React.Component {
    // React skapar en klassbaserad komponent:
    // let component = new Counter(props);

    constructor(props) {
        super(props);  // skicka props till constructor för Component
        this.state = {
            value: 10
        }
        // fun.k.: const [value, setValue] = useState(10);

        // "bind" gör så att decrease-funktionen kommer ihåg värdet på this
        this.decrease = this.decrease.bind(this);
    }

    decrease() {
        // setState följer med React.Component
        // ...men React glömmer bort this, om vi inte använder "bind" i konstruktorn
        this.setState({
            value: this.state.value - 1
        })
    }
    increase = () => {
        // arrow functions do not change this
        // no need to bind in constructor
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        return (
            <div>
                <div> The value is: {this.state.value} </div>
                <div>
                    <button onClick={this.decrease}> -1 </button>
                    <button onClick={this.increase}> +1 </button>
                </div>
            </div>
        );
    }
}

// const Counter = (props) => {
//     // funktionella komponenter använder inte this
// }

export default Counter;
