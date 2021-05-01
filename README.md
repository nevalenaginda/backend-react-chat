# Realtime & Chat

Project membuat website chating seperti aplikasi telegram yang dapat diguanakan untuk personal chating secara realtime.

### Deploy
Silahkan klik link berikut [ini](https://github.com/nevalenaginda/backend-react-chat)

### Modules
1. [Expressjs]
2. [MySql2]
3. [Dotenv]
4. [CORS]
5. [Body Parser]
6. [bcrypt]
7. [jsonwebtoken]
8. [nodemailer]
9. [multer]
10. [socket.io]

### Dev Modules
1. [Nodemon]

---

[Expressjs]: https://www.npmjs.com/package/express
[MySql2]: https://www.npmjs.com/package/mysql2
[Dotenv]: https://www.npmjs.com/package/dotenv
[CORS]: https://www.npmjs.com/package/cors
[Body Parser]: https://www.npmjs.com/package/body-parser
[Nodemon]: https://www.npmjs.com/package/nodemon
[bcrypt]: https://www.npmjs.com/package/bcrypt
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[socket.io]: https://www.npmjs.com/package/socket.io
[multer]: https://www.npmjs.com/package/multer
[nodemailer]: https://www.npmjs.com/package/nodemailer

### Tatacara

1. Silahkan download file ini.
2. Silahkan buka file ini dalam satu folder di text editor  seperti VS Code atau sejenisnya
3. Pastikan import database yang ada didalam file ```MySql``` sebagai database di MySql
4. Silahkan ```CREATE``` file ```.env``` lalu buka file tersebut
5. Patikan isi ``` PORT ``` yang akan kamu gunakan di file ``` .env ``` sesuaikan juga dengan yang ada di ``` app.listen ``` pada file ``` app.js ```
6. Silahkan ganti nama database, user dan password pada file ``` .env ``` sesuai dengan MySql kalian. Umumnya seperti berikut:
```
PORT = (Port yang kamu gunakan, misal 5000)
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = 
JWT_SECRET= (Misal AsxW123)
FROM_EMAIL = (Email yang kamu gunakan untuk mengirim pesan verifikasi)
EMAIL_PASS = (Password email kamu, misal Password1234#)
FRONTEND_PATH = (Alamat frontend kamu, misal http://localhost:3000)
```
  
Untuk pengguna OS windows biasanya bagian passowd di xampp itu kosong, tetapi pengguna Mac silahakn isi passwordnya.

### Penggunaan

Silahkan buka terminal pada VS Code dengan menekan tombol
```
CTRL + SHIFT + `
atau
CTRL + SHIFT + C
```
Kemudian ketikan text berikut
```
"npm install"
"npm run start" //untuk menjalankan nodemon cek di file package.json
```
guna untuk menjalankan project ini. Pastikan anda telah mengaktifkan XAMPP

---

### Dokumentasi Api
Kamu bisa melihat dokumentasi api [di sini] (https://documenter.getpostman.com/view/13256965/TzRLkqi4)

---

## Frontend
Silahkan klik [disini](https://github.com/nevalenaginda/frontend-react-chat)
