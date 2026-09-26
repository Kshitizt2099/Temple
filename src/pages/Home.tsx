import React from 'react';

const Home = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img 
            src="https://images.unsplash.com/photo-1548625361-26c79a83857b?auto=format&fit=crop&q=80&w=800" 
            alt="Temple" 
            style={{ width: '100%', borderRadius: '16px', maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
        <h2 className="section-title">स्वागत है</h2>
        <p className="text-center" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          प्राचीन शिव दुर्गा मंदिर में आपका हार्दिक स्वागत है। 
        </p>
        
        <div className="card">
          <h3 className="text-primary" style={{ textAlign: 'center' }}>दैनिक दर्शन</h3>
          <p className="text-center text-secondary">प्रातः 5:00 बजे से रात्रि 9:00 बजे तक</p>
        </div>
        
        <div className="card">
          <h3 className="text-primary" style={{ textAlign: 'center' }}>विशेष सूचना</h3>
          <p className="text-center text-secondary">आगामी महाशिवरात्रि के लिए विशेष आयोजन की तैयारी चल रही है।</p>
        </div>
        
        <div className="flex justify-center" style={{ marginTop: '2rem' }}>
          <button className="btn btn-primary">आज के दर्शन</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
