import { useState, useEffect } from 'react';
import Head from 'next/head';
import Popup from '../components/Popup';
import AspirasiBox from '../components/AspirasiBox';
import CommentSection from '../components/CommentSection';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [background, setBackground] = useState('/assets/background1.png');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Handle page changes
    if (currentPage === 'aspirasi') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const showPage = (page, bgImage) => {
    if (page === 'home') {
      window.scrollTo(0, 0);
    }
    setBackground(bgImage);
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Website Aspirasi MPK SMAN 24 Bandung</title>
        <meta name="description" content="Website Aspirasi MPK SMAN 24 Bandung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div 
        className="background" 
        style={{ 
          backgroundImage: `url(${background})`,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      <div className="page-wrapper">
        {/* Home Page */}
        {currentPage === 'home' && (
          <div className="home">
            <div style={{ width: '100px', height: '100px', position: 'fixed', top: '20px', left: '20px' }}>
              <img
                src="/assets/Logo_SMAN 24.png"
                alt="Logo SMAN 24"
                className="logo logo-left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }} />
            </div>
            <div style={{ width: '100px', height: '100px', position: 'fixed', top: '20px', right: '20px' }}>
              <img
                src="/assets/Logo_MPK.png"
                alt="Logo MPK"
                className="logo logo-right"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }} />
            </div>
            
            <h1 className="header pressstart2p">MPK SMAN 24 BANDUNG</h1>

            <div className="button-container">
              <button 
                className="button home-button glow-red" 
                onClick={() => showPage('aspirasi', '/assets/background3.png')}
              >
                Aspirasi Berkala
              </button>
              <button 
                className="button home-button glow-red" 
                onClick={() => showPage('pohon', '/assets/background2.png')}
              >
                Pohon Aspirasi
              </button>
            </div>

            <div className="social-buttons">
              <div style={{ position: 'relative', width: '50px', height: '50px', cursor: 'pointer' }}>
                <img
                  src="/assets/instagram_logo.png"
                  alt="Instagram"
                  className="social-button"
                  onClick={() => window.open('https://www.instagram.com/mpk_sman24bdg?igsh=MWNlaTBmMXA0Z2E5MQ==', '_blank')}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }} />
              </div>
              <div style={{ position: 'relative', width: '50px', height: '50px', cursor: 'pointer' }}>
                <img
                  src="/assets/youtube_logo.png"
                  alt="YouTube"
                  className="social-button"
                  onClick={() => window.open('https://youtube.com/@mpksman24bandung65?si=uGyKN8wO5-luLouR', '_blank')}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }} />
              </div>
            </div>
          </div>
        )}

        {/* Pohon Aspirasi Page */}
        {currentPage === 'pohon' && (
          <div className="pohon">
            <div className="pohon-section">
              <h1 className="header pressstart2p">Pohon Aspirasi</h1>
            </div>
            
            <div className="pohon-section">
              <div className="pohon-text pressstart2p">
                Menyalurkan minat dan bakat bagi siswa melalui pengadaan lomba
              </div>
              <div className="pohon-image">
                <img
                  src="/assets/content_1.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Kurikulum</div>
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-image">
                <img
                  src="/assets/content_2.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Kurikulum</div>
              </div>
              <div className="pohon-text pressstart2p">
                Garda Madani SOLID
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-text pressstart2p">
                Pengoptimalan program P5
              </div>
              <div className="pohon-image">
                <img
                  src="/assets/content_3.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Kurikulum</div>
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-image">
                <img
                  src="/assets/content_4.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Sarpa</div>
              </div>
              <div className="pohon-text pressstart2p">
                Perluasan Area Kantin
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-text pressstart2p">
                Perbaikan Keramik Pada Tangga
              </div>
              <div className="pohon-image">
                <img
                  src="/assets/content_5.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Sarpa</div>
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-image">
                <img
                  src="/assets/content_6.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Sarpa</div>
              </div>
              <div className="pohon-text pressstart2p">
                Perluasan Area Hijau Sekolah
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-text pressstart2p">
                Pengadaan 3 Jenis Tempat Sampah
              </div>
              <div className="pohon-image">
                <img
                  src="/assets/content_7.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Sarpa</div>
              </div>
            </div>

            <div className="pohon-section">
              <div className="pohon-image">
                <img
                  src="/assets/content_8.png"
                  alt="Pohon Aspirasi Image"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="image-caption glow-white">Wakasek Kurikulum</div>
              </div>
              <div className="pohon-text pressstart2p">
                SOLID Literasi
              </div>
            </div>

            <div className="pohon-section">
              <div className="container">
                <button className="button page-button" onClick={() => showPage('home', '/assets/background1.png')}>
                  Kembali ke Home
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Aspirasi Page */}
        {currentPage === 'aspirasi' && (
          <div className="aspirasi">
            <h1 className="header shrikhand">Jangan ragu untuk MENYAMPAIKAN ASPIRASIMU!</h1>
            <div className="aspirasi-containers">
              <AspirasiBox 
                title="Kirim Aspirasi untuk MPK" 
                type="MPK" 
                color="#239627" 
              />
              <AspirasiBox 
                title="Kirim Aspirasi untuk Sekolah" 
                type="Sekolah" 
                color="#239627" 
              />
            </div>

            <div className="container">
              <button className="button page-button" onClick={() => showPage('home', '/assets/background1.png')}>
                Kembali ke Home
              </button>
            </div>
            
            <CommentSection />
          </div>
        )}

        {/* Popup */}
        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <h3>Silakan isi aspirasi terbaikmu untuk sekolah dan OSIS!</h3><br/>
          <p>
            Kami AKAN MENAMPUNG DAN MEMPERJUANGKAN setiap masukan yang membangun. 
            Jangan lupa untuk menuliskan aspirasi dengan bahasa yang baik dan benar, 
            serta tidak mengandung SARA, ujaran kebencian, atau kata-kata kasar.
          </p><br/>
          <p>
            Jika aspirasi yang dikirim mengandung SARA, ujaran kebencian, atau kata-kata kasar, 
            maka akan kami hapus atau kami perhalus agar tetap sesuai dengan norma dan etika!
          </p><br/>
          <p><strong>Mari bersama menciptakan lingkungan sekolah yang lebih baik!</strong></p><br/>
          <p>Terima kasih atas partisipasi ANDA!</p>
        </Popup>
      </div>
    </>
  );
}