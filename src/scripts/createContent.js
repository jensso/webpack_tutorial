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
    <React.Fragment>
      <button className='btn btn-lg btn-outline-dark'onClick={this.handleClick.bind(this)}>
      {this.state.counter===0 ? 'Add FIRST user':'Add MORE user'}
      </button>
      <Paragraph isSeen={this.state.isSeen} counter={this.state.counter} />
    </React.Fragment>
        )
      }
    }
class Paragraph extends React.Component {

  render() {
    return (
      <React.Fragment>

      {this.props.isSeen && <p className={this.props.counter %10===0 ? 'text-white bg-danger display-4' : 'text-white bg-info display-4'}>
                            {this.props.counter}. user is first looser</p>}
      </React.Fragment>

    );
  }
}

export class GiveInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
    };
  }
  handleChange(event) {
        this.setState({inputVal: event.target.value});
      }

  render() {
    return (
      <React.Fragment>
      <form className="jumbotron">
        <label className="lead px-4 bg-dark text-danger">type your message here:</label><input className="bg-secondary text-dark form-control form-control-lg" type="text" onChange={this.handleChange.bind(this)}>
        </input>
      </form>
      <InputText inputVal={this.state.inputVal} />
      </React.Fragment>
    )
  }
}
class InputText extends React.Component {
  render() {
    return <p className="display-4 py-2 mx-2 px-3 bg-dark text-white">{!this.props.inputVal ? 'Hello! Please Type something' : this.props.inputVal}</p>
    }
}

const AllImages = [
  {name: 'eule_1',category: 'Owls'},
  {name: 'eule_2',category: 'Owls'},
  {name: 'eule_3',category: 'Owls'},
  {name: 'Batman',category: 'Heroes'},
  {name: 'Superman',category: 'Heroes'},
  {name: 'Spiderman',category: 'Heroes'},
  {name: 'sifnos',category: 'Views'},
  {name: 'amsterdam',category: 'Views'},
  {name: 'brooklyn',category: 'Views'}
];
export class PicPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shownPhotos: AllImages};
  }

  showOwls() {
  this.setState({shownPhotos: AllImages.filter(obj=> obj.category==='Owls')});
  }
  showHeroes() {
    this.setState({shownPhotos: AllImages.filter(obj=> obj.category==='Heroes')});
  }
  showViews() {
    this.setState({shownPhotos: AllImages.filter(obj=> obj.category==='Views')});
  }
  showAll() {
    this.setState({shownPhotos: AllImages});
  }
  render() {
    return (
      <React.Fragment>
      <div className="btn-group-lg">
      <button className="btn btn-dark" onClick={this.showAll.bind(this)}>All</button>
      <button className="btn btn-info" onClick={this.showOwls.bind(this)}>Owls</button>
      <button className="btn btn-secondary" onClick={this.showHeroes.bind(this)}>Heroes</button>
      <button className="btn btn-primary" onClick={this.showViews.bind(this)}>Views</button>
      </div>

      <div className="container">
      {
        this.state.shownPhotos.map((name, index)=> <img src={`./images/${this.state.shownPhotos[index].name}.jpg`} width="30%" height="200" className="m-1" key={index}/>)
      }
      </div>

      </React.Fragment>
    )
  }
}

export class TaskPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      PisSeen: false,
    };
  }
  handleInput(ev) {
    this.setState({inputVal: ev.target.value,})
      }
  handleClick(ev) {
    this.setState({PisSeen: true,});
      }


  render() {
    return ( <React.Fragment>

      <div className="form-group d-flex">
        <label className="bg-secondary text-light p-2">Write your Tasks here:</label>
        <input style={{width: '50%'}} type="text" placeholder="write something you want to achieve"
        className="form-control-lg" onChange={this.handleInput.bind(this)}></input>
        <button type="submit" className="btn btn-dark"
                onClick={this.handleClick.bind(this)}>
        create new task</button>
      </div>
      <TaskInput inputVal={this.state.inputVal} PisSeen={this.state.PisSeen} />
      </React.Fragment> )
  }
}

class TaskInput extends React.Component {
  render() {
    return (
    <React.Fragment>
    {this.props.PisSeen && <p className="lead p-3 bg-dark text-light">
    - {this.props.inputVal}
      <button className="btn btn-warning float-right border-light">set task done</button>
      <button className="btn btn-danger float-right border-light">remove task</button>
    </p>}
    </React.Fragment> )
    }
}
