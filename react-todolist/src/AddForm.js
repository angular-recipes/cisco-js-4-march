import React, {Component} from 'react';

export class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoLabel: ''
        };
    }

    render() {
        return (
            <div>
                <div>{this.state.newTodoLabel}</div>
                <input type="text" value={this.state.newTodoLabel} onChange={this.onTextChange.bind(this)}/>
                <button onClick={() => this.props.onAddBtnClick(this.state.newTodoLabel)}>Add</button>
            </div>
        );
    }

    onTextChange(event) {
        this.setState({
            newTodoLabel: event.target.value
        });
    }
}