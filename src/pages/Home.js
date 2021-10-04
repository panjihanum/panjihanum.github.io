import React from "react";
import { IMAGES } from "../assets/images";
import { PDF_FILE } from "../assets/pdf";

const Home = () => {
  return (
    <div className="box p-lg-5">
      <div className="photo-box-wrapper">
        <img className="photo-box" alt="PhotoPanji" src={IMAGES.PANJI_PHOTO} />
      </div>
      <div className="d-flex flex-column justify-content-center px-5 section-box text-center text-lg-start">
        <h1 className="bold">HI, I'M PANJI HANUM</h1>
        <h4 className="mt-1 primary-color text-center text-lg-start">
          A PROGRAMMER
        </h4>
        <span className="mt-4 col-12 col-lg-5">
          Hello, My name is Panji Hanum, u can call me Panji. I was born in
          Jakarta, 23 September 2001. I'm a programmer who love coding since
          2019, when I'm trying to follow a training IT Software Solution for
          business at BLK Bekasi. and then, I'm continue to training again at
          arkademy during 2 months.
        </span>
        <div className="d-flex mt-4 justify-content-center justify-content-lg-start">
          <a href={PDF_FILE.MY_CV}>
            <div className="button">DOWNLOAD CV</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
