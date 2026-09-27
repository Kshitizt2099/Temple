const Gallery = () => {
  const images = [
    'images/Ganesh.jpeg',
    'images/hanuman.jpeg',
    'images/Mata1.jpeg',
    'images/khatushyam.jpeg',
    'images/shivParvati.jpeg',
    'images/RadhaKrishna.jpeg',
    'images/DurgaMata.jpeg',
    'images/KaliMata1.jpeg',
    'images/KaliMata2.jpeg',
  ];

  return (
    <div className="section-alt" style={{ padding: '4rem 0', minHeight: '100vh' }}>
      <div className="container">
        <h2 className="text-primary" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>फोटो गैलरी</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map((src, index) => (
            <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              {/* <img
                src={src}
                alt={`Temple Gallery ${index + 1}`}
                style={{ width: '100%', height: '300px', objectFit: 'contain', display: 'block', transition: 'transform 0.3s ease' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              /> */}
              <img src={src} style={{ width: '450px', height: '100%' }} alt={src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
