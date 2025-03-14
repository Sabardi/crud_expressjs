const db = require('../db');

// Ambil semua data pelanggan
exports.getAllPelanggan = (req, res) => {
    db.query('SELECT * FROM pelanggan', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Ambil data pelanggan berdasarkan kode pelanggan
exports.getPelangganByKode = (req, res) => {
    const { kodePelanggan } = req.params;
    db.query('SELECT * FROM pelanggan WHERE kode_pelanggan = ?', [kodePelanggan], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Pelanggan tidak ditemukan' });
        }
        res.json(result[0]);
    });
};

// Tambah pelanggan baru
exports.createPelanggan = (req, res) => {
    const { kode_pelanggan, nama_pelanggan, alamat, no_hp, kode_server } = req.body;
    db.query('INSERT INTO pelanggan (kode_pelanggan, nama_pelanggan, alamat, no_hp, kode_server) VALUES (?, ?, ?, ?, ?)', 
        [kode_pelanggan, nama_pelanggan, alamat, no_hp, kode_server],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Pelanggan berhasil ditambahkan', kode_pelanggan: kode_pelanggan });
        }
    );
};

// Update pelanggan berdasarkan kode pelanggan
exports.updatePelanggan = (req, res) => {
    const { kodePelanggan } = req.params;
    const { nama_pelanggan, alamat, no_hp, kode_server } = req.body;
    db.query(
        'UPDATE pelanggan SET nama_pelanggan = ?, alamat = ?, no_hp = ?, kode_server = ? WHERE kode_pelanggan = ?', 
        [nama_pelanggan, alamat, no_hp, kode_server, kodePelanggan],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Pelanggan berhasil diperbarui' });
        }
    );
};

// Hapus pelanggan berdasarkan kode pelanggan
exports.deletePelanggan = (req, res) => {
    const { kodePelanggan } = req.params;
    db.query('DELETE FROM pelanggan WHERE kode_pelanggan = ?', [kodePelanggan], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Pelanggan berhasil dihapus' });
    });
};
