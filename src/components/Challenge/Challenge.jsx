import React from 'react';
import Image from 'next/image';
import './Challenge.css';
import img1 from '../../assets/Img1.png';
import img2 from '../../assets/Img2.png';
import img3 from '../../assets/Img3.png';
import img4 from '../../assets/Img4.png';

const Challenge = () => {
  return (
    <>
      <section id="challenge" className="chllenging-lern">
        <div className="container">
          <div className="section-title_title">
            <h2>The Challenges In Learning</h2>
          </div>
          <div className="learning-categories">
            <div className="category-item">
              <div className="category-image">
                <Image
                  src={img1}
                  alt="Learners illustration"
                  width={280}
                  height={200}
                  className="challenge-img"
                  priority
                />
              </div>
              <h3>Learners</h3>
            </div>
            <div className="category-item">
              <div className="category-image">
                <Image
                  src={img2}
                  alt="Parents illustration"
                  width={280}
                  height={200}
                  className="challenge-img"
                  priority
                />
              </div>
              <h3>Parents</h3>
            </div>
            <div className="category-item">
              <div className="category-image">
                <Image
                  src={img3}
                  alt="Teachers illustration"
                  width={280}
                  height={200}
                  className="challenge-img"
                  priority
                />
              </div>
              <h3>Teachers</h3>
            </div>
            <div className="category-item">
              <div className="category-image">
                <Image
                  src={img4}
                  alt="Institutes illustration"
                  width={280}
                  height={200}
                  className="challenge-img"
                  priority
                />
              </div>
              <h3>Institutes</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="disconnected-efforts">
        <div className="container">
          <div className="diss-effort">
            <div className="section-title_title">
              <h2>Kaabil.me Brings These Disconnected Efforts Together</h2>
            </div>
            <div className="solutions-wrapper">
              <div className="solutions-content">
                <div className="solution-text">
                  <h3>Creating Easy Workflows for Teachers</h3>
                </div>
                <div className="solution-text">
                  <h3>Independent Growth for Learners</h3>
                </div>
                <div className="solution-text">
                  <h3>In-depth Analysis for Everyone</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenge;