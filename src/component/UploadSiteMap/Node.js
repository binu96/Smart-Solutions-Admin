import React from 'react'

class Node extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
        title: this.props.title,
        index: this.props.index
    };

    handleMouseDown = (e) => {
        let {onChange} = this.props;
        this.coords = {
            x: e.pageX,
            y: e.pageY
        };
        onChange(e.pageX, e.pageY);
        document.addEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseUp = () => {
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.coords = {};
    };

    handleMouseMove = (e) => {
        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;
        let {onChange} = this.props;
        onChange(e.pageX, e.pageY);

        this.setState({
            x: this.state.x - xDiff,
            y: this.state.y - yDiff
        });
    };

    render() {
        const {x, y, title} = this.state;
        return (<g transform={`translate(${x}, ${y})`}
                   onMouseDown={this.handleMouseDown}
                   onMouseUp={this.handleMouseUp}>
                <text>{title}</text>
            </g>
        )
    }
}

export default Node;