import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tracker from './tracker';
import '../stylesheets/GuidePage.scss';

function GuidePage() {
    const navigate = useNavigate();
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [changes, setChanges] = useState(0);
    const [showTracker, setShowTracker] = useState(false);


    const First = () => {
        setOne(true);
        setChanges(1); 
    }

    const Second = () => {
        setTwo(true);
        setChanges(2); 
    }

    const Third = () => {
        setThree(true);
        setChanges(3); 
    }

    const Fourth = () => {
        setFour(true);
        setChanges(4); 
    }

    const CameraTrackerOpens = () => {
        Second();
        setShowTracker(true); 
        console.log("camera bool true")
    };


    let contentA, contentB, contentC, contentD;
    if (changes === 0) {
        contentA = (
            <>
            <button className="text-wrapper-2" onClick={First}>Proceed</button>
            <div className="text">Before we begin, please follow and review the steps required to complete the test</div>
            </>
        );
        contentB = (
            <></>
        );
    } else if (changes === 1) {
        contentA = (
            <>
            <div className="text one"> Enable camera access to activate the eye tracker that will detect your eye motion on screen </div>
            <button className="bluebttn" onClick={CameraTrackerOpens} > Allow</button>
            {showTracker && <Tracker />}
            </> 
        );
        contentB = (
            <></>
        );
    } else if (changes === 2) {
        contentA = (
            <>
            <div className="text one two"> Enable camera access </div>
            </> 
        );
        contentB = (
            <>
            <div className="text2 one two"> Calibrate the tracker by focusing on your cursor and clicking on different points across the screen </div>
            <button className="bluebttn" onClick={Third}> Next</button>
            </>
        );
    } else if (changes === 3) {
        contentA = (
            <>
            <div className="text one two three"> Enable camera access </div>
            </> 
        );
        contentB = (
            <>
            <div className="text2 one two three"> Calibrate the tracker </div>
            </>
        );
        contentC = (
            <>
            <div className="text3 one two three"> The test presents a grid of circles follow the odd colored one with your eyes in each iteration </div>
            <button className="bluebttn" onClick={Fourth}> Next</button>
            </>
        );
    } else if (changes === 4) {
        contentA = (
            <>
            <div className="text one two three"> Enable camera access </div>
            </> 
        );
        contentB = (
            <>
            <div className="text2 one two three"> Calibrate the tracker </div>
            </>
        );
        contentC = (
            <>
            <div className="text3 one two three four"> Grid of circles </div>
            </>
        );
        contentD = (
            <>
            <div className="text4 one two three four"> Ready to begin? Keep your focus and don’t lose track in the middle! </div>
            <button className="bluebttn" onClick={() => navigate('/tracker')}> Start</button>
            </>
        );
    }


    return (
        <div className="parent">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">SpectrumEase</div>
                </div>

                <div className={`rectangle-1 ${one ? 'one' : ''} ${two ? 'two' : ''} ${three ? 'three' : ''} ${four ? 'four' : ''}`}>
                    {contentA}
                </div>
                <div className={`rectangle-2 ${one ? 'one' : ''} ${two ? 'two' : ''} ${three ? 'three' : ''} ${four ? 'four' : ''}`} >
                    {contentD}
                </div>
                <div className={`rectangle-3 ${one ? 'one' : ''} ${two ? 'two' : ''} ${three ? 'three' : ''} ${four ? 'four' : ''}`} >
                    {contentC}
                </div>
                <div className={`rectangle-4 ${one ? 'one' : ''} ${two ? 'two' : ''} ${three ? 'three' : ''} ${four ? 'four' : ''}`} >
                    {contentB}
                </div>
            </div>
        </div>
    );
}

export default GuidePage;
