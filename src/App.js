import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";

let articleData = [
  {
    name: "Goerge Doe",
    title: "Kweku Ananse Stories",
    date: "November 2, 2017",
    text: "One day, Kweku Anansi went to God to for me alone to eat!’"
  }, {

    name: "Goerge Doe",
    title: "Kweku Ananse Stories",
    date: "November 2, 2017",
    text: "htir reijijs,kjdl;kjt, fgdsdghfgdsfg"
  }, {

    name: "Goerge Doe",
    title: "Kweku Ananse Stories",
    date: "November 2, 2017",
    text: "htir reijijs,kjdl;kjt, fgdsdghfgdsfg"
  }
];

let navlinks = [
  {
    name: "Home",
    local: "http://francis.com"
  }, {
    name: "Contact",
    local: "http://google.com"
  }, {
    name: "About",
    local: "http://google.com"
  }
];


let socialLinks = [
  {
    iconName: "facebook",
    url: "https://facebook.com"
  },
  {
    iconName: "linkedin",
    url: "https://linkedin.com"
  },
  {
    iconName: "twitter",
    url: "https://twitter.com"
  },
];




class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="My Blog" links={navlinks}/>
        <Header/>

        <Article data={articleData}/>

        <div className="content">
          <Footer social={socialLinks}/>
        </div>

      </div>

    )
  }
}
export default App;
