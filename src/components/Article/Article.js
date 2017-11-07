import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {

    return (
      <div className="articles" >
        {this.props.data.map((item, index) => {
          return <div className="row" key ={item.name + index}>
            <div className="col-4"></div>
            <div className="col-4">
              <img src="http://2.bp.blogspot.com/-FPC6-luWAhs/UoF3IjHmF6I/AAAAAAAAAsw/YDanOWw2kw8/s1600/Kweku+ananse.jpg"/>
              <h5 className="info">{item.title}</h5>
              <h5>{item.text}</h5>
            </div>
            <div className="col-4"></div>
          </div>

        })}
      </div>

    )
  }
}
export default Article
