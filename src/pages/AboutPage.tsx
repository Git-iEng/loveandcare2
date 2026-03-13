import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="banner-inner-page"></div>
      <div className="gallery" id="gallery">
        <div className="container">
          <div className="banner_bottom read_page">
            <div className="container">
              <h3 className="tittle_w3_agileinfo">About Us</h3>
              <div className="inner_sec_info_w3layouts">
                <div className="read_img">
                  <p className="read_para">At <i>Love and Care Foundation</i>, we believe that compassion is the strongest force for change. Founded with a vision to uplift underprivileged individuals and communities, our mission is to create a world where no one feels abandoned or forgotten.</p>
                  <p className="read_para">What began as a simple desire to help has now evolved into a growing initiative where young and passionate individuals come together to serve the elderly, children, women, and differently-abled with dignity and care.</p>
                  <p className="read_para">From supporting orphanages and old-age homes to organizing food donation drives and awareness programs, <i>Love and Care Foundation</i> is committed to making a lasting impact.</p>
                </div>

                <div className="title-agileits"><h3>Our Objectives</h3></div>
                <div className="content-obj">
                  <p>Our organisation is guided by a wide range of objectives aimed at the holistic development of individuals and society:</p>
                  <ul className="objective-list-obj">
                    <li>To provide education, training, rehabilitation, and emotional care to all individuals in need.</li>
                    <li>To support underprivileged children by offering learning materials and basic necessities.</li>
                    <li>To promote health awareness and support individuals affected by AIDS, addiction, or natural disasters.</li>
                    <li>To empower women through skill development and rights awareness.</li>
                    <li>To run educational institutions offering professional and vocational courses.</li>
                    <li>To build homes and hostels for children, women, elderly, and differently-abled individuals.</li>
                    <li>To work alongside government and NGO partners for holistic development.</li>
                    <li>To support and rehabilitate individuals affected by natural calamities.</li>
                  </ul>
                </div>

                <section className="section">
                  <img src="/images/about/2.png" alt="Educational Empowerment" />
                  <div className="section-content">
                    <h2>Educational Empowerment</h2>
                    <p>To provide education, training, and rehabilitation support for underprivileged children, women, and differently-abled individuals. To distribute free educational materials to economically disadvantaged students.</p>
                  </div>
                </section>

                <section className="section">
                  <img src="/images/about/15.png" alt="Women Welfare" />
                  <div className="section-content">
                    <h2>Women and Girl Child Welfare</h2>
                    <p>The Love and Care organisation is deeply committed to the empowerment and protection of women and girl children. Through awareness programs, the organization educates communities on gender equality, women's rights, and safety.</p>
                  </div>
                </section>

                <section className="section">
                  <img src="/images/about/16.png" alt="Healthcare" />
                  <div className="section-content">
                    <h2>Healthcare and Medical Services</h2>
                    <p>The organization conducts regular health awareness programs and free medical check-up camps to promote early detection and prevention of common illnesses.</p>
                  </div>
                </section>

                <section className="section">
                  <img src="/images/about/14.png" alt="Social Welfare" />
                  <div className="section-content">
                    <h2>Social Welfare and Relief Activities</h2>
                    <p>The Love and Care Social Club is committed to social welfare and humanitarian relief, focusing on the care and protection of society's most vulnerable groups.</p>
                  </div>
                </section>

                <section className="section">
                  <img src="/images/about/dis.png" alt="Skill Development" />
                  <div className="section-content">
                    <h2>Skill Development and Livelihood Support</h2>
                    <p>Facilitate free or subsidized skill development programs in crafts, tailoring, computer literacy, agriculture, and other locally relevant trades to empower youth, women, and marginalized individuals.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
