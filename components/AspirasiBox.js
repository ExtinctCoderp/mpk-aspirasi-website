import { useState } from 'react';

export default function AspirasiBox({ title, type, color }) {
  const [aspirasi, setAspirasi] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!aspirasi.trim()) {
      alert("Silakan masukkan aspirasi terlebih dahulu.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aspirasi, tipe_aspirasi: type })
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Aspirasi berhasil dikirim!");
        setAspirasi('');
      } else {
        alert(`Gagal mengirim aspirasi: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting aspirasi:", error);
      alert("Terjadi kesalahan saat mengirim aspirasi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="aspirasi-box">
      <h2 className="header pressstart2p" style={{ color: color || '#239627', fontSize: '2rem' }}>
        {title}
      </h2>
      <textarea
        value={aspirasi}
        onChange={(e) => setAspirasi(e.target.value)}
        placeholder={`Tulis aspirasi Anda untuk ${type}...`}
      />
      <button 
        className="button page-button" 
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Mengirim...' : `Kirim Aspirasi ${type}`}
      </button>
    </div>
  );
}