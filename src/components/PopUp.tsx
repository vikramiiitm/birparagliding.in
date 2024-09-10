import React, { useEffect, useState } from "react";
  
  function PopUp() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer); // Cleanup
    }, []);
  
    const closeModal = () => setShowModal(false);
    return (
        showModal && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                maxWidth: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <button style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#333',
                }} onClick={closeModal}>
                  &times;
                </button>
    
                {/* <div style={{ marginBottom: '15px' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'black' }}>Get Your Free Quotes</h2>
                </div> */}
    
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <a
                    href="https://wa.me/+919736333133?text=Book%20Paragliding%20Flight"
                    target="_blank"
                    style={{
                      backgroundColor: 'orange',
                      padding: '10px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'white',
                      borderRadius: '5px',
                      flex: 1,
                      marginRight: '10px'
                    }}
                  >
                    Book Paragliding Flight
                  </a>
                  <a
                    href="https://wa.me/+919736333133?text=Learn%20Paragliding"
                    target="_blank"
                    style={{
                      backgroundColor: 'orange',
                      padding: '10px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'white',
                      borderRadius: '5px',
                      flex: 1
                    }}
                  >
                    Learn Paragliding
                  </a>
                </div>
    
                <a
                  href="tel:+91 9736333133"
                  style={{
                    backgroundColor: 'blue',
                    padding: '10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    borderRadius: '5px',
                    marginTop: '10px',
                    width: '100%', // Added for full width
                    display: 'flex',
                    justifyContent: 'center', // Added for horizontal centering
                    alignItems: 'center'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '20px', height: '20px', marginRight: '5px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          )
    );
  }
  
  export default PopUp;
  