import React from 'react';

export class InfoBox extends React.Component {
  render() {
    return (
          <div>
            <h3>{this.props.title}</h3>
            <img src={"./images/"+this.props.pic+".jpg"}/>
            <p>{this.props.description}</p>
          </div>
        )
  }
}
