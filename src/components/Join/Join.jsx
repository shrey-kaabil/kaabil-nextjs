'use client'
import React from 'react';
import Image from 'next/image';
import './Join.css';
import frame89 from '../../assets/Frame 89.png';
import frame90 from '../../assets/Frame 90.png';    
import frame91 from '../../assets/Frame 91.png';


const Join = () => {
  const items = [
    { id: 1, title: 'Title', image: frame89 },
    { id: 2, title: 'Title', image: frame90 },
    { id: 3, title: 'Title', image: frame91 },
    { id: 4, title: 'Title', image: frame89 },
    // { id: 5, title: 'Title', image: frame90 },
    // { id: 6, title: 'Title', image: frame91 },
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={238}
                    className="join-image"    
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mobile-scroll-container d-md-none">
            {items.map((item) => (
              <div key={item.id} className="mobile-scroll-item">
                <div className="join-item">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={238}
                    className="join-image"    
                  />
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