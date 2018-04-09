// SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { withRouter } from 'react-router';

class SurveyNew extends Component {
  /* constructor(props) {
   *   super(props);

   *   this.state = { new: true };
   * }*/

  // Equivelent to above, create a new state
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview
               onCancel={() => this.setState({ showFormReview: false })}/>;
    }

    return <SurveyForm
             onSurveySubmit={() => this.setState({ showFormReview: true })}/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// Clear surveyNew form when navgate to other routers outside suerveyNew
// even with destroyOnUnmount: false in surveyForm
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
