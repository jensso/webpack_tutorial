// import React from 'react';
//
// export class InfoBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isPseen: false};
//   }
//   handleClick(event) {
//     this.setState({isPseen: !this.state.isPseen});
//   }
//   render() {
//     return (
//           <div>
//             <button className='btn btn-lg btn-primary' onClick={this.handleClick.bind(this)}>
//             {this.state.isPseen ? 'hide paragraph':'show paragraph'}
//             </button>
//             {this.state.isPseen && <p className='lead' >Now u see me</p>}
//             <h3>{this.props.title}</h3>
//             <img src={"./images/"+this.props.pic+".jpg"}/>
//             <p>{this.props.description}</p>
//           </div>
//         )
//   }
// }
