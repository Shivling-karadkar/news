import React, { Component } from 'react'


export  class Newsitem extends Component {

  render() {
    let {title,discription,imageUrl,newsUrl}=this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {title}...</h5>
              <p className="card-text">{discription }...</p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default  Newsitem
