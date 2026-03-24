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
      <style>{`
        .team-page-section {
          padding: 30px 0 60px;
          margin: 0;
          background: #f7f7f7;
        }

        .container-vln2 {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
        }

        .team-heading {
          margin: 0 0 30px 0;
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          color: #222;
        }

        .volunteer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin: 0;
          padding: 0;
        }

        .volunteer-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
        }

        .volunteer-img {
          width: 100%;
          height: 280px;
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          display: block;
        }

        .volunteer-name {
          color: #fff;
          text-align: center;
          padding: 16px 14px;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          min-height: 100px;
        }

        .volunteer-name span {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
        }

        @media (max-width: 991px) {
          .volunteer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .team-page-section {
            padding: 20px 0 40px;
          }

          .team-heading {
            font-size: 28px;
            margin-bottom: 20px;
          }

          .volunteer-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 10px;
          }

          .volunteer-img {
            height: 300px;
          }
        }
          @media (max-width: 768px) {
  .container-vln2 {
    padding: 115px 20px 40px;
  }

  .volunteer-card {
    width: 100%;
    max-width: 260px;
  }

  .volunteer-img {
    height: 260px;
  }

  .volunteer-name {
    font-size: 16px;
  }

  .volunteer-name span {
    font-size: 13px;
  }
}
      `}</style>
      <section className="team-page-section">
        <div className="container-vln2">
          <h2 className="heading">Our Expert Team</h2>

          <div className="volunteer-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="volunteer-card">
                <div className={`volunteer-img ${member.imgClass}`}></div>
                <div
                  className="volunteer-name"
                  style={{ backgroundColor: member.color }}
                >
                  {member.name}
                  <br />
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamPage;