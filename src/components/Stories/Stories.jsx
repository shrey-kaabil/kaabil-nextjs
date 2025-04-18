'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Stories.css';
import testImg from '../../assets/test-mig.jpg';

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: 'Name',
      designation: 'Designation',
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: testImg,
    },
    {
      id: 2,
      name: 'Name',
      designation: 'Designation',
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: testImg,
    },
    {
      id: 3,
      name: 'Name',
      designation: 'Designation',
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      image: testImg,
    },
    {
      id: 4,
      name: 'Name',
      designation: 'Designation',
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
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
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
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
                      <h3 className="story-name">{story.name}</h3>
                      <p className="story-designation">{story.designation}</p>
                      <p className="story-description">{story.content}</p>
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