import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
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
                </div>
              </div>
            </div>

            <div className="item item2">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Make Good Things Happen</h3>
                </div>
              </div>
            </div>

            <div className="item item3">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Together, We Create Hope</h3>
                </div>
              </div>
            </div>

            <div className="item item4">
              <div className="container">
                <div className="carousel-caption">
                  <h3>Small Acts, Big Impact</h3>
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
      </div>

      {/* About Brief */}
      <section className="about-brief-section">
        <div className="container">
          <div className="heading-wrapper-brief">
            <span className="subheading-brief">Welcome to Love and Care</span>
            <h2 className="title-brief">Every Helping Hand Creates a Brighter Tomorrow</h2>

            <p className="paragraph-brief">
              At <i>Love and Care Foundation</i>, we believe in the power of small acts of kindness to create
              big change. Our journey began with a simple desire to reach out and support those who are often
              overlooked, including underprivileged children, the elderly, and individuals in need.
            </p>

            <p className="paragraph-brief">
              We are a team of passionate changemakers, working on a no-profit, no-loss basis to serve
              communities through education, healthcare, and humanitarian aid.
            </p>

            <p className="paragraph-brief">
              Our projects are designed to create lasting impact. From educational support for children to
              rehabilitation programs for the elderly and differently-abled, we work tirelessly to ensure that
              every individual we reach feels valued, supported, and inspired to grow.
            </p>

            <p className="paragraph-brief">
              Change begins with care and you can be a part of it. Join us as a volunteer, donor, or supporter,
              and help us write stories of hope, courage, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Projects */}
<section className="project-section">
  <div className="container">
    <h3 className="section-title">Our Projects</h3>

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-content">
        <h4>Visit to Apala Ghar Orphanage & Old Age Home</h4>
        <p>
          As our first step in spreading kindness, the Love and Care team visited
          Apala Ghar, a combined orphanage and old age home that houses around 40
          residents, including children and elderly individuals.
        </p>
        <Link to="/project" className="btn btn-primary">
          Read More
        </Link>
      </div>

      <div className="project-images rectangular-images">
        <div className="project-rect-image">
          <img src="/images/project/2.avif" alt="Apala Ghar visit 1" />
        </div>
        <div className="project-rect-image">
          <img src="/images/project/1.avif" alt="Apala Ghar visit 2" />
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card reverse">
      <div className="project-content">
        <h4>Visit Shri Chhatrapati Pratishthan's Nivasi Matimand Vidyalaya</h4>
        <p>
          Love and Care runs the Feed the Hungry Child program to provide food to
          children who do not get regular meals. We focus on areas where children
          face hunger due to poverty or lack of support.
        </p>
        <Link to="/project2" className="btn btn-primary">
          Read More
        </Link>
      </div>

      <div className="project-images rectangular-images">
        <div className="project-rect-image">
          <img src="/images/pro2/1.avif" alt="Feed the Hungry Child 1" />
        </div>
        <div className="project-rect-image">
          <img src="/images/pro2/4.avif" alt="Feed the Hungry Child 2" />
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="banner_bottom">
  <div className="container">
    <h3 className="tittle_w3_agileinfo">Our Events</h3>
    <div className="project-row">
      <div className="project-images event-rectangular-images">
        <div className="event-rect-image">
          <img src="/images/event/1.avif" alt="Opening Ceremony 1" />
        </div>
        <div className="event-rect-image">
          <img src="/images/event/2.avif" alt="Opening Ceremony 2" />
        </div>
      </div>

      <div className="project-text">
        <h4>Opening Ceremony – <i>8th March 2025</i></h4>
        <p>
          The Love and Care Foundation was officially launched on 8th March 2025, a date that coincides
          with International Women's Day, a celebration of compassion, strength, and unity.
        </p>
        <div className="ab_button project-btn-left">
          <Link className="btn btn-primary btn-lg" to="/event" role="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Us */}
      <section className="banner_bottom" id="about">
        <div className="container">
          <h3 className="tittle_w3_agileinfo">About us</h3>
          <div className="about-us-row">
            <div className="respon_info_img">
              <img src="/images/project/feed.avif" className="img-responsive" alt="Feed the Hungry" />
            </div>
            <div className="banner_bottom_left about-us-text">
              <h4>Feed the Hungry Child</h4>
              <p>
                Love and Care runs the Feed the Hungry Child program to provide food to children who do not get
                regular meals. We focus on areas where children face hunger due to poverty or lack of support.
              </p>
              <div className="ab_button project-btn-left">
                <Link className="btn btn-primary btn-lg hvr-underline-from-left" to="/about" role="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="banner_bottom proj" id="gallery">
  <div className="container">
    <h3 className="tittle_w3_agileinfo">Gallery</h3>

    <div className="inner_sec_info_w3layouts">
      <ul className="portfolio-categ filter">
        <li className={`port-filter all ${activeFilter === "all" ? "active" : ""}`}>
          <button type="button" onClick={() => setActiveFilter("all")}>
            All
          </button>
        </li>

        <li className={activeFilter === "project" ? "active" : ""}>
          <button type="button" onClick={() => setActiveFilter("project")}>
            Project
          </button>
        </li>

        <li className={activeFilter === "event" ? "active" : ""}>
          <button type="button" onClick={() => setActiveFilter("event")}>
            Event
          </button>
        </li>

        <li className={activeFilter === "children" ? "active" : ""}>
          <button type="button" onClick={() => setActiveFilter("children")}>
            Children
          </button>
        </li>
      </ul>

      <ul className="portfolio-area clearfix gallery-grid">
        {(activeFilter === "all" || activeFilter === "project") &&
          [10, 2, 3, 4, 7, 5, 18, 19, 16, 17, 20, 21].map((num) => (
            <li key={`proj-${num}`} className="portfolio-item2">
              <div className="gallery-card">
                <span className="image-block">
                  <img src={`/images/project/${num}.avif`} className="img-responsive" alt="Project" />
                </span>
              </div>
            </li>
          ))}

        {(activeFilter === "all" || activeFilter === "event") &&
          [1, 2, 3, 4].map((num) => (
            <li key={`evt-${num}`} className="portfolio-item2">
              <div className="gallery-card">
                <span className="image-block">
                  <img src={`/images/event/${num}.avif`} className="img-responsive" alt="Event" />
                </span>
              </div>
            </li>
          ))}

        {(activeFilter === "all" || activeFilter === "children") &&
          [9, 8, 6, 11].map((num) => (
            <li key={`child-${num}`} className="portfolio-item2">
              <div className="gallery-card">
                <span className="image-block">
                  <img src={`/images/project/${num}.avif`} className="img-responsive" alt="Children" />
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </div>
</section>

      {/* Events Coming Soon */}
      <section className="events-coming">
        <div className="container">
          <h3 className="tittle_w3_agileinfo cen">Our Events Coming Soon</h3>
          <div className="inner_sec_info_w3layouts">
            <div className="content">
              <div className="simply-countdown-custom" id="simply-countdown-custom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="banner_bottom" id="team">
        <div className="container">
          <h3 className="tittle_w3_agileinfo">Volunteers</h3>
          <div className="inner_sec_info_w3layouts">
            <div className="ser-first">
              {[
                { name: "Harsha Mahale", role: "President", cls: "t1" },
                { name: "Gaurav Bhagat", role: "Vice President", cls: "t2" },
                { name: "Shila More", role: "Treasurer", cls: "t4" },
                { name: "Pratiksha Walhekar", role: "Secretary", cls: "t3" },
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
            <Link className="btn btn-primary btn-lg hvr-underline-from-left" to="/team" role="button">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;