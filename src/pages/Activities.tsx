const Activities = () => {
  const events = [
    { title: 'महा आरती', time: 'प्रतिदिन शाम 7:00 बजे', desc: 'संध्या आरती में भाग लें और पुण्य कमाएं।' },
    { title: 'भजन संध्या', time: 'प्रत्येक मंगलवार और शनिवार', desc: 'स्थानीय मंडली द्वारा सुमधुर भजनों की प्रस्तुति।' },
    { title: 'अन्नदान', time: 'हर रविवार दोपहर 12:00 बजे', desc: 'गरीबों और जरूरतमंदों के लिए विशाल भंडारा।' }
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">गतिविधियाँ / कार्यक्रम</h2>
        
        {events.map((event, index) => (
          <div className="card" key={index}>
            <h3 className="text-primary">{event.title}</h3>
            <p style={{ fontWeight: '500', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>{event.time}</p>
            <p className="text-secondary">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
