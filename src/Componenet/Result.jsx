import React, { useState, useEffect, useRef } from 'react';
import './Result.css';
import CountUp from 'react-countup';

export default function Result() {
  const [startCount, setStartCount] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // Start counting when the section is visible
        } else {
          setStartCount(false); // Reset counting if you want it to re-trigger
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (resultRef.current) {
      observer.observe(resultRef.current);
    }

    return () => {
      if (resultRef.current) {
        observer.unobserve(resultRef.current);
      }
    };
  }, []);

  return (
    <div className='result-main' ref={resultRef}>
      <div className="result-main-1">
        <h1 className='headin'>
          Results our <br />
          customers have seen
        </h1>
        <div className="one-two-main">
          <div className="one">
            <h1>
            {startCount ? (
                <CountUp 
                  start={0}  // Start at 0
                  end={200}  // End at 200
                  duration={2} // Duration for the count up
                />
              ) : (
                0 // Display 0 initially
              )}
            </h1>
            <h3>Hours saved annually</h3>
          </div>
          <div className="two">
            <h1>2X</h1>
            <h3>Candidates evaluated</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
