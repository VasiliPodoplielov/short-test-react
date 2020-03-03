import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class QuestionsList extends Component {
    showList() {
        return this.props.questions.map((question) => {
            return (
                <div key={question.id} className='questionBlock'>
                    <span>{question.question}</span>
                    <input type="text" placeholder='Введите ваш ответ'/>
                    <button>Проверить</button>
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

export default connect(mapStateToProps)(QuestionsList);