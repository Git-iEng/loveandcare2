import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectPage2 = () => {
  return (
    <>
      <Navbar />
      <div className="top_header" id="home">
        <div className="banner-inner-page"></div>

        <div className="gallery" id="gallery">
          <div className="container">
            <div className="banner_bottom read_page">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">
                  Visit to Shri Chhatrapati Pratishthan&apos;s Nivasi Matimand Vidyalaya
                </h3>

                <div className="inner_sec_info_w3layouts">
                  <div className="read_img">
                    <p className="read_para">
                      As part of our continued commitment to spreading kindness and care,
                      the <i>Love and Care</i> team visited{" "}
                      <i>Shri Chhatrapati Pratishthan&apos;s Nivasi Matimand Vidyalaya</i>.
                      This visit was organized to spend meaningful time with the children
                      and to share moments of joy, encouragement, and support.
                    </p>

                    <p className="read_para">
                      During our visit, we interacted warmly with the children, distributed
                      toys and sweets, and created a cheerful environment filled with smiles
                      and excitement. The experience was deeply moving for our team and
                      reminded us how small gestures can bring genuine happiness.
                    </p>

                    <p className="read_para">
                      We also had the opportunity to meet and speak with the institute&apos;s
                      representatives, understand more about their work, and appreciate the
                      dedication involved in caring for and supporting the children.
                    </p>
                  </div>

                  <div className="col-md-6 read_img">
                    <img
                      src="/images/pro2/1.avif"
                      alt="Shri Chhatrapati Pratishthan visit"
                      className="img-responsive"
                    />
                  </div>

                  <div className="col-md-6 read-img-info">
                    <p>
                      The visit was not only about distributing toys, but also about sharing
                      compassion, building connection, and making the children feel seen,
                      valued, and loved.
                    </p>

                    <p>
                      This memorable experience strengthened our belief that care and kindness
                      can create a lasting impact in the lives of others, and we look forward
                      to continuing such initiatives in the future.
                    </p>

                    <div className="ab_button">
                      <Link className="btn btn-primary btn-lg" to="/" role="button">
                        Back to Home
                      </Link>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </div>

              
            </div>
<div className="title-agileits">
                <h3>Gallery</h3>
              </div>
            <div className="agileinfo_gallery_grids">
              {[2,3,4,5,6,7,8,9,10].map((num) => (
                <div key={num} className="col-md-4 w3_tabs_grid">
                  <div className="grid">
                    <figure className="effect-winston">
                      <img
                        src={`/images/pro2/${num}.avif`}
                        className="img-responsive"
                        alt="Project gallery"
                      />
                      <figcaption>
                        <p>
                          <span
                            className="glyphicon glyphicon-heart"
                            aria-hidden="true"
                          ></span>
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

export default ProjectPage2;