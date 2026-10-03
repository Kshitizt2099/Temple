import { useContents } from '../hooks/useContents';

const Gallery = () => {
  const { images, loading, error } = useContents();

  return (
    <div className="section-alt" style={{ padding: '4rem 0', minHeight: '100vh' }}>
      <div className="container">
        <h2 className="text-primary" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
          फोटो गैलरी
        </h2>

        {loading && (
          <p style={{ textAlign: 'center', color: 'var(--color-primary)' }}>लोड हो रहा है...</p>
        )}

        {error && (
          <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>
        )}

        {!loading && !error && images.length === 0 && (
          <p style={{ textAlign: 'center' }}>कोई फोटो नहीं मिली।</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map((record) => (
            <div
              key={record.id}
              style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
            >
              <img
                src={record.content}
                alt={record.Position ?? `Temple Gallery ${record.id}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
