import React from 'react';


export class CreateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSeen: false,
                  counter: 0,
                  };
  }
  handleClick(event) {
    this.setState({
                  counter: this.state.counter+1,
                  isSeen: true,
                  });
                  setTimeout(()=> {
                    this.setState({isSeen: false});
                  },4000);
  }
render() {
  return (
    <div>
  <button className='btn btn-lg btn-outline-dark'onClick={this.handleClick.bind(this)}>
  {this.state.counter===0 ? 'Add FIRST user':'Add MORE user'}
</button>
  {this.state.isSeen && <p className={this.state.counter %10===0 ? 'text-white bg-danger display-4' : 'text-white bg-info display-4'}>{this.state.counter}. user is first looser</p>}
  </div>
        )
      }
    }

export class GiveInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };

      }
      handleInputChange(event) {
        this.setState({inputVal: event.target.value});
      }

  render() {
    return (
      <form className="jumbotron">
      <label className="lead px-4 bg-dark text-danger">type your message here:</label><input className="bg-secondary text-dark form-control form-control-lg" type="text" onChange={this.handleInputChange.bind(this)}>
      </input>
      <p className="display-3 bg-dark text-white">" {this.state.inputVal} "</p>
      </form>
    )
  }
}
