import React from 'react'
import  { render } from 'react-dom'

class Ressource extends React.Component {
  constructor(props) {
    super(props)
    this.getScriptSrcLink = this.getScriptSrcLink.bind(this)
  }

  getScriptSrcLink() {
    var string = "<script src={this.props.link}></script>";
    return string
  }

  render() {
    return(
      <li><span><h3>
        <a id={this.props.title} href={this.props.link}>{this.props.title}</a>
      </h3><button className="btn"
            data-clipboard.text={this.props.link}>Copy</button></span></li>
    )
  }
}

export default Ressource
