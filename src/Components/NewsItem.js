import React, { Component } from 'react'

export class NewsItem extends Component {

    // constructor(){
    //     super();
    //     // console.log('hello')
    // }

  render() {
      let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div>
          <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{zIndex:1,left:'90%'}}>{source}</span>
            <img src={!imageUrl?"https://ph-files.imgix.net/c8b31621-bfa1-4169-9b94-d54a56fa35e2.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=503&h=380&fit=max&dpr=2":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem