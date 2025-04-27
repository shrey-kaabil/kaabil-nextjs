'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Stories.css';
import testImg from '../../assets/test-mig.jpg';

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: 'JEE Aspirant',
      designation: 'Student',
      content: "Kaabil.me points out exactly which concepts I'm weak in and guides my practice – now I know how to score better.",
      image: testImg,
    },
    {
      id: 2,
      name: 'Grade 7 Student',
      designation: 'Student',
      content: "I earn coins after each right answer and use them to talk to my AI Teacher – it keeps things fun and makes studying enjoyable.",
      image: testImg,
    },
    {
      id: 3,
      name: 'Coaching Teacher',
      designation: 'Grade 9-12',
      content: "Kaabil's homework generator saves me hours – I just select the chapter, tweak questions if needed, and share instantly via QR code.",
      image: testImg,
    },
    {
      id: 4,
      name: 'Parent',
      designation: 'Grade 9 Student',
      content: "My son asks Kaabil's AI tutor for hints instead of answers, and I will be able to weekly updates on his strengths – it's like a personal reliable coach at home.",
      image: testImg,
    },
  ];

  return (
    <section id="stories" className="stories_wrapper">
      <div className="container">
        <div className="section-title_title">
          <h2>Our Stories</h2>
        </div>
        <div className="stories_content">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="story-card">
                  <div className="story-card-content">
                    <div className="story-image-wrapper">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={100}
                        height={100}
                        className="story-image"
                      />
                    </div>
                    <div className="story-text">
                      <p className="story-description">{story.content}</p>
                      <h3 className="story-name">{story.name}</h3>
                      <p className="story-designation">{story.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Stories; 