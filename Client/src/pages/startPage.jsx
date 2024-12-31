import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/HomePage.scss'


function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="frame">
        <div className="div-2">



          <div className="overlap-group">
            <div className="text-wrapper-6">SpectrumEase</div>
            <div className='navbar'>
              <button onClick={() => setTimeout(() => {document.getElementsByClassName('overlap-6').scrollIntoView({ behavior: 'smooth' });}, 100)}>Test</button>
              <button>Research</button>
              <button>Concept</button>
              <button>About</button>
            </div>
            <div className="overlap-2">
              <input className="text-wrapper-5" placeholder='Search' />
              <div className="rectangle-4" />
            </div>
            <button className="div-wrapper" onClick={() => navigate('/sign-in')}>Log in</button>
          </div>




          <div className="text-wrapper-8">Get Clarity</div>
          <p className="unlock-the-full">
            <span className="span">Unlock the full </span>
            <span className="text-wrapper-9">spectrum</span>
            <span className="span"> of design with </span>
            <span className="text-wrapper-10">ease</span>
          </p>
          <p className="discover-a-world-of">
            Discover a world of adaptive design. Our dynamic tool adapts colors
            and layouts in real-time, crafting inclusive experiences for
            individuals with <br />
            color vision deficiencies.
          </p>




          <div className="overlap-3">
            <div className="rectangle-5 text-wrapper-7" > ‎ 9</div>
            <div className="rectangle-6 text-wrapper-7" ></div>
            <div className="rectangle-7 text-wrapper-7" ></div>
            <div className="rectangle-8 text-wrapper-7" ></div>
            <div className="rectangle-9 text-wrapper-7" ></div>
          </div>




          <p className="our-tool-is-always">
            Our tool is always <br />
            ready to adapt <br />
            for every vision
          </p>
          <p className="p">
            Unlike generic solutions, SpectrumEase provides personalized,
            data-driven modifications designed to meet your unique vision needs
          </p>
          {/*<div className='image'>
            <img src='Client/src/assets/bearded-man.png'></img>
            </div>*/}

          
          <div className="overlap-5">
            <button className="text-wrapper-12" onClick={() => navigate('/sign-in')}>Join and Explore</button>
          </div>


          <div className="overlap-4 how-does-it-work">
            How does it work? Take these three simple steps <br />
            and we will do the rest
          </div>
          <div className="overlap-4 text-wrapper-11">Trust us the whole process</div>





          <div className="overlap-group-2">
            <p className="improve-the">
              improve the readability of your favorite websites
              with&nbsp;&nbsp;browser extension
              toggling&nbsp;&nbsp;standard&nbsp;&nbsp;to enhanced views as needed
            </p>

            <div className="text-wrapper-16">3</div>
          </div>

          <div className="overlap-7">
            <p className="receive-personalized">
              Receive personalized <br />
              color palettes suggestions tailored as per your needs with
              customization options
            </p>

            <div className="text-wrapper-17">2</div>
          </div>

          <div className="overlap-8">
            <p className="hands-free">
              hands free assessments <br />
              using eye tracking technology
              <br />
              that identify your type &amp; severity of color vision deficiency
            </p>

            <div className="text-wrapper-18">1</div>
          </div>






          <div className="overlap-6">
            <div className="let-s-shift-to">
              Let’s shift to
              <br />
              clarity!
            </div>

            <p className="wonder-how-colors">
              Wonder how colors truly appear to you? Test now <br />
              and personalize your digital experience
            </p>

            <button className="rectangle-10 text-wrapper-13" onClick={() => navigate('/guide')}>Start the test</button>

          </div>

          <p className="review-terms-and">
            <span className="text-wrapper-14">Review terms and conditions </span>
            <a href='/' className="text-wrapper-15">here</a>
          </p>






          <div className="overlap">
            <div className="rectangle">
              <button style={{ position: 'absolute', bottom: '40px' }} onClick={() => navigate('/cruddata')}>CrudData</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
