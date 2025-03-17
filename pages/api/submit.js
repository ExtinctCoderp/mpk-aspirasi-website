import connectToDatabase from '../../lib/mongodb';
import Aspirasi from '../../models/Aspirasi';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    const { aspirasi, tipe_aspirasi } = req.body;

    if (!aspirasi || !tipe_aspirasi) {
      return res.status(400).json({ 
        success: false, 
        error: "Aspirasi dan tipe aspirasi tidak boleh kosong." 
      });
    }

    const newAspirasi = new Aspirasi({ aspirasi, tipe_aspirasi });
    await newAspirasi.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error submitting aspirasi:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}