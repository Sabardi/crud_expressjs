const express = require('express');
const router = express.Router();
const pelangganController = require('../controllers/pelangganController');

// Rute untuk mendapatkan semua pelanggan
router.get('/pelanggan', pelangganController.getAllPelanggan);

// Rute untuk mendapatkan pelanggan berdasarkan kode pelanggan
router.get('/pelanggan/:kodePelanggan', pelangganController.getPelangganByKode);

// Rute untuk menambahkan pelanggan baru
router.post('/pelanggan', pelangganController.createPelanggan);

// Rute untuk memperbarui pelanggan berdasarkan kode pelanggan
router.put('/pelanggan/:kodePelanggan', pelangganController.updatePelanggan);

// Rute untuk menghapus pelanggan berdasarkan kode pelanggan
router.delete('/pelanggan/:kodePelanggan', pelangganController.deletePelanggan);

module.exports = router;
