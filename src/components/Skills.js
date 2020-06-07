import React from 'react';

class Skills extends React.Component {

    constructor(){
        super();
        var category = [
            "Mobile",
            "Backend",
            "Frontend",
            "DevOps",
            "Database",
            "Designing"
        ]
        this.state = {
            category : category,
            skills: [
                {Frontend : [
                    {
                        name : "HTML5",
                        rating: "75",
                        style: "devicon-html5-plain-wordmark colored"
                    },{
                        name: "CSS3",
                        rating: "80",
                        style: "devicon-css3-plain-wordmark colored"
                    },{
                        name: "SASS",
                        rating: "65",
                        style: "devicon-sass-plain colored"
                    },{
                        name: "JavaScript",
                        rating: "80",
                        style: "devicon-javascript-plain colored"
                    },{
                        name: "JQuery",
                        rating: "72",
                        style: "devicon-jquery-plain-wordmark colored"
                    },{
                        name: "React",
                        rating: "50",
                        style: "devicon-react-plain-wordmark colored"
                    },{
                        name: "Bootstrap",
                        rating: "60",
                        style: "devicon-bootstrap-plain-wordmark colored"
                    }
                ]},
                {Backend: [
                    {
                        name : "Java Backend",
                        rating: "70",
                        style: "devicon-java-plain-wordmark colored"
                    },{
                        name : "Adonis JS",
                        rating: "60",
                        style: "adonis-js"
                    },{
                        name : "Laravel",
                        rating: "60",
                        style: "devicon-laravel-plain-wordmark colored"
                    },{
                        name : "Node JS",
                        rating: "40",
                        style: "devicon-nodejs-plain-wordmark colored"
                    }
                ]},
                {DevOps: [
                    {
                        name: "AWS",
                        rating: "35",
                        style: "devicon-amazonwebservices-plain-wordmark colored"
                    },
                    {
                        name: "Nginx",
                        rating: "65",
                        style: "devicon-nginx-plain-wordmark colored"
                    }
                ]},
                {Mobile: [
                    {
                        name: "React Native",
                        rating: "80",
                        style: "devicon-react-plain-wordmark colored"
                    },{
                        name : "Java Android",
                        rating: "35",
                        style: "devicon-java-plain-wordmark colored"
                    }
                ]},
                {Database: [
                    {
                        name : "Postgresql",
                        rating: "80",
                        style: "devicon-postgresql-plain-wordmark colored"
                    },
                    {
                        name: "MySql",
                        rating: "85",
                        style: "devicon-mysql-plain-wordmark colored"
                    }
                ]},
                {Designing: [
                    {
                        name : "Adobe Photoshop",
                        rating: "45",
                        style: "devicon-photoshop-plain colored"
                    }
                ]}
            ]
        }

    }

   

    componentDidMount() {
        const _getListItem = (i, skill) =>{
            var listItem = "";
            this.state.skills[i][skill].map(function(val){
                listItem +=`
                <div class="row">
                    <div class="col-md-2">
                        <i class="iconDev row ` + val.style + `" data-skill="`+ val.name + `"> </i>
                    </div>
                    <div class="col-md-10 percentage">
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ` + val.rating + `%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                `
                return null;
            })  
            return listItem;
        }


        var item = "";


        for ( var i = 0 ; i < this.state.skills.length; i++){
            var val = this.state.skills[i];
            var skill = Object.keys(val)[0];         
            var listItem = _getListItem(i, skill);
            item += `
                <div class="col-md-12 col-lg-6">
                    <div class="header">
                        <div class="text-header">` + skill + `</div>
                    </div>
                    <div class="contentSkills column">
                            `+ listItem +`
                    </div>
                </div>`
        }
        this.setState({
            result: item
        })
    }

    render(){

        return(
            <div className="skills">
                <div className="header">
                    <div className="text">
                        My <div className="green">Skills</div>
                    </div>
                </div>
                <div  className="content row" dangerouslySetInnerHTML={{__html : this.state.result}}>
                </div>
            </div>
        )
    }   
}
export default Skills;