<h1 align="center">Backend - Telegram</h1>
<p align="center">
  <a href="https://chatting-telegram.netlify.app/" target="_blank"><img src="https://github.com/chaerulmarwan20/telegram-app/raw/master/src/assets/screenshots/Telegram.png"  width="400" alt="Telegram" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Endpoint](#endpoint)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Link](#link)

## Introduction

Project makes a chat website like a telegram application that can be used for realtime personal chat. This application was built for a week with the main tools namely express, mysql, react, and socket.io.

## Features

- Realtime chatting using socket.io

- Realtime online/offline status using socket.io

- Realtime notification using socket.io

- JWT authentication

- Nodemailer for email verification

- Upload image using multer


## Built With

- [Expressjs]
- [MySql2]
- [Dotenv]
- [CORS]
- [Body Parser]
- [bcrypt]
- [jsonwebtoken]
- [nodemailer]
- [multer]
- [socket.io]

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

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)

## API Endpoint

|  METHOD  |                          API                          |
| :------: | :---------------------------------------------------: |
|  `POST`  |                     /api/register                     |
|  `GET`   |           /api/activate/:token/:email                 |
|  `GET`   |    /api/resetPassword/:token/:email/:password         |
|  `GET`   |                    /api/user/:id                      |
|  `GET`   |                     /api/profile                      |
|  `GET`   |                   /api/allUser/:id                    |
|  `GET`   |                    /api/searchUser                    |
|  `POST`  |                        api/login                      |
|  `POST`  |                   /api/forgotPassword                 |
|  `PATCH` |              /api/changePassword/:id                  |
|  `PATCH` |                       /api/user/:id                   |
|  `GET`   |                /api/chat/:idFrom/:idTo                |
|  `DELETE`|                      /api/chat/:id                    |

## Installation

1. Open your terminal or command prompt. Then, clone the repository `git clone https://github.com/nevalenaginda/backend-react-chat.git`
2. Create database named `chatan` and import `chatan.sql` from this repository
3. Go to directory `cd backend-react-chat`
4. Install all required packages `npm install`
5. Create a new file named `.env`
```
PORT = (The port you are using, for example 5000)
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = 
JWT_SECRET= (For example AsxW123)
FROM_EMAIL = (The email you used to send the verification message)
EMAIL_PASS = (Your email password, for example Password1234 #)
FRONTEND_PATH = (Your frontend address, for example http: // localhost: 3000)
```
6. Run server `npm run dev'

## API Documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/13256965/TzRLkqi4)

## Link

- :white_check_mark: [`Frontend Telegram`](https://github.com/nevalenaginda/frontend-react-chat/)
- :rocket: [`Production`](https://telegram-webku.netlify.app/)
