import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  renderInput({ input }) {
    return (
      <div className="field">
        <label></label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui formkm ">
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
        </form>
    );
  }
}


export default connect(
  null,
  { createStream }
)(StreamCreate);
