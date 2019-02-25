import React, { Component } from 'react'
import { getResults, getQuizzes } from '../redux/actions/resultsActions';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Results from '../components/Results/Results';

export class ResultsContainer extends Component {
    componentDidMount() {
        this.props.getResults();
        this.props.getQuizzes();
    }
    render() {
        const { results, quizzes } = this.props;

        if (!results || !quizzes) {
            return (
                <div>
                    <Spinner />
                    <div>loading...</div>
                </div>
            )
        }
        const userResults = []
        for (let i = 0; i < results.length; i++) {
            for (let j = 0; j < quizzes.length; j++) {
                if (results[i].quizId === quizzes[j].id) userResults.push(quizzes[j])
                console.log(userResults)
            }
        }
        const userQuizzes = []
        for (let j = 0; j < quizzes.length; j++) {
            if (results[0].userId === quizzes[j].ownerId) userQuizzes.push(quizzes[j])
        }
        return <Results userResults={userResults} userQuizzes={userQuizzes} />
    }
}

const mapDispatchToProps = {
    getResults,
    getQuizzes
}

const mapStateToProps = state => {
    return {
        results: state.getResultsReducer.results,
        quizzes: state.getResultsReducer.quizzes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
