import React from 'react';
export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
    };
  }
  handleSave = () => {
    console.log('saved', this.state.studentName);
  };
  componentDidMount() {
    console.log('mouting');
  }
  componentWillUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, this.state.studentName);
    if (prevState.studentName !== this.state.studentName) {
      console.log('student name is changing');
    }
  }
  componentWillUnmount() {
    console.log('unmouting');
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'orange',
          color: 'white',
          height: '400px',
          textAlign: 'center',
        }}
      >
        <h1>Student</h1>
        <input
          type="text"
          name="userName"
          value={this.state.studentName}
          onChange={(e) => {
            this.setState({ studentName: e.target.value });
          }}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
