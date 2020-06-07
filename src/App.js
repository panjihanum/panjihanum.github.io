import React from 'react';
import './assets/css/animate.css';
import './assets/scss/all.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'devicon/devicon.min.css';

const Header  = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./components/Home'));
const Quotes = React.lazy(() => import('./components/Quotes'));
// const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Footer = React.lazy(() => import('./components/Footer'));


class App extends React.Component {
  
  componentDidMount() {
    document.title = 'Panji Hanum Portofolio';
  }


  render(){
    return (
      <div className="container-custom">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Home />
          <Quotes />
          <Skills />
          {/* <Projects /> */}
          <Footer />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
