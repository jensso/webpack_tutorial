import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

export class JSo_my_profile_page  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }; //this.state ends
  } // constructor ends
  render() {
    return(
      <React.Fragment>
      <JSo_navBar />
      <JSo_carousel />
      <JSo_weather />
      <JSo_taskPlanner />
      <Jso_checkZodiac />
      <JSo_luckyNumbers />

      <JSo_section3 />
      <JSo_section3 />
      </React.Fragment>
    )

  } // render ends
}

export class JSo_navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }; // this.state ends
  } // constructor extends
  render() {
    return (
      <React.Fragment>
      <nav id="jso_navBar" className="navbar navbar-expand-sm bg-dark text-light my-1">
      <ul className="navbar-nav m-1">
      <li className="nav-item"><a className="nav-link">Home</a></li>
      <li className="nav-item"><a className="nav-link">my Resume</a></li>
      <li className="nav-item"><a className="nav-link">my Skills</a></li>
      <li className="nav-item"><a className="nav-link">my Goals</a></li>
      </ul>

      </nav>
      </React.Fragment>
    )
  }
}
const beautifulViews = ['aero','colorado','spring',
              'canyon','sifnos','traumstrand','alps'
              ];
export class JSo_carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0,
                    showViews: beautifulViews,
                  }; //this.state ends
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  } // constructor ends
  handleLeft(ev) {
    this.setState({counter: this.state.counter-1});
    if (this.state.counter === 0) {
      this.setState({counter: this.state.showViews.length-1,
      });
      }
  }
  handleRight(ev) {
    this.setState({counter: this.state.counter+1});
    if (this.state.showViews.length-1 === this.state.counter) {
      this.setState({counter: 0});
      }
  }
  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Some beautiful Views</h2>
      </div>
      <div id="jso_carousel"className="jumbotron m-1">
        <section id="myCarousel" className="d-flex justify-content-center">
          <span onClick={this.handleLeft}>-</span>
            <img src={`./images/${this.state.showViews[this.state.counter]}.jpg`} width="75%" height="250rem" alt="nothing to see here"/>
          <span onClick={this.handleRight}>+</span>
        </section>
      </div>
      </React.Fragment>
    )
  } // render ends
}
export class JSo_weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }; //this.state ends

        // const = openWeatherPassword = `1234abcd`;
    const openWeatherKey = `e6bcda912d208337919146e129b426ad`;
    const weatherForm = document.querySelector(`#weatherForm`);
    const weatherInput = document.querySelector(`#weatherInput`);
    const weatherBtn = document.querySelector(`#weatherBtn`);
  //   bringWeather(ev)=> {
  //
  //   let getWeatherForCity = async ev => {
  //     ev.preventDefault();
  //     let citys = input.value.split(`-`);
  //   try {
  //   for (let i = 0; i < citys.length; i++) {
  //
  //     let delayFetch = (name, time) => {
  //       return new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             resolve(fetch(openWeatherUrl))
  //           }, time)
  //       })
  //     }
  //     let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citys[i]}&APPID=${openWeatherKey}`;
  //     let url = await delayFetch(citys[i],1000);
  //     let weatherObject = await url.json();
  //     let container = document.querySelector(`#weatherContainer`);
  //     let section = document.createElement(`SECTION`);
  //     let tempHeading = document.createElement(`H3`);
  //     let tempDescription = document.createElement(`P`);
  //     let tempParagraph = document.createElement(`P`);
  //     let weatherIcon = document.createElement(`IMG`);
  //     let tempCelsius = Math.round((weatherObject.main.temp-273.15));
  //     let iconSRC = weatherObject.weather[0].icon;
  //     tempHeading.innerText = weatherObject.name;
  //       if (tempCelsius <= 0) {
  //         section.style.background = `white`;
  //       }
  //       else if (tempCelsius <= 10) {
  //         section.style.background = `grey`;
  //       }
  //       else if (tempCelsius <= 20) {
  //         section.style.background = `yellow`;
  //       }
  //       else if (tempCelsius <= 30) {
  //         section.style.background = `salmon`;
  //       }
  //       else if (tempCelsius <= 40) {
  //         section.style.background = `red`;
  //       }
  //       tempParagraph.innerText = `${tempCelsius} °C`;
  //       tempDescription.innerText = weatherObject.weather[0].description;
  //       weatherIcon.src = `http://openweathermap.org/img/w/${iconSRC}.png`;
  //       section.appendChild(tempHeading);
  //       section.appendChild(tempParagraph);
  //       section.appendChild(tempDescription);
  //       tempDescription.appendChild(weatherIcon);
  //       weatherContainer.appendChild(section);
  //       input.value = ``;
  //       section.addEventListener(`click`, function removeSection(ev) {
  //       weatherContainer.removeChild(ev.currentTarget);
  //       })
  //     }
  //   }
  //   catch (error) {
  //     console.warn(error);
  //   }
  // }
  //   // form.addEventListener(`submit`, getWeatherForCity);
  // } // this.bringWeather ends

  } // constructor ends
  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Checking weather around the globe</h2>
      </div>
      <div id="jso_weather" className="jumbotron m-1 p-2">
        <img src="./images/beachhouse.jpg" width="100%" height="250rem" alt="nothing to see here" />
        <form type="submit">
          <input type="text" placeholder="city to check" />
          <h2 className="lead p-2 m-2 bg-dark text-light text-center">enter city for weather information<br />seperate multiples by "-" </h2>
          <button type="submit" id="weatherBtn">bring the weather</button>
        </form>
      </div>
      </React.Fragment>

    )
  } // render ends
}
export class JSo_taskPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: [],
      inputVal: '',
      taskExists: false,
    };
  }
  handleInput(ev) {
    this.setState({inputVal: ev.target.value,
                  inputEmpty: false,});
}
  handleSubmit(ev) {
    ev.preventDefault();
    this.state.taskExists = this.state.newTask.includes(this.state.inputVal);
    if (!this.state.taskExists && this.state.inputVal !== '') {
      this.state.newTask.push(this.state.inputVal);
    };
    if (this.state.inputVal === '') {
      this.setState({inputEmpty: true,})
    }
    else {
      this.setState({inputVal:'',
                      inputEmpty: false,});
    }
  }

  render() {
      return (
      <React.Fragment>
      <div className="container"><h2 className="lead mx-2 p-2">Have your ToDo's scheduled</h2></div>
      <div id="jso_taskPlanner" className="jumbotron m-1 p-2">

        <form className="form-group bg-dark" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="write something you want to achieve"
          className="form-control-lg" onChange={this.handleInput.bind(this)} value={this.state.inputVal}></input>
          <button type="submit">create a new task</button>
        </form>
        {this.state.inputEmpty && <p className="lead m-1 p-2 bg-warning text-danger text-center">Please type something!</p>}
        {this.state.taskExists && <p className="lead m-1 p-2 bg-warning text-danger text-center">This Task was already planned!</p>}
        <JSo_taskInput inputVal={this.state.inputVal} newTask={this.state.newTask} taskExists={this.state.taskExists}/>

      </div>
      </React.Fragment>
    )
  }
}
export class JSo_taskInput extends React.Component {
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
    // delete this.props.newTask[ev.target.parentNode];
    // ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
    this.props.newTask.splice(ev.target.parentNode, 1);
    // console.log(this.props.newTask);
}
  render() {
    return (
    <TransitionGroup>
    {!this.props.taskExists && this.props.newTask.map((task,index)=> <CSSTransition timeout={1800} classNames="fade" key={index}><p className="lead mx-2 p-3 bg-dark text-light">
    {index+1}. {task}
      <button onClick={this.handleRemove.bind(this)} className="btn btn-danger mx-1 float-right border-light">remove task</button>
      <button onClick={this.handleSetDone.bind(this)} className="btn btn-warning mx-1 text-light float-right border-light">set task done</button>
    </p></CSSTransition>)}
    </TransitionGroup>
    )
  }
}
// const zodiacSigns = [ Aries = [ start = new Date(1999,2,21), end = new Date(1999,3,19),'ARIES'],
//              Taurus = [start = new Date(1999,3,20), end = new Date(1999,4,20),'TAURUS'],
//              Gemini = [start = new Date(1999,4,21), end = new Date(1999,5,20),'GEMINI'],
//              Cancer = [start = new Date(1999,5,21), end = new Date(1999,6,22),'CANCER'],
//              Leo = [start = new Date (1999,6,23), end = new Date(1999,7,22),'LEO'],
//              Virgo = [start = new Date (1999,7,23), end = new Date(1999,8,22),'VIRGO'],
//              Libra = [start = new Date(1999,8,23), end = new Date(1999,9,22),'LIBRA'],
//              Scorpio = [start = new Date(1999,9,23), end = new Date(1999,10,21),'SCORPIO'],
//              Sagittarius = [start = new Date(1999,10,22), end = new Date(1999,11,21),'SAGITTARIUS'],
//              Capricorn = [start = new Date(1999-1,11,22), end = new Date(1999,0,19),'CAPRICORN'],
//              // due to the change of the year the code needs to be adjusted
//              Aquarius = [start = new Date(1999,0,20), end = new Date(1999,1,18),'AQUARIUS'],
//              Pisces = [start = new Date(1999,1,19), end = new Date(1999,2,20),'PISCES']
//            ];
// console.log(zodiacSigns);
export class Jso_checkZodiac extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayOfZodiacs: [],
    }; //this.state ends
  } // constructor ends
    handleDateInput(ev) {
      ev.stopPropagation();
      this.setState({inputDate: ev.target.value,
                    arrayOfZodiacs: zodiacSigns,
      });
      console.log(ev.target.value);
    }
    handleDateSubmit(ev) {
      ev.preventDefault();
      const dateOfBirth = new Date(this.state.inputDate);

      this.setState({inputDate: dateOfBirth});
      console.log(dateOfBirth);
    }

    // whichZodiacAmI(dateOfBirth) {
    //   const year = 1999;
    // console.log(dateOfBirth);
    //   for (let i = 0; i < this.state.zodiacSigns.length; i++) {
    //       if (this.state.zodiacSigns[i][0] <= dateOfBirth && this.state.zodiacSigns[i][1] >= dateOfBirth) {
    //         return this.state.zodiacSigns[i][2];
    //     }
    //   }
    // }


  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Check your Zodiac sign</h2>
      </div>

      <div id="jso_checkZodiac" className="jumbotron m-1 p-2 d-flex">
        <div className="myWrapper">
        <img src="./images/lights.jpg" alt="nothing to see here" />
        </div>
        <div className="myWrapper">
        <p className="small mx-2 p-2 bg-dark text-light">Enter your date of birth to check your Zodiac
        </p>
        <input type="date" onChange={this.handleDateInput.bind(this)} value={this.state.inputDate} className="form-control"/>
        {/*this.state.arrayOfZodiacs.map((zodiac, index)=>
          <p className="small mx-2 p-2 bg-dark text-light" key={index}>Your Zodiac sign is this.state.arrayOfZodiacs[index][2]</p>)*/}
        </div>
      </div>
      </React.Fragment>
    )
  } // render ends
}
export class JSo_luckyNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clicked: false,
    }); // this.state ends
  } // constructor ends

  handleClick(ev) {

    this.state.luckyNum = Math.ceil(Math.random()*999);
    const lucky = this.state.luckyNum;

    this.state.random1 = Math.floor(Math.random()*10);
    this.state.random2 = Math.floor(Math.random()*10);
    this.state.random3 = Math.floor(Math.random()*10);
    const tempArray = [];
    tempArray.push(this.state.random1*100);
    tempArray.push(this.state.random2*10);
    tempArray.push(this.state.random3);
    const tempNum = tempArray.reduce((sum,nr)=>{return sum + nr} ,0);

    this.state.luckyNum === tempNum
    || this.state.luckyNum % 111 === 0
    || this.state.luckyNum.toString().includes("7")
       ?
      this.setState({
        clicked: true,
        luckyNum: lucky,
        random1: tempArray[0],
        random2: tempArray[1],
        random3: tempArray[2],
        pickedNums: tempArray,
        pickedNum: tempNum,
        winner: true,
      })
      :
      this.setState({
        clicked: true,
        luckyNum: lucky,
        random1: tempArray[0],
        random2: tempArray[1],
        random3: tempArray[2],
        pickedNums: tempArray,
        pickedNum: tempNum,
        winner: false,
      });
  }
  render() {

    return (
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Have Fun with Numbers</h2>
      </div>
      <div id="jso_luckyNumbers" className="jumbotron m-1 p-2">
        <div id="quote">
          <p className="bg-dark text-light">
          „Life is not a problem to be solved, but a reality to be experienced.“
          <br />Søren Kierkegaard (*1813 - †1855)
          </p>
          {this.state.clicked && <p className="bg-dark text-light">
          „Life is not a problem to be solved, but a reality to be experienced.“
          <br />Søren Kierkegaard (*1813 - †1855)
          </p>}
        </div>

        <div id="lottery">
          {this.state.clicked && <p>the lucky number is <span>{this.state.luckyNum}</span></p>}
          {!this.state.clicked && <p>Run the lottery</p>}
          <p><button onClick={this.handleClick.bind(this)}></button></p>

            {this.state.clicked && <p>
              - Win with every 7<br />
              - Win with 3 equal digits<br />
              - Win with your draw:<br />
              <span id="random1">{this.state.random1/100}</span>
              <span id="random2">{this.state.random2/10}</span>
              <span id="random3">{this.state.random3}</span>
            </p>}
          {this.state.winner && this.state.clicked && <p id="winner">Hooray, a match<br/>YOU WIN!</p>}
          {!this.state.winner && this.state.clicked && <p id="looser">Sorry, no match<br/>YOU LOOSE!</p>}
        </div>
      </div>
      </React.Fragment>
    )
  } // render ends
}

export class JSo_section3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }; //this.state ends
  } // constructor ends
  render() {
    return(
      <React.Fragment>
      <div id="jso_section3" className="jumbotron m-1 d-flex">
      <img src="./images/forest.jpg" width="50%" height="150 rem" alt="nothing to see here" />
      <div><h2 className="small mx-2 p-2 text-center">Some Text to provide</h2></div>
      </div>
      </React.Fragment>
    )

  } // render ends
}
