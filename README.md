## Isi Proyek :
- Backend: API server dengan Express.js
- Frontend: Antarmuka pengguna menggunakan React (Vite)
- Database di dalam folder dengan nama login.sql
- Screenshot tampilan ui pada folder screenshot tampilan

## Struktur Folder
<img width="333" height="776" alt="image" src="https://github.com/user-attachments/assets/c28da5d0-5dd4-464e-b849-6d8371fe4aaa" />

## Cara menjalankan program
1. git clone https://github.com/asrizalnova/login-auth
2. buka di vs code, buka terminal
3. npm install
4. cd backend, kemudian node index.js
5. buka 1 lagi terminal, cd frontend, kemudian npm run dev
6. buka http://localhost:5173/ di browser

## cek di postman
1. cd backend
2. node index.js
3. gunakan POST, lalu isi dengan http://localhost:4000/api/register untuk menambahkan user baru
4. {
  "username": "cek",
  "email": "cek@example.com",
  "password": "123"
}
5. cek login menggunakan POST, isi dengan http://localhost:4000/api/login
6. isikan :
  "username": "cek",
  "email": "cek@example.com",
  "password": "123"
}

maka akan bernilai true

## Login
1. email : asrizal@example.com
   username : asrizal
   password : 123456
2. email : tes@example.com
   username : tes
   password : 123
3. email : tes1@example.com
   username : tes1
   password : 123
