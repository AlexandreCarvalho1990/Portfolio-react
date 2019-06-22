import React from "react"
import {Collapse} from "reactstrap"
class Navbar extends React.Component{
  constructor(){
    super()
    this.state  ={
    prevScrollpos : window.pageYOffset,
    visible : true
    }
   
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {

    const {prevScrollpos} = this.state
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos : currentScrollPos,
      visible : visible
    })
  }
  
  
    render(){

        return(
   <div>
     <Collapse isOpen={this.state.visible} >
     <nav className="navbar navbar-expand navbar-dark navbar-baha fixed-top ">
 <h6 className=" header1 mt-3">Baha chammakhi</h6>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#portfolio">PORTFOLIO <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">CONTACT</a>
      </li>
    </ul>
  
</nav>
</Collapse>
 
   </div>
        )
    }
}
export default Navbar