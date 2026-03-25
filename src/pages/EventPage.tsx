import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventPage = () => {
  return (
    <>
      <Navbar />
      <div className="top_header" id="home">
        <div className="banner-inner-page"></div>
        <div className="gallery" id="gallery">
          <div className="container">
            <div className="banner_bottom read_page">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">Opening Ceremony – <i>8th March 2025</i></h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="read_img">
                    <p className="read_para">The <i>Love and Care</i> Foundation was officially launched on <strong>8th March 2025</strong>, a date that coincides with <strong>International Women's Day</strong>. This memorable event brought together our founding team, dedicated supporters, and well-wishers.</p>
                    <p className="read_para">The ceremony commenced with a traditional ribbon-cutting moment, symbolising the opening of doors to a mission filled with empathy and hope.</p>
                    <p className="read_para">Attendees came together to reflect, connect, and share personal motivations behind joining this noble cause.</p>
                  </div>
                  <div className="col-md-6 read_img">
                    <img src="/images/event/1.avif" alt="Event" className="img-responsive" />
                  </div>
                  <div className="col-md-6 read-img-info">
                    <p>Photos were taken to capture the joy and energy of the day — smiling faces, hopeful hearts, and the unmistakable excitement of launching something truly meaningful.</p>
                    <p>This Women's Day-inspired opening ceremony set the tone for everything that lies ahead.</p>
                    <div className="ab_button">
                      <Link className="btn btn-primary btn-lg" to="/" role="button">Back to Home</Link>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="title-agileits"><h3>Gallery</h3></div>
          </div>
          <div className="agileinfo_gallery_grids">
            {[2, 3, 4, 5, 6, 7, 13, 8, 12].map(num => (
              <div key={num} className="col-md-4 w3_tabs_grid">
                <div className="grid">
                  <figure className="effect-winston">
                    <img src={`/images/event/${num}.avif`} className="img-responsive" alt="Event gallery" />
                    <figcaption>
                      <p>
                        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
