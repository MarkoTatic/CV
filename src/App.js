import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };


  }

  getResumeData(){
    let data = {
      "main": {
        "name": "Marko Tatic",
        "occupation": "(Your Occupation Here)",
        "description": "Software Engineer passionate about building technologies that make the world a better place. Experienced with the latest cutting edge development tools. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.",
        "image": "marko.jfif",
        "bio": "Software Engineer passionate about building technologies that make the world a better place. Experienced with the latest cutting edge development tools. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.",
        "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
        "email": "buduci.inzinjer@gmail.com",
        "phone": "+381 640486317",
        "address": {
          "street": "Kopernikova 12",
          "city": "Novi Sad",
          "state": "Vojvodina, Serbia",
          "zip": "21000"
        },
        "website": "http://www.timbakerdev.com",
        "resumedownload": "http://timbakerdev.com",
        "social": [
          {
            "name": "facebook",
            "url": "http://facebook.com/tim.baker.906",
            "className": "fa fa-facebook"
          },
          {
            "name": "twitter",
            "url": "buduci.inzinjer",
            "className": "fa fa-skype"
          },
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/tim-baker-8420009a/",
            "className": "fa fa-linkedin"
          },
          {
            "name": "instagram",
            "url": "http://instagram.com/tbaker_x",
            "className": "fa fa-instagram"
          },
          {
            "name": "github",
            "url": "http://github.com/tbakerx",
            "className": "fa fa-github"
          }
        ]
      },
      "resume": {
        "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
        "education": [
          {
            "school": "Zrenjanin Gymansium",
            "degree": "Graduated",
            "graduated": "Start year:2012",
            "description": "General course."
          },
          {
            "school": "University of Technical Science Novi Sad",
            "degree": "Final year student",
            "graduated": "Start year: 2016",
            "description": "Department of applied computer science."
          }
          
        ],
        "work": [
          {
            "company": "Levi9 Technology Services",
            "title": ".NET Internship Zrenjanin",
            "years": "July 2019 - August 2019",
            "description": ""
          },
          {
            "company": "Levi9 Technology Services",
            "title": ".NET Winter Workshop Zrenjanin",
            "years": "February 2021 - March 2021",
            "description": ""
          },
          {
            "company": "Levi9 Technology Services",
            "title": ".NET Software Developer Junior",
            "years": "June 2021 - Present",
            "description": ""
          }
        ],
        "skills": [
          {
            "name": "Git",
            "level": "95%"
          },
          {
            "name": ".NET CORE",
            "level": "95%"
          },
          {
            "name": "ReactJs",
            "level": "80%"
          },
          {
            "name": "Angular 9",
            "level": "70%"
          },
          {
            "name": "EntityFramework Core",
            "level": "90%"
          },
          {
            "name": "Docker",
            "level": "50%"
          }
        ]
      },
      "portfolio": {
        "projects": [
          {
            "title": "Canadian Wanderlust",
            "category": "My Travel Blog for my post-university travels",
            "image": "designPatterns.jpg",
            "url": "https://www.canadianwanderlust.com"
          },
          {
            "title": "Fury Fighting Gear",
            "category": "(offline now) A fighting gear company I started",
            "image": "fury-fighting-gear.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Original Thai Food",
            "category": "Website I built for a restaurant I like in Thailand",
            "image": "original-thai-food.jpg",
            "url": "http://www.timbakerdev.com/originalthaifood.github.io"
          },
          {
            "title": "Resume Website",
            "category": "A React based resume website template",
            "image": "resume-website.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Smirkspace",
            "category": "(MVP Only) A React and Meteor based chat University project.",
            "image": "smirkspace.jpg",
            "url": "http://www.smirkspace.com"
          }
        ]
      },
      "testimonials": {
        "testimonials": [
          {
            "text": "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user": "Kareem Abdul Jabbar"
          },
          {
            "text": "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
            "user": "Steve Wozniak... impersonator"
          }
        ]
      }
    }
    this.setState({resumeData: data});
    // $.ajax({
    //   url:'/resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert("dadsad");
    //   }
    // });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
