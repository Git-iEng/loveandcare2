import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <>
      <Navbar />
      <div className="top_header" id="home">
        <div className="banner-inner-page"></div>
        <div className="gallery" id="gallery">
          <div className="container">
            <div className="banner_bottom read_page">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">Visit to Apala Ghar Orphanage &amp; Old Age Home</h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="read_img">
                    <p className="read_para">As our first heartfelt initiative, the <i>Love and Care</i> team embarked on a meaningful visit to <i>Apala Ghar</i>, a nurturing space that serves both as an orphanage for children and a home for elderly individuals.</p>
                    <p className="read_para">Upon our arrival, we were welcomed with warm smiles and open hearts. We spent quality time engaging in conversations with both the children and the senior residents.</p>
                    <p className="read_para">We were touched to see the holistic environment that <i>Apala Ghar</i> provides, including a small in-house hospital, creative spaces for children, and a serene garden for the elderly.</p>
                  </div>
                  <div className="col-md-6 read_img">
                    <img src="/images/project/10.avif" alt="Project" className="img-responsive" />
                  </div>
                  <div className="col-md-6 read-img-info">
                    <p>What stood out the most was the bond between generations living under one roof — children finding wisdom in the elderly, and seniors finding joy in the innocence of youth.</p>
                    <p>Our visit to <i>Apala Ghar</i> was a humbling experience — one that reminded us of the impact even a single act of kindness can make.</p>
                    <div className="ab_button">
                      <Link className="btn btn-primary btn-lg" to="/" role="button">Back to Home</Link>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="title-agileits"><h3>Gallery</h3></div>
            </div>
            <div className="agileinfo_gallery_grids">
              {[2, 11, 4, 5, 6, 7, 8, 9, 3].map(num => (
                <div key={num} className="col-md-4 w3_tabs_grid">
                  <div className="grid">
                    <figure className="effect-winston">
                      <img src={`/images/project/${num}.avif`} className="img-responsive" alt="Project gallery" />
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
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
