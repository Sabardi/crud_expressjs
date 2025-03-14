# CRUD ExpressJS

Proyek ini adalah implementasi CRUD (Create, Read, Update, Delete) menggunakan ExpressJS dengan MySQL sebagai database.

## Persyaratan
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Instalasi

1. Clone repository ini:
   ```sh
   git clone https://github.com/Sabardi/crud_expressjs.git
   ```

2. Masuk ke direktori proyek:
   ```sh
   cd crud_expressjs
   ```

3. Install dependensi:
   ```sh
   npm install
   ```

4. Import file database `wifi.sql` ke dalam MySQL:
   - Gunakan MySQL CLI atau aplikasi seperti phpMyAdmin untuk mengimpor file `wifi.sql`.
   - Contoh menggunakan CLI:
     ```sh
     mysql -u your_username -p your_database < wifi.sql
     ```

## Menjalankan Aplikasi

1. Jalankan server dengan perintah:
   ```sh
   npm start
   ```
   atau jika menggunakan `nodemon`:
   ```sh
   npm run dev
   ```

2. Akses aplikasi melalui browser atau Postman:
   ```sh
   http://localhost:3000
   ```

## Endpoint API
| Method | Endpoint        | Deskripsi |
|--------|---------------|-----------|
| GET    | /servers        | Mendapatkan semua data |
| GET    | /servers/:id    | Mendapatkan data berdasarkan ID |
| POST   | /servers        | Menambahkan data baru |
| PUT    | /servers/:id    | Memperbarui data berdasarkan ID |
| DELETE | /servers/:id    | Menghapus data berdasarkan ID |
