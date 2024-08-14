import React from 'react';
import contact_img from '../img/contact.jpg'
const ContactUs = ({ isDarkMode }) => {
  return (
    <div className={`container-fluid mt-5 py-5 ${isDarkMode ? 'text-white' : 'bg-white text-dark'}`}>
      <div className="row justify-content-center align-items-center">
        <div className="icon-div col-md-5 text-center">
          <div className="icon-container mb-4">
            <img src={contact_img} className='img-fluid rounded' alt="contact"/>
          </div>
        </div>
        <div className="col-md-5">
          <h3 className="mb-4 text-center">Get in Touch</h3>
          <form>
            <div className="form-group mb-3">
              <input type="text" className="form-control" placeholder="Name" required />
            </div>
            <div className="form-group mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group mb-3">
              <input type="text" className="form-control" placeholder="Subject" required />
            </div>
            <div className="form-group mb-4">
              <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success px-5">
                Send Email &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
