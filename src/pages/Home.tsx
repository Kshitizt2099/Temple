import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <img src="images/temple_bg.jpeg" alt="" height={'100%'} width={'100%'} />
        </div>
        <div className="container hero-content">
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>आस्था • सेवा • संस्कार</p>
          <h1 style={{ fontSize: '3.5rem', color: '#FFD700', textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)', marginBottom: '0.5rem', lineHeight: '1.2' }}>
            प्राचीन शिव दुर्गा मंदिर
          </h1>
          <p style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>लोनी, गाजियाबाद</p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '400px', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            भगवान शिव और माता दुर्गा की कृपा से आपके जीवन में सुख, शांति और समृद्धि आए
          </p>
          <button className="btn btn-red" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
            🙏 मंदिर के दर्शन करें
          </button>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="grid-4">
            <div className="feature-box">
              <h3 className="text-primary">मंदिर परिचय</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>मंदिर का इतिहास, महत्व और हमारी आस्था की कहानी।</p>
              <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '50px' }}>और पढ़ें →</button>
            </div>
            <div className="feature-box">
              <h3 className="text-primary">पूजा / आरती समय</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>दैनिक पूजा, आरती और विशेष अनुष्ठान का समय।</p>
              <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '50px' }}>समय देखें →</button>
            </div>
            <div className="feature-box">
              <h3 className="text-primary">आगामी कार्यक्रम</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>राम कथा, भंडारा, उत्सव और अन्य धार्मिक कार्यक्रम की जानकारी।</p>
              <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '50px' }}>कार्यक्रम देखें →</button>
            </div>
            <div className="feature-box">
              <h3 className="text-primary">दान / भेंट</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>मंदिर सेवा और विकास के लिए ऑनलाइन दान करें।</p>
              <button className="btn btn-red" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', borderRadius: '50px' }}>अब दान करें →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', }}>
            <div>
              <h2 className="text-primary" style={{ borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>हमारे मंदिर के बारे में</h2>
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                प्राचीन शिव दुर्गा मंदिर, लोनी, गाजियाबाद आस्था, भक्ति और संस्कारों का पावन स्थल है। यहाँ भगवान शिव और माता दुर्गा की प्रतिमाएँ श्रद्धालुओं के लिए विशेष आकर्षण का केंद्र हैं।
                यह मंदिर वर्षों से समाज में आध्यात्मिक ऊर्जा, सांस्कृतिक मूल्यों और धार्मिक एकता का प्रतीक बना हुआ है।
              </p>
              <button className="btn btn-red" style={{ borderRadius: '50px', padding: '0.6rem 1.5rem' }}>और जानें →</button>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', maxHeight: '500px', maxWidth: '500px' }}>
              <video
                src="/videos/templeVideo.mp4"
                controls
                autoPlay
                muted
                loop
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* <img src={`images/Ganesh.jpeg`} style={{ width: '100%', height: 'auto' }} alt="ganesh" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                <h3 className="text-primary" style={{ margin: 0 }}>📷 फोटो गैलरी</h3>
                <button onClick={() => navigate('/gallery')} className="btn btn-outline" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem', borderRadius: '50px' }}>सभी फोटो देखें →</button>
              </div>
              <div className="grid-2" style={{ gap: '0.5rem' }}>
                <img src={`images/Ganesh.jpeg`} style={{ width: '100%', height: '250px' }} alt="ganesh" />
                <img src="images/hanuman.jpeg" alt="Gallery" style={{ width: '100%', height: '250px', borderRadius: '8px' }} />
                <img src="images/shivParvati.jpeg" alt="Gallery" style={{ width: '100%', borderRadius: '8px', height: '250px' }} />
                <img src="images/Mata1.jpeg" alt="Gallery" style={{ width: '100%', borderRadius: '8px', height: '250px' }} />


              </div>
            </div>

            <div>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                <h3 className="text-primary" style={{ margin: 0 }}>📅 आगामी कार्यक्रम</h3>
                <button className="btn btn-outline" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem', borderRadius: '50px' }}>सभी देखें →</button>
              </div>
              <div style={{ background: 'var(--white)', padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <ul className="event-list">
                  <li className="event-item">
                    <div className="event-date">
                      <div style={{ fontSize: '1.2rem' }}>05</div>
                      <div style={{ fontSize: '0.8rem' }}>अक्टूबर</div>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-dark)' }}>शारदीय नवरात्रि प्रारंभ</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>विशेष पूजा एवं दुर्गा सप्तशती पाठ</p>
                    </div>
                  </li>
                  <li className="event-item">
                    <div className="event-date">
                      <div style={{ fontSize: '1.2rem' }}>11</div>
                      <div style={{ fontSize: '0.8rem' }}>अक्टूबर</div>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-dark)' }}>कन्या पूजन एवं भंडारा</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>सभी भक्तों का स्वागत है</p>
                    </div>
                  </li>
                  <li className="event-item">
                    <div className="event-date">
                      <div style={{ fontSize: '1.2rem' }}>02</div>
                      <div style={{ fontSize: '0.8rem' }}>नवंबर</div>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-dark)' }}>देव दीपावली विशेष आरती</h4>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>संध्या 7 बजे से</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="grid-3">
            <div>
              <h3 className="text-primary" style={{ marginBottom: '1rem' }}>📞 हमसे जुड़ें</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 <strong>पता:</strong> प्राचीन शिव दुर्गा मंदिर, लोनी, गाजियाबाद, उत्तर प्रदेश - 201102</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📞 <strong>फोन:</strong> +91 9312081077</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📧 <strong>ईमेल:</strong> shivdurgamandir.loni@gmail.com</p>
            </div>
            <div>
              <h3 className="text-primary" style={{ marginBottom: '1rem' }}>📍 मैप / स्थान</h3>
              <div style={{ background: '#eee', height: '120px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-light)' }}>Google Map Embed</span>
              </div>
            </div>
            <div>
              <h3 className="text-primary" style={{ marginBottom: '1rem' }}>✉️ जल्दी संपर्क करें</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="text" placeholder="आपका नाम" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  <input type="text" placeholder="मोबाइल नंबर" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                <textarea placeholder="संदेश" rows={2} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                <button type="button" className="btn btn-red" style={{ width: '100%', padding: '0.5rem' }}>भेजें</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--red)', color: 'white', padding: '1rem', textAlign: 'center', fontSize: '0.8rem' }}>
        <div className="container flex justify-between items-center">
          <p style={{ margin: 0 }}>© 2024 प्राचीन शिव दुर्गा मंदिर, लोनी, गाजियाबाद | सभी अधिकार सुरक्षित</p>
          <p style={{ margin: 0 }}>Designed with ♥ for Devotion</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
