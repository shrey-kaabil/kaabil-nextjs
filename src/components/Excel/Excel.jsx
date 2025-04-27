import React from "react";
import Image from "next/image";
import "./Excel.css";
import excelShape1 from "../../assets/excl-shpe-img1.svg";
import excelShape2 from "../../assets/excl-shpe-img2.svg";
import excelApplyImage from "../../assets/excel-apply-bg-image.png";

const Excel = () => {
  return (
    <section id="excel" className="aply-excl">
      <div className="container position-relative">
        <div className="section-title_title">
          <h2>Understand. Apply. Excel every day.</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="excl-aply-img">
              <Image
                src={excelApplyImage}
                alt="Excel application illustration"
                width={800}
                height={600}
                className="main-image"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="excl-shp-img-1 position-absolute">
          <Image
            src={excelShape1}
            alt="Excel shape decoration"
            width={411}
            height={411}
            className="shape-image"
            priority={false}
          />
        </div>
        <div className="excl-shp-img-2 position-absolute">
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
    </section>
  );
};

export default Excel;
