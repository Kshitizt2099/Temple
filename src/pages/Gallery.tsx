import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1548625361-26c79a83857b?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400'
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
          {images.map((src, index) => (
            <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <img 
                src={src} 
                alt={`Temple ${index + 1}`} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
