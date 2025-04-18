import React from 'react';
import Image from 'next/image';
import './Excel.css';
import excelShape1 from '../../assets/excel-shape1.png';
import excelShape2 from '../../assets/excl-shpe-img2.png';
import excelApply from '../../assets/excel-apply-removebg-preview.png';

const Excel = () => {
  return (
    <section id="excel" className="aply-excl">
      <div className="container">
        <div className="section-title_title">
          <h2>Understand. Apply. Excel every day.</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="excl-shp-img-1">
              <Image
                src={excelShape1}
                alt="Excel shape decoration"
                width={411}
                height={411}
                className="shape-image"
                priority={false}
              />
            </div>
            <div className="excl-aply-img">
              <Image
                src={excelApply}
                alt="Excel application illustration"
                width={800}
                height={600}
                className="main-image"
                priority={true}
              />
            </div>
            <div className="excl-shp-img-2">
              <Image
                src={excelShape2}
                alt="Excel shape decoration"
                width={442}
                height={442}
                className="shape-image"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excel; 