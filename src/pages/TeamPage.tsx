import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  { name: "Durgeshan Naiker", role: "Executive Director / Authorized Signatory", imgClass: "bobbysir", color: "#0ea9e6" },
  { name: "Harsha Mahale", role: "President", imgClass: "img-3", color: "#219653" },
  { name: "Gaurav Bhagat", role: "Vice President", imgClass: "img-9", color: "#EB5757" },
  { name: "Shila More", role: "Treasurer", imgClass: "img-2", color: "#F2C94C" },
  { name: "Pratiksha Walhekar", role: "Secretary", imgClass: "img-4", color: "#219653" },
  { name: "Kushankur Das", role: "Volunteer", imgClass: "img-15", color: "#EB5757" },
  { name: "Avishri Patil", role: "Volunteer", imgClass: "avishri", color: "#F2C94C" },
  { name: "Sakshi Patil", role: "Volunteer", imgClass: "sakshi", color: "#0ea9e6" },
  { name: "Aditi Pol", role: "Volunteer", imgClass: "aditi", color: "#F2C94C" },
  { name: "Paranav Chowgule", role: "Volunteer", imgClass: "pranav", color: "#0ea9e6" },
  { name: "Snehal Koli", role: "Volunteer", imgClass: "sakshi1", color: "#EB5757" },
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
              
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
