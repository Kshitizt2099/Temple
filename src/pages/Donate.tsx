import React from 'react';

const Donate = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Donation / दान</h2>
        
        <div className="card text-center" style={{ padding: '2rem' }}>
          <h3 className="text-primary" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>मंदिर के विकास में सहयोग करें</h3>
          <p className="text-secondary" style={{ marginBottom: '2rem' }}>
            आपके द्वारा दिया गया दान मंदिर के रखरखाव, अन्नदान और अन्य धार्मिक कार्यों में उपयोग किया जाएगा।
          </p>
          
          <div style={{ background: 'var(--primary-light)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>Bank Details</h4>
            <p><strong>Bank:</strong> State Bank of India</p>
            <p><strong>A/C Name:</strong> Shiv Durga Mandir Trust</p>
            <p><strong>A/C No:</strong> XXXXXXXXXXX</p>
            <p><strong>IFSC:</strong> SBIN000XXXX</p>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
            Donate Now (UPI / Cards)
          </button>
          
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
            * Payment Gateway (Razorpay/Cashfree) will be integrated in the next phase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
