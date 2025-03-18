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
                title="Kirim Aspirasi untuk OSIS" 
                type="OSIS" 
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
          <div className="popup-header">
            <h3>! NOTICE !</h3>
          </div>
          <div className="popup-body">
            <h4>Email Anda akan terekam jika berhasil mengisi aspirasi.</h4><br></br>
            <p>
              <strong> 1. Isi Aspirasi Terbaikmu! </strong><br></br>
              Sampaikan aspirasi dan masukan yang membangun untuk sekolah dan OSIS.<br></br><br></br>
              <strong> 2. Kami Siap Mendengar & Menyampaikan </strong><br></br>
              Setiap aspirasi yang kami terima akan ditampung dan diperjuangkan. <br></br><br></br>
              <strong> 3. Peraturan Penulisan Aspirasi </strong><br></br>
              Penyampaian aspirasi dilarang menggunakan emoji apapun.
              Aspirasi harus ditulis dengan bahasa yang baik dan benar.
              Tidak boleh mengandung SARA, ujaran kebencian, atau kata-kata kasar. <br></br><br></br>
              <strong> 4. Penyaringan Aspirasi </strong><br></br>
              Aspirasi yang mengandung SARA, ujaran kebencian, atau kata-kata kasar akan dihapus atau diperhalus agar sesuai dengan norma dan etika. <br></br><br></br>
              Mari bersama menciptakan lingkungan sekolah yang lebih baik!
              Terima kasih atas partisipasi anda!
            </p>
          </div>
        </Popup>
      </div>
    </>
  );
}