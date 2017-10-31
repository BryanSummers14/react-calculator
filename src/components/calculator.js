import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const InputButton = ({value, inputButtonClick}) => {
    return <RaisedButton label={value} primary={true} onClick={() => inputButtonClick(value)} />;
}

const OperatorButton = ({value, operatorButtonClick}) => {
    return <RaisedButton  label={value} secondary={true} onClick={() => operatorButtonClick(value)} />;
}

const ClearButton = (props) => {
    return <RaisedButton label='Clear' onClick={props.reset}/>
}

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            operator: '',
            input: '',
            calculatedValue: 0,
            calculations: [],
            lastClicked: ''
        }
    }

    inputClick = (value) => {
        console.log('fired input click');
        this.setState({input: this.state.input+''+value, calculations: [this.state.input+''+value], lastClicked: 'input'});
    }

    operatorClick = (value) => {
        console.log('fired operator click');
        if (this.state.lastClicked === 'input') {

        }
    }

    resetCalc = () => {
        this.setState({
            operator: '',
            input: 0,
            calculatedValue: 0,
            calculations: []
        })
    }

    render() {
        return (
            <article>
                <div className="calc-value">{this.state.value}</div>
                <ClearButton reset={this.resetCalc}/>
                <OperatorButton value={'/'} operatorButtonClick={this.operatorClick}/>
                <br/>
                <InputButton value={1} inputButtonClick={this.inputClick}/>
                <InputButton value={2} inputButtonClick={this.inputClick}/>
                <InputButton value={3} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'*'} operatorButtonClick={this.operatorClick}/>
                <br/>
                <InputButton value={4} inputButtonClick={this.inputClick}/>
                <InputButton value={5} inputButtonClick={this.inputClick}/>
                <InputButton value={6} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'+'} operatorButtonClick={this.operatorClick}/>
                <br/>
                <InputButton value={7} inputButtonClick={this.inputClick}/>
                <InputButton value={8} inputButtonClick={this.inputClick}/>
                <InputButton value={9} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'-'} operatorButtonClick={this.operatorClick}/>
            </article>
        );
    }
}

export default Calculator;