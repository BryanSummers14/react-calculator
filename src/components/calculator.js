import React, { Component } from 'react';

const InputButton = ({value, inputButtonClick}) => {
    return <div className="calc-button" onClick={() => inputButtonClick(value)}>{value}</div>;
}

const OperatorButton = ({value, operatorButtonClick}) => {
    return <div className="calc-button" onClick={() => operatorButtonClick(value)}>{value}</div>;
}

const ClearButton = (props) => {
    return <div className="calc-button__clear" onClick={() => props.reset()}>Clear</div>
}

class Calculator extends Component {
    constructor() {
        this.state = {
            operator: '',
            input: '',
            calculatedValue: 0,
            calculations: [],
            lastClicked: ''
        }
    }

    inputClick = (value) => {
        this.setState({input: this.state.input+''+value, calculations: [this.state.input+''+value], lastClicked: 'input'});
    }

    operatorClick = (value) => {
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
                <OperatorButton value={'/'} operatorButtonClick={this.operatorClick('/')}/>
                <br/>
                <InputButton value={1} inputButtonClick={this.inputClick}/>
                <InputButton value={2} inputButtonClick={this.inputClick}/>
                <InputButton value={3} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'*'} operatorButtonClick={this.operatorClick('*')}/>
                <br/>
                <InputButton value={4} inputButtonClick={this.inputClick}/>
                <InputButton value={5} inputButtonClick={this.inputClick}/>
                <InputButton value={6} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'+'} operatorButtonClick={this.operatorClick('+')}/>
                <br/>
                <InputButton value={7} inputButtonClick={this.inputClick}/>
                <InputButton value={8} inputButtonClick={this.inputClick}/>
                <InputButton value={9} inputButtonClick={this.inputClick}/>
                <OperatorButton value={'-'} operatorButtonClick={this.operatorClick('-')}/>
            </article>
        );
    }
}

export default Calculator;