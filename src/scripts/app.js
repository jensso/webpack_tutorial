const button = document.querySelector('button');
const list = document.querySelector('ul');
import { addElement } from './factory.js';
import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {InfoBox} from './infobox.js';
import {NavBar} from './navbar.js';
import {BlogPostData,BlogPostContent,BlogPost} from './blog';
import {CreateContent, GiveInput} from './createContent.js';

// button.addEventListener('click', ev=> {
//   addElement(list,'LI', 'a task is born');
//   const listItem = document.querySelector('li');
//   listItem.addEventListener('click', ev=> {
//     ev.target.remove(ev.target);
//   })
// })
// class Headline extends React.Component {
//   render() {
//     const name = 'Jens';
//   return (
//   <div className="green">
//     <h1 className="big" style={{border: '0.1vw solid green'}} >Hello {name} Welcome to React</h1>
//     <img className="green" src="./images/lights.jpg" alt="#" width="80%" height="20%"/>
//   </div>
//     )
//   }
// }
// ReactDOM.render(<Headline />, document.getElementById('app1'));
// class Conditional extends React.Component {
//   render() {
//     const isSeen = false;
//     return isSeen && <h2>Now you see me</h2>;
//   }
// }
// ReactDOM.render(<Conditional />, document.getElementById('app2'));
// class Menu extends React.Component {
//   render() {
//     const stock = [
//       {product:'Milk', quantity: 4},
//       {product:'Beer', quantity: 6},
//       {product:'Cola', quantity: 0},
//       {product:'Agua', quantity: 8},
//     ];
//
//     return <ul>{stock.map((item, index)=> item.quantity>0 && <li key={index.toString()}>{item.product}</li>)}</ul>;
//   }
// }
// ReactDOM.render(<Menu />, document.getElementById('app3'));
// class Player extends React.Component {
//   calcGoals(caps, goals) {
//     return goals/caps;
//  }
//  render() {
//    const caps = this.props.caps;
//    const goals = this.props.goals;
//    return <h2>{this.props.firstName} {this.props.lastName} scored {this.calcGoals(caps,goals)} Gooooaaals per Game</h2>
// }
// }
// Player.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   caps: PropTypes.number.isRequired,
//   goals: PropTypes.number.isRequired,
// };
// ReactDOM.render(<Player firstName='Cristiano' lastName='Ronaldo' caps={50} goals={70} />, document.getElementById('app4'));
// ReactDOM.render(<Player firstName='Lionel' lastName='Messi' caps={180} goals={270} />, document.getElementById('app5'));
// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//       <NavBar />
//       <InfoBox title='Ich bin...' pic='Batman' description='The Dark Knight'/>
//       <InfoBox title='Und ich bin..' pic='Superman' description='The man of Steel'/>
//       <InfoBox title='Und mich nennt man..' pic='marvels-spider-man' description='The human Spider'/>
//       <InfoBox title='Ich bin..' pic='alps' description='The Water Guy'/>
//       </React.Fragment>
//
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('app'));

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//       <BlogPost makeBigDate={true}>
//         <BlogPostData author='Jens S.'/>
//         <BlogPostContent image='./images/Superman.jpg' isSeen={true} threat='this class' />
//       </BlogPost>
//       <BlogPost makeBigDate={false}>
//         <BlogPostData author='Theresa M.'/>
//         <BlogPostContent image= './images/Batman.jpg' isSeen={false} threat='Brexit' />
//       </BlogPost>
//       </React.Fragment>
//
//
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<InfoBox title='beachhouse' pic='beachhouse' description='A Beach'/>, document.getElementById('app2'));

ReactDOM.render(<CreateContent />, document.getElementById('app'));
ReactDOM.render(<GiveInput />, document.getElementById('app2'));
