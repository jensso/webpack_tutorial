import React from 'react';

export class BlogPostData extends React.Component {
  render() {
    return (
      <div className='card-header'>
        <h4 className='display-5'>{this.props.author} wrote:</h4>
      </div>
    )
  }
}

export class BlogPostContent extends React.Component {
  render() {
    return (
      <div className='card-body'>
        <h3 className='display-3'>How I survived in {this.props.threat}</h3>
        {this.props.isSeen && <img src={this.props.image} className='img-fluid rounded d-block mx-auto' style={{width: '20vw', height: '10vw'}}/>}
        <p>I just focused on doing a proper coding.</p>
      </div>
    )
  }
}

export class BlogPost extends React.Component {
  render() {
    const today = new Date();

    return (
      <div className='card'>
        <div className='card-footer'>
          <span className={this.props.makeBigDate ? 'display-4':'display-1'}>Published on: { today.getDate() +'/'+ (today.getMonth()+1) +'/'+ today.getFullYear() }</span>
        </div>
        {this.props.children}
      </div>
    )
  }
}
