import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="top_header" id="home">
        <div className="info-section-contact">
          <div className="info-box-contact">
            <a href="https://maps.app.goo.gl/6Jw6cUZZxyX7CEN29" target="_blank" rel="noreferrer">
              <div className="icon-circle-contact bg-yellow-contact"><i className="fa fa-map-marker"></i></div>
              <h4><strong>Address:</strong></h4>
              <p>Navale IT Zone, Office No. 501, 5th Floor, A-Wing, Near Navale Bridge, Narhe, Pune - 411041.</p>
            </a>
          </div>
          <div className="info-box-contact">
            <a href="tel:+919168627258">
              <div className="icon-circle-contact bg-red-contact"><i className="fa fa-phone"></i></div>
              <h4><strong>Phone:</strong></h4>
              <p>+91 9168627258</p>
            </a>
          </div>
          <div className="info-box-contact">
            <a href="mailto:loveandcare.welfare@gmail.com">
              <div className="icon-circle-contact bg-blue-contact"><i className="fa fa-paper-plane"></i></div>
              <h4><strong>Email:</strong></h4>
              <p>loveandcare.welfare@gmail.com</p>
            </a>
          </div>
          <div className="info-box-contact">
            <a href="https://loveandcarefoundation.org/" target="_blank" rel="noreferrer">
              <div className="icon-circle-contact bg-green-contact"><i className="fa fa-globe"></i></div>
              <h4><strong>Website:</strong></h4>
              <p>loveandcarefoundation.org</p>
            </a>
          </div>
        </div>

        <div className="contact-wrapper-contact">
          <div className="form-section-contact">
            <form onSubmit={handleSubmit} id="contactForm">
              <h2>Contact Us</h2>
              <div className="form-group-contact">
                <label>Name</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="form-group-contact">
                <label>Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="form-group-contact">
                <label>Mobile</label>
                <input type="text" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
              </div>
              <div className="form-group-contact">
                <label>Subject</label>
                <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
              </div>
              <div className="form-group-contact">
                <label>Message</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={5}></textarea>
              </div>
              <button type="submit" className="submit-button-contact">SEND MESSAGE</button>
            </form>
            {submitted && <p style={{color: '#fff', textAlign: 'center', marginTop: '15px'}}>Thank you! Your message has been sent.</p>}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
