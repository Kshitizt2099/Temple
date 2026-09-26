import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">संपर्क करें</h2>
        
        <div className="card">
          <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
              <Phone size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Phone & WhatsApp</h3>
              <p className="text-secondary">+91 98765 43210</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
              <Mail size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Email</h3>
              <p className="text-secondary">contact@shivdurgamandir.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Address</h3>
              <p className="text-secondary">प्राचीन शिव दुर्गा मंदिर, मुख्य मार्ग, शहर</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center" style={{ marginTop: '2rem' }}>
          <button className="btn btn-outline" style={{ width: '100%' }}>Send a Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
