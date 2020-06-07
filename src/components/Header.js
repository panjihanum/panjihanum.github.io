import React from "react";
import $ from 'jquery';


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Menu : [
                {
                    key: 1,
                    name: "Home",
                    id: "home"
                },
                {
                    key: 2,
                    name: 'My Projects',
                    id: "projects"
                },
                {
                    key: 3,
                    name: "My Skills",
                    id: "skills"
                },
                {
                    key: 4,
                    name: "About Me",
                    id: "aboutMe"
                }
            ]
        }
    }

    render(){
        return (
            <header className="header animated fadeInRight" >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img alt="logo" src={require("../assets/images/webp/logo.webp")} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-custom">
                            {
                                this.state.Menu.map(function (val, i){
                                    return (
                                    <li className="nav-item active" key={`I${val.key}`}>
                                        <a className="nav-link" href="#">{val.name} <span className="sr-only">(current)</span></a>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </header>
            
        );
    };
}

$(function () {
    //1) create a function 
        var handleMatchMedia = function(md) {
            if (md.matches) {
                $('.header .center').hide();
                $('.header .center-2').show();
                // your code
            } else {
                $('.header .center').show();
                $('.header .center-2').hide();
                // your code
            }
        }
        var mq = window.matchMedia("(max-width: 768px)");
    
    // 2) call the function
        handleMatchMedia(mq);
    
    
    //3) call the addListener function  
        mq.addListener(handleMatchMedia);
    });
export default Header;