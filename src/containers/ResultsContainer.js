// import React, { Component } from 'react'
// // import { getResults } from '../redux/actions/ResultsActions';
// import { Spinner } from 'reactstrap';
// import { connect } from 'react-redux';
// import Results from '../components/Results/Results';

// export class ResultsContainer extends Component {
//   componentDidMount() {
//     this.props.getResults(); //from ResultsActions
//     // export const getResults = () => {
//     //   return dispatch => {
//     //       return BootcampAPI.get(API.GET_RESULTS)
//     //           .then(res => dispatch(getResultsSuccess(res)))
//     //           .catch(err => {
//     //               console.error(err);
//     //               dispatch(getResultsError());
//     //           });
//     //     };
//     //  };
//   }
//   // render() {
//   //   return (
//   //   //       const { results } = this.props;
//   //   // if (!results) {
//   //   //   return (
//   //   //     <div>
//   //   //       <Spinner color="success" />
//   //   //       loading...
//   //   //                 </div>
//   //   //   )
//   //   // }
//   //   // // console.log(posts)
//   //   // return <Results results={results} />
//   //     // )
//   // }
// }

// const mapDispatchToProps = {
//   getResults
// }

// const mapStateToProps = state => {
//   return {
//     results: state.getResultsReducer.results
//     // export const getResultsReducer = (state = defaultState, action) => {
//     //   switch (action.type) {
//     //       case GET_RESULTS_SUCCESS:
//     //           return { ...state, results: action.payload };
//     //  
//     //       case GET_RESULTS_ERROR:
//     //           return state;
//     //       default:
//     //           return state;
//     //   }
//   }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);



