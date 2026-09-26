import React from 'react';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">मंदिर परिचय</h2>
        <div className="card">
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            प्राचीन शिव दुर्गा मंदिर शहर का एक प्रतिष्ठित और ऐतिहासिक धार्मिक स्थल है। यहाँ दशकों से श्रद्धालु भगवान शिव और माता दुर्गा की आराधना करते आ रहे हैं।
          </p>
          <p style={{ lineHeight: '1.8' }}>
            मंदिर की स्थापना 100 वर्ष पूर्व हुई थी और तब से यह आध्यात्मिकता और शांति का केंद्र बना हुआ है।
          </p>
        </div>
        
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3 className="text-primary">इतिहास</h3>
          <p className="text-secondary">किवदंती है कि यहाँ माता दुर्गा की मूर्ति स्वयंभू है।</p>
        </div>
      </div>
    </div>
  );
};

export default About;
