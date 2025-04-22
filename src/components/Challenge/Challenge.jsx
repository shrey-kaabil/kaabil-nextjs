'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import './Challenge.css';
import img1 from '../../assets/Img1.png';
import img2 from '../../assets/Img2.png';
import img3 from '../../assets/Img3.png';
import img4 from '../../assets/Img4.png';

const Challenge = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.8,
      },
    },
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <>
      <section id="challenge" className="chllenging-lern" ref={ref}>
        <div className="container">
          <motion.div
            className="section-title_title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={titleAnimation}
          >
            <h2>The Challenges In Learning</h2>
          </motion.div>
          
          <motion.div 
            className="learning-categories"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={container}
          >
            {[img1, img2, img3, img4].map((img, index) => (
              <motion.div 
                key={index}
                className="category-item"
                variants={item}
                custom={index}
                whileHover={{
                  x: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="category-image">
                  <Image
                    src={img}
                    alt={`${['Learners', 'Parents', 'Teachers', 'Institutes'][index]} illustration`}
                    width={280}
                    height={200}
                    className="challenge-img"
                    priority
                  />
                </div>
                <h3>{['Learners', 'Parents', 'Teachers', 'Institutes'][index]}</h3>
              </motion.div>
            ))}
          </motion.div>
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