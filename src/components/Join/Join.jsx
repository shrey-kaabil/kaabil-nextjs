'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Join.css';    
import frame89 from '../../assets/join1.svg';
import frame90 from '../../assets/join2.svg';    
import frame91 from '../../assets/join3.svg';
import frame92 from '../../assets/join4.svg';


const Join = () => {
  const items = [
    { id: 1, title: 'UPSC GS Papers', image: frame89 ,link: 'https://app.kaabil.me/course/64'},
    { id: 2, title: 'Grade  6', image: frame90 ,link: 'https://app.kaabil.me/course/16'},
    { id: 3, title: 'Grade 12', image: frame91 ,link: 'https://app.kaabil.me/course/110'},
    { id: 4, title: 'JEE', image: frame92 ,link: 'https://app.kaabil.me/course/111'},
  ];

  return (
    <section id="join" className="join_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="section-title_title">
            <h2>Join a new way to learn</h2>
          </div>
        </div>
        <div className="row">
          <div className="desktop-view d-none d-md-flex gap-4">
            {items.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 mt-4">
                <div className="join-item">
                  <Link target="_blank" href={item.link} passHref >
                      <div className="join-text text-start">{item.title}</div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={238}
                        className="join-image"    
                      />
                  </Link> 
                </div>
              </div>
            ))}
          </div>
          <div className="mobile-scroll-container d-md-none">
            {items.map((item) => (
              <div key={item.id} className="mobile-scroll-item">
                <div className="join-item">
                  <Link target="_blank" href={item.link} passHref >
                      <div className="join-text text-start">{item.title}</div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={238}
                        className="join-image"    
                      />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join; 