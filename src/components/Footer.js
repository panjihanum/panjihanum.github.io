import React from 'react';
import "../../src/assets/fontAwesome/css/all.css";

class Footer extends React.Component {
    constructor(){
        super();
        this.state={
            facebook : "https://web.facebook.com/profile.php?id=100013577470180",
            linkedIn : "https://www.linkedin.com/in/panji-hanum-877a57183/",
            github: "https://github.com/panjihanum?tab=repositories",
            whatsapp: "https://api.whatsapp.com/send?phone=6282113589617&amp;"
        }
    }
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-md-12">
                        <a href={this.state.facebook}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href={this.state.linkedIn}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href={this.state.github}>
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="col-md-12">
                        <a href={this.state.whatsapp}>
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;