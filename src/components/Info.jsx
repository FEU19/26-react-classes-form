import React from 'react';

class Info extends React.Component {
    // props hamnar direkt i klassen
    // props = "Gray and clody..."
    // @Input() weather = ''  <- Angular

    render() {
        return (
            <div>
                Today's weather is: {this.props.weather}
            </div>
        );
    }

}

export default Info;
