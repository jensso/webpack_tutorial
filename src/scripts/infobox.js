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

const fishProducts = [
  {species: 'Hecht', weight: 12, price: 80},
  {species: 'Barsch', weight: 15, price: 70},
  {species: 'Forelle', weight: 10, price: 75},
  {species: 'Hai', weight: 8, price: 60},
  {species: 'Aal', weight: 6, price: 35},
  {species: 'Thunfisch', weight: 90, price: 120},
  {species: 'Forelle', weight: 7, price: 40},
  {species: 'Hecht', weight: 12, price: 85},
  {species: 'Barsch', weight: 20, price: 100},
  {species: 'Hecht', weight: 25, price: 150},
  {species: 'Aal', weight: 7, price: 40},
]
let showFish = (spec)=> {
  return fishProducts.filter(fish=> fish.species===spec);
}
// console.log(showFish('Aal'));

let findItem = fishProducts.findIndex(fish=> fish.species==='Hai');

// console.log(findItem);
// console.log(fishProducts);
// fishProducts.splice(findItem,1);
// console.log(fishProducts);
