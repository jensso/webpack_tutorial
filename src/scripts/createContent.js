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
const BSclassNames = ['btn-dark', 'btn-info', 'btn-secondary', 'btn-primary'];
const ButtonData = [
  {identifier: 'all',  text: 'All'},
  {identifier: 'Owls',  text: 'show Owls'},
  {identifier: 'Heroes',  text: 'show Heroes'},
  {identifier: 'Views',  text: 'show Views'},
];
export class PicPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shownPhotos: AllImages};
  }

  filterBy(cat) {
    if (cat==='all') {
      this.setState({shownPhotos: AllImages});
    }
    else {
      this.setState({shownPhotos: AllImages.filter(obj=> obj.category===cat)});
  }
}
  filterImages(ev) {
    const targetID = ev.target.getAttribute('cat');
    this.filterBy(targetID);
  }
  render() {
    return (
      <React.Fragment>
      <div className="btn-group-lg">
      {ButtonData.map((button, index)=>  <button key={index} cat={button.identifier} className={["btn","btn-lg","border-dark","m-1", BSclassNames[index]].join(' ')} onClick={this.filterImages.bind(this)}>{button.text}</button>)}
      </div>
      <PicsToShow shownPhotos={this.state.shownPhotos}/>

      </React.Fragment>
    )
  }
}
const PicsToShow = props=> {
    return (
    <div className="container">
    {props.shownPhotos.map((name, index)=>
    <img src={`./images/${props.shownPhotos[index].name}.jpg`} width="30%" height="200" className="m-1" key={index}/>)}
    </div> )
}

export class TaskPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'id',
      newTask: [],
      inputVal: '',
      taskExists: false,
      width: 0,
      warner: '',
      PisSeen: false,
    };
  }
  handleInput(ev) {
    this.setState({inputVal: ev.target.value,
  });
}
  handleSubmit(ev) {
    ev.preventDefault();
    this.state.warner = document.getElementById('id');
    this.state.taskExists = this.state.newTask.includes(this.state.inputVal);
    if (!this.state.taskExists && this.state.inputVal !=='') {this.state.newTask.push(this.state.inputVal)};
    this.setState({inputVal:'',
    });

    console.log(this.state.taskExists);
    console.log(this.state.width);

      // this.state.warner ? this.setState({width:100}) : this.setState({width:0});

    console.warn(this.state.warner);
    console.log(this.state.taskExists);
    console.log(this.state.width);
  }

  render() {
      return ( <React.Fragment>
      <form className="form-group bg-secondary m-2 p-2" onSubmit={this.handleSubmit.bind(this)}>
        <input style={{width: '65%', border:'2px solid lime'}} type="text" placeholder="write something you want to achieve"
        className="form-control-lg m-1 p-2" onChange={this.handleInput.bind(this)} value={this.state.inputVal}></input>
        <button type="submit" className="btn btn-success m-2 p-2 border-light float-right">create new task</button>
      </form>
      {this.state.taskExists && <p id="id" className="lead mx-2 p-3 bg-warning text-danger text-center">This Task was already planned!</p>}
      <TaskInput inputVal={this.state.inputVal} newTask={this.state.newTask} taskExists={this.state.taskExists} id={this.state.id}/>

      </React.Fragment> )
  }
}
class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDeco: '',
      btnText: 'set task done',
    };
  }
  handleSetDone(ev) {

    this.state.textDeco === '' ?
    this.setState({
      textDeco: ev.target.parentNode.style.textDecoration='line-through',
      btnText: ev.target.innerText='revive this task',
    })
    :
    this.setState({
      textDeco: ev.target.parentNode.style.textDecoration='',
      btnText: ev.target.innerText='set task done',
    });
}
  handleRemove(ev) {
    this.setState({});
    // console.log(this.props.newTask);
    // ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    this.props.newTask.splice(ev.target.parentNode, 1);
    // console.log(this.props.newTask);
}

  render() {
    return (
    <React.Fragment>

    {!this.props.taskExists && this.props.newTask.map((task,index)=> <p className="lead mx-2 p-3 bg-dark text-light" key={index}>
    {index+1}. {task}
      <button onClick={this.handleRemove.bind(this)} className="btn btn-danger mx-1 float-right border-light">remove task</button>
      <button onClick={this.handleSetDone.bind(this)} className="btn btn-warning mx-1 text-light float-right border-light">set task done</button>
    </p>)}
    </React.Fragment> )
    }
}
