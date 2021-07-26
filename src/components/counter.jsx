import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        // tags: ['tag1', 'tag2', 'tag3']
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);  // binding eventHandler to this
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There is no element in the array!</p>
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    handleIncrement = (product) => {
        this.setState({ value: this.state.value+1});
    };

    // doHandleIncrement = () => {
    //     this.handleIncrement({id: 1});
    // };

    

    render() {
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id: 5}) } className="btn btn-secondary btn-sm">Increment-{this.props.counter.id}</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn  btn-sm m-2 btn-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;