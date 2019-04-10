import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

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

export class Fishes extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <ul>
      <li className="nav-item">
        <NavLink className="nav-link" to="/dist">Show Something</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/fishes">Show fishes</NavLink>
      </li>
      </ul>
      <div className="container">
        <div className="jumbotron">
          <Route path="/dist" render={()=> <h3>Something</h3>} />
          <Route path="/fishes" component={ShowFishes} />
        </div>
      </div>
      </React.Fragment>
      </BrowserRouter>

    )
  }
}
export class ShowFishes extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h1>check a fish</h1>
      <ul>
      <li className="nav-item">
        <NavLink className="nav-link" to="/fishes/salmon">salmon</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/fishes/tuna">tuna</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/fishes/bacalaos">bacalaos</NavLink>
      </li>
      </ul>
      <div className="container">
      <Route path="/fishes/salmon" render={()=> <p>some info about salmons</p>}/>
      <Route path="/fishes/tuna" render={()=> <p>some info about tunas</p>}/>
      <Route path="/fishes/bacalaos" render={()=> <p>some info about bacalaos</p>}/>
      </div>
      </React.Fragment>
    )
  }
}


export class BlogPostRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({blogStock: [],
    });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
        <ul className="nav">
          <NavLink className="m-2 nav-link" to="/dist">Welcome</NavLink>
          <NavLink className="m-2 nav-link" to="/create">Create a Blog</NavLink>
          <NavLink className="m-2 nav-link" to="/show">Show the Blogs</NavLink>
        </ul>
         </React.Fragment>
      </BrowserRouter>
    )
  }
}
export class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
                  name:'',
                  title:'',
                  post:'',
                  });
  }
  nameInput(ev) {
    this.setState({name: ev.target.value});
  }
  titleInput(ev) {
    this.setState({title: ev.target.value});
  }
  textInput(ev) {
    this.setState({post: ev.target.value});

  }
  handleSubmit(ev) {
    ev.preventDefault();
    const blogObj= {blogName: this.state.name,
                    blogTitle: this.state.title,
                    blogPost: this.state.post  };

                    this.setState({name:'',
                                  title:'',
                                  post:'',
                                  });

this.props.blogStock.push(blogObj);
console.log(this.props.blogStock);
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group bg-info p-2 mx-2">

          <label className="title text-light">your username</label>
          <input type="text" className="form-control p-3" onChange={this.nameInput.bind(this)} value={this.state.name}></input>
          <br/>
          <label className="title text-light">your blog title</label>
          <input type="text" className="form-control p-3" onChange={this.titleInput.bind(this)} value={this.state.title}></input>
          <br/>
          <label className="title text-light">your blog post</label>
          <textarea className="form-control p-3" onChange={this.textInput.bind(this)} value={this.state.post}></textarea>
          <br/>
          <button type="submit" className="btn btn-dark mx-2">create post</button>
        </div>
      </form>

    )
  }
}
export class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }
  handleClick(ev) {
    this.props.blogStock.map((obj, index)=> {
      const blogInfo = this.props.blogStock[index].blogName +' wrote '+ this.props.blogStock[index].blogPost;
      this.setState({blogInfo: blogInfo});
      console.log(this.state.blogInfo);
    }
)

  }
  render() {
    const today = new Date();
    return (
      <React.Fragment>
      {this.state.blogInfo && <h5>select a post to examine:</h5>}

        {this.props.blogStock.map((obj, index)=>
          <div className="card" key={index}>
            <h5 onClick={this.handleClick.bind(this)} className="card-title bg-secondary p-1 text-light">
            {obj.blogName} wrote on {today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}:</h5>
            <h3 onClick={this.handleClick.bind(this)} className="card-body bg-info">" {obj.blogTitle} "</h3>
            <p onClick={this.handleClick.bind(this)} className="card-text bg-info">...{obj.blogPost}</p>
          </div>)}
        </React.Fragment>
          )
      }
  }
