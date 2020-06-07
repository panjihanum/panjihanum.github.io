import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class Quotes extends React.Component{

    constructor(props){
        super(props);
        this.state = {quotes: [
            {
                key: 1,
                quote: "Live is not about money, but live is about how ur way to get what u want .",
            },{
                key: 2,
                quote: "Money is not my priority, but my priority is my happiness in this world",
            },{
                key: 3,
                quote: "Time isn't the main thing. It's only thing.",
            }
        ]}
    }

    render(){
        return (
        <div className="quotes">
            {/* <img alt="tree" src={require('../assets/images/webp/tree-2.webp')} className="tree-2"/> */}
            {/* <img alt="butterfly" src={require('../assets/images/animated-butterfly-image-0289.gif')} className="butterfly"/> */}
            <div className="header">
                My <span className="green">Quotes</span>
            </div>
            <div className="row justify-content-md-center">
            {   
                this.state.quotes.map(function(val, i){
                    return(
                        <div className="col-md-12 col-lg-4"key={val.key}>
                            <div className="card-custom">
                                
                                <div className="card-custom-content">
                                    <div className="card-custom-header">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="iconQuote"/>
                                    </div>
                                    {val.quote}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="header mt-5">
                My <span className="green">Motivation</span>
            </div>
            <div className="video">
                <div className="wrapper">
                    <div className="youtube" data-embed="gHhQB8enVqQ">
                        <div className="play-button"></div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
}
$(() =>{
    ( function() {

        var youtube = document.querySelectorAll( ".youtube" );
        
        for (let i = 0; i < youtube.length; i++) {
            
            var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
            
            var image = new Image();
                    image.src = source;
                    image.addEventListener( "load", function() {
                        youtube[ i ].appendChild( image );
                    }( i ) );
            
                    youtube[i].addEventListener( "click", function() {
    
                        var iframe = document.createElement( "iframe" );
    
                                iframe.setAttribute( "frameborder", "0" );
                                iframe.setAttribute( "allowfullscreen", "" );
                                iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
    
                                this.innerHTML = "";
                                this.appendChild( iframe );
                    } );    
        };
        
    } )();
})

export default Quotes;