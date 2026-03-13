import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      {/* Banner Carousel */}
      <div className="banner_top">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Change Begins With You</h3>
                  <div className="bnr-button"></div>
                </div>
              </div>
            </div>
            <div className="item item2">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Make good things happen</h3>
                  <div className="bnr-button"></div>
                </div>
              </div>
            </div>
            <div className="item item3">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Together, We Create Hope</h3>
                  <div className="bnr-button"></div>
                </div>
              </div>
            </div>
            <div className="item item4">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Small Acts, Big Impact</h3>
                  <div className="bnr-button"></div>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="fa fa-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="fa fa-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <section className="about-brief-section">
          <div className="heading-wrapper-brief">
            <span className="subheading-brief">Welcome to Love and Care</span>
            <h2 className="title-brief">Every Helping Hand Creates a Brighter Tomorrow</h2>
            <p className="paragraph-brief">
              At <i>Love and Care Foundation</i>, we believe in the power of small acts of kindness to create big change. Our journey began with a simple desire — to reach out and support those who are often overlooked, including underprivileged children, the elderly, and individuals in need.
            </p>
            <p className="paragraph-brief">
              We are a team of passionate changemakers, working on a no-profit, no-loss basis to serve communities through education, healthcare, and humanitarian aid.
            </p>
            <p className="paragraph-brief">
              Our projects are designed to create lasting impact. From educational support for children to rehabilitation programs for the elderly and differently-abled, we work tirelessly to ensure that every individual we reach feels valued, supported, and inspired to grow.
            </p>
            <p className="paragraph-brief">
              Change begins with care — and you can be a part of it. Join us as a volunteer, donor, or supporter, and help us write stories of hope, courage, and transformation.
            </p>

            {/* Our Projects */}
            <div className="banner_bottom">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">Our Projects</h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="last_sec">
                    <div className="col-md-6 last-img-info-text">
                      <h4>Visit to Apala Ghar Orphanage &amp; Old Age Home</h4>
                      <p>As our first step in spreading kindness, the <i>Love and Care</i> team visited <i>Apala Ghar</i>, a combined orphanage and old age home that houses around 40 residents, including children and elderly individuals.</p>
                      <div className="ab_button">
                        <Link className="btn btn-primary btn-lg" to="/project" role="button">Read More</Link>
                      </div>
                    </div>
                    <div className="col-md-6 last-img-info_main">
                      <div className="col-md-6 last-img-info">
                        <div className="dodecagon l1">
                          <div className="dodecagon-in l1">
                            <div className="dodecagon-bg l1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 last-img-info">
                        <div className="dodecagon l2">
                          <div className="dodecagon-in l2">
                            <div className="dodecagon-bg l2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Events */}
            <div className="banner_bottom">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">Our Events</h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="last_sec">
                    <div className="col-md-6 last-img-info_main">
                      <div className="col-md-6 last-img-info">
                        <div className="dodecagon l3">
                          <div className="dodecagon-in l3">
                            <div className="dodecagon-bg l3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 last-img-info">
                        <div className="dodecagon l4">
                          <div className="dodecagon-in l4">
                            <div className="dodecagon-bg l4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-md-6 last-img-info-text">
                      <h4>Opening Ceremony – <i>8th March 2025</i></h4>
                      <p>The Love and Care Foundation was officially launched on 8th March 2025, a date that coincides with International Women's Day — a celebration of compassion, strength, and unity.</p>
                      <div className="ab_button">
                        <Link className="btn btn-primary btn-lg" to="/event" role="button">Read More</Link>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div className="banner_bottom" id="about">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">About us</h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="help_full">
                    <ul className="rslides" id="slider4">
                      <li>
                        <div className="respon_info_img">
                          <img src="/images/project/feed.png" className="img-responsive" alt="Feed the Hungry" />
                        </div>
                        <div className="banner_bottom_left">
                          <h4>Feed the Hungry Child</h4>
                          <p>Love and Care runs the Feed the Hungry Child program to provide food to children who do not get regular meals. We focus on areas where children face hunger due to poverty or lack of support.</p>
                          <div className="ab_button">
                            <Link className="btn btn-primary btn-lg hvr-underline-from-left" to="/about" role="button">Read More</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="banner_bottom proj" id="gallery">
              <div className="wrap_view">
                <h3 className="tittle_w3_agileinfo">Gallery</h3>
                <div className="inner_sec_info_w3layouts">
                  <ul className="portfolio-categ filter">
                    <li className="port-filter all active"><a href="#">All</a></li>
                    <li className="cat-item-1"><a href="#">Project</a></li>
                    <li className="cat-item-3"><a href="#">Event</a></li>
                    <li className="cat-item-4"><a href="#">Children</a></li>
                  </ul>

                  <ul className="portfolio-area">
                    {[10, 2, 3, 4, 7].map(num => (
                      <li key={`proj-${num}`} className="portfolio-item2" data-type="cat-item-1">
                        <div>
                          <span className="image-block">
                            <img src={`/images/project/${num}.png`} className="img-responsive" alt="Project" />
                          </span>
                        </div>
                      </li>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7].map(num => (
                      <li key={`evt-${num}`} className="portfolio-item2" data-type="cat-item-3">
                        <div>
                          <span className="image-block">
                            <img src={`/images/event/${num}.png`} className="img-responsive" alt="Event" />
                          </span>
                        </div>
                      </li>
                    ))}
                    {[9, 8, 6].map(num => (
                      <li key={`child-${num}`} className="portfolio-item2" data-type="cat-item-4">
                        <div>
                          <span className="image-block img-hover">
                            <img src={`/images/project/${num}.png`} className="img-responsive" alt="Children" />
                          </span>
                        </div>
                      </li>
                    ))}
                    <div className="clearfix"></div>
                  </ul>
                </div>
              </div>
            </div>

            {/* Events Coming Soon */}
            <div className="events-coming">
              <h3 className="tittle_w3_agileinfo cen">Our Events Coming Soon</h3>
              <div className="inner_sec_info_w3layouts">
                <div className="content">
                  <div className="simply-countdown-custom" id="simply-countdown-custom"></div>
                </div>
              </div>
            </div>

            {/* Volunteers */}
            <div className="banner_bottom" id="team">
              <div className="container">
                <h3 className="tittle_w3_agileinfo">Volunteers</h3>
                <div className="inner_sec_info_w3layouts">
                  <div className="ser-first">
                    {[
                      { name: "Diksha Bhutekar", role: "President", cls: "t1" },
                      { name: "Harsha Mahale", role: "Vice President", cls: "t2" },
                      { name: "Pratiksha Walhekar", role: "Secretary", cls: "t3" },
                      { name: "Mayur Mane", role: "Treasurer", cls: "t4" },
                    ].map((member) => (
                      <div key={member.cls} className="col-md-3 photo-grid text-center">
                        <div className={`dodecagon ${member.cls}`}>
                          <div className={`dodecagon-in ${member.cls}`}>
                            <div className={`dodecagon-bg ${member.cls}`}></div>
                          </div>
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                      </div>
                    ))}
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="ab_button">
                  <Link className="btn btn-primary btn-lg hvr-underline-from-left" to="/team" role="button">Read More</Link>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
