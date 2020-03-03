import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {checkAnswer, changeInput} from '../actions/index';

class QuestionsList extends Component {
    showList() {
        return this.props.questions.map((question) => {
            return (
                <div key={question.id} className='questionBlock'>
                    <span>{question.question}</span>
                    <input type="text" placeholder='Введите ваш ответ'/>
                    <button onClick={() => this.props.checkAnswer(question)}>Проверить</button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.showList()}
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        checkAnswer: checkAnswer,
        changeInput: changeInput
    }, dispatch);
}

function onCheckAnswer(action) {

}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionsList);