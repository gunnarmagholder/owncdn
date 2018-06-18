import React from 'react'
import  { render } from 'react-dom'

class Ressource extends React.Component {
  constructor(props) {
    super(props)
    this.getScriptSrcLink = this.getScriptSrcLink.bind(this)
  }

  getScriptSrcLink() {
    var string = "<script src='" + this.props.link + "'></script>";
    return string
  }

  render() {
    const title = this.props.title
    const link = this.props.link

    return(
      <li><span><h3>
        <a id={title} href={link}>{title}</a>
      </h3><button className="btn"
            data-clipboard-text={this.getScriptSrcLink()}>Copy</button></span></li>
    )
  }
}

export default Ressource
