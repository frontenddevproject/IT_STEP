import React from "react";
import "../css/main.css"
import { FlexRow } from "../../../shared/flex";
import { ScrollPoint, ScrollTopContextProvider } from "react-use-scroll-to";
export const MainLanding = () => {
  return (
 
    <main className="main">
      <div className="container">
       <section className="main__offer">
         <FlexRow flexWrap="wrap">
          <div className="main__offer-card">
          <ScrollPoint tag="section-1">
            <h2 className="main__title">What we offer</h2>
          </ScrollPoint>
            <p className="main__offer-text">
              The incredible landscapes of Montenegro are a fairy-tale world of
              natural beauty.
            </p>
            <div className="main__offer-img"></div>
          </div>
          <div className="main__offer-card">
            <p className="main__offer-text">
               Mountain lakes, waterfalls, green valleys and clean beaches - all this awaits you. Feel the harmony with nature.
            </p>
            <div className="main__offer-img"></div>
          </div>
          <div className="main__offer-card">
            <p className="main__offer-text">
               Delicious local cuisine Montenegro is famous for its unique cuisine. Try dishes made from local products and enjoy authentic flavors.
            </p>
            <div className="main__offer-img"></div>
          </div>
          <div className="main__offer-card">
            <p className="main__offer-text">
               Historical assets Ancient cities, castles and fortresses will tell you the history of Montenegro. You will immerse yourself in the feeling of the past and discover the secrets of this unique country
            </p>
            <div className="main__offer-img"></div>
          </div>
          </FlexRow>
        </section>
        <section className="main__reviews"></section>
        <section className="main__order"></section>
      </div>
    </main>

  );
};
