import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div className="card teal lighten-5">
        <div className="card-content center-align">
          <span className="card-title">Create a new survey</span>
          <div className="card-action">
            <Link to="/surveys/new" className="btn-floating center-align btn-large red">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
      <SurveyList />
    </div>
  );

};

export default Dashboard;
