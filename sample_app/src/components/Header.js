import {Component} from "react"

class Header extends Component{
    render(){
    return(<h1> Hello I am {this.props.name} </h1>)
    }
}

export default Header

