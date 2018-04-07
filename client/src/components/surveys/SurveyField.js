// SurveyField contains logic to render a single
// label and input
import React from 'react';

// This component is rendered by the Field tag in SurveyNew renderFields function
export default ({ input, label, meta: { error, touched } }) => { // '({input})' is refactored from '(props)'
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div className='red-text' style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  ) // "..." operator spreads keys and values of object input as each property of input tag
}
