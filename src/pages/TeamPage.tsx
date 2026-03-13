import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  { name: "Durgeshan Naiker", role: "Volunteer", imgClass: "img-1", color: "#F2C94C" },
  { name: "Shila More", role: "Volunteer", imgClass: "img-2", color: "#EB5757" },
  { name: "Diksha Bhutekar", role: "President", imgClass: "img-10", color: "#2F80ED" },
  { name: "Harsha Mahale", role: "Vice President", imgClass: "img-3", color: "#219653" },
  { name: "Pratiksha Walhekar", role: "Secretary", imgClass: "img-4", color: "#2F80ED" },
  { name: "Mayur Mane", role: "Treasurer", imgClass: "img-5", color: "#219653" },
  { name: "Tejaswinee Chaudhari", role: "Volunteer", imgClass: "img-6", color: "#F2C94C" },
  { name: "Kushankur Das", role: "Volunteer", imgClass: "img-15", color: "#EB5757" },
  { name: "Nikhil Shirke", role: "Volunteer", imgClass: "img-8", color: "#2F80ED" },
  { name: "Gaurav Bhagat", role: "Volunteer", imgClass: "img-9", color: "#EB5757" },
];

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <div className="banner_top">
        <section className="about-brief-section">
          <div className="heading-wrapper-brief">
            <section className="volunteer-section">
              <div className="container-vln2">
                <p className="subheading">Team</p>
                <h2 className="heading">Our Expert Team</h2>
                <div className="volunteer-grid">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="volunteer-card">
                      <div className={`volunteer-img ${member.imgClass}`}></div>
                      <div className="volunteer-name" style={{ backgroundColor: member.color }}>
                        {member.name}<br /><span>{member.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Footer />
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
