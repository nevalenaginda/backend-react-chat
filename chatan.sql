-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Bulan Mei 2021 pada 12.50
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatan2`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `activation`
--

CREATE TABLE `activation` (
  `id` int(11) NOT NULL,
  `email` varchar(64) NOT NULL,
  `token` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `activation`
--

INSERT INTO `activation` (`id`, `email`, `token`, `date`) VALUES
(12, 'developerbohdan@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6ImRldmVsb3BlcmJvaGRhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRISUlPSkR3T1BXL1dzWXdUNXFnRnBPUElDWi9NYVVsTUtzTkVqYmxVa1JBb1p0aWpaR1VlZSIsInVzZXJuYW1lIjoiZGV2ZWxvcGVyYm9oZGFuQGdtYWlsLmNvbSIsImltYWdlIjoiZGVmYXVsdC5wbmciLCJiaW8iOiItIiwicm9vbUlkIjoiUk9PTS1oZWxsbzY2MC0xNjE5NzI2NTMxMTA2In0sInRpbWVzdGFtcCI6IjIwMjEtMDQtMjlUMjA6MDI6MTEuMTI0WiIsImlhdCI6MTYxOTcyNjUzMX0.hpxlGbKkU1frySSI7tsastzQr0aLDPp6AK-sDI5cJ2Q', '2021-04-30 03:02:11');

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `targetId` int(11) NOT NULL,
  `message` text NOT NULL,
  `type` text NOT NULL,
  `time` text NOT NULL,
  `date` text NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`id`, `senderId`, `targetId`, `message`, `type`, `time`, `date`, `isActive`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Len ini toni', 'send', 'Selasa. 15.31', '18 Mei 2021', 1, '2021-05-18 15:31:07', '2021-05-18 15:31:07'),
(2, 1, 2, 'Len ini toni', 'receive', 'Selasa. 15.31', '18 Mei 2021', 1, '2021-05-18 15:31:07', '2021-05-18 15:31:07'),
(3, 1, 2, 'Iya ton ada apa?', 'send', 'Selasa. 15.31', '18 Mei 2021', 1, '2021-05-18 15:31:40', '2021-05-18 15:31:40'),
(4, 2, 1, 'Iya ton ada apa?', 'receive', 'Selasa. 15.31', '18 Mei 2021', 1, '2021-05-18 15:31:40', '2021-05-18 15:31:40'),
(7, 1, 7, 'dan', 'send', 'Selasa. 15.39', '18 Mei 2021', 1, '2021-05-18 15:39:55', '2021-05-18 15:39:55'),
(8, 7, 1, 'dan', 'receive', 'Selasa. 15.39', '18 Mei 2021', 1, '2021-05-18 15:39:55', '2021-05-18 15:39:55'),
(9, 1, 7, 'apa kabar?', 'send', 'Selasa. 15.41', '18 Mei 2021', 1, '2021-05-18 15:41:46', '2021-05-18 15:41:46'),
(10, 7, 1, 'apa kabar?', 'receive', 'Selasa. 15.41', '18 Mei 2021', 1, '2021-05-18 15:41:46', '2021-05-18 15:41:46'),
(11, 7, 1, 'ton', 'send', 'Selasa. 16.00', '18 Mei 2021', 1, '2021-05-18 16:00:03', '2021-05-18 16:00:03'),
(12, 1, 7, 'ton', 'receive', 'Selasa. 16.00', '18 Mei 2021', 1, '2021-05-18 16:00:03', '2021-05-18 16:00:03'),
(13, 2, 1, 'hmm..', 'send', 'Selasa. 16.00', '18 Mei 2021', 1, '2021-05-18 16:00:47', '2021-05-18 16:00:47'),
(14, 1, 2, 'hmm..', 'receive', 'Selasa. 16.00', '18 Mei 2021', 1, '2021-05-18 16:00:47', '2021-05-18 16:00:47'),
(15, 7, 1, 'apa ya', 'send', 'Selasa. 16.01', '18 Mei 2021', 1, '2021-05-18 16:01:23', '2021-05-18 16:01:23'),
(16, 1, 7, 'apa ya', 'receive', 'Selasa. 16.01', '18 Mei 2021', 1, '2021-05-18 16:01:23', '2021-05-18 16:01:23'),
(17, 1, 7, 'ok', 'send', 'Selasa. 16.03', '18 Mei 2021', 1, '2021-05-18 16:03:31', '2021-05-18 16:03:31'),
(18, 7, 1, 'ok', 'receive', 'Selasa. 16.03', '18 Mei 2021', 1, '2021-05-18 16:03:31', '2021-05-18 16:03:31');

-- --------------------------------------------------------

--
-- Struktur dari tabel `friendship`
--

CREATE TABLE `friendship` (
  `id` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `targetId` int(10) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `roomId` varchar(100) DEFAULT current_timestamp(),
  `name` varchar(64) NOT NULL,
  `username` varchar(25) NOT NULL DEFAULT 'User Name',
  `phone` varchar(25) NOT NULL DEFAULT '-',
  `image` varchar(255) NOT NULL DEFAULT 'default.png',
  `email` varchar(64) NOT NULL,
  `bio` text NOT NULL DEFAULT 'Hi there. I\'m using Telegram',
  `password` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 0,
  `isOnline` tinyint(1) NOT NULL DEFAULT 1,
  `socketId` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `roomId`, `name`, `username`, `phone`, `image`, `email`, `bio`, `password`, `isActive`, `isOnline`, `socketId`, `created_at`, `updated_at`) VALUES
(1, 'ROOM-nevalen701-1619619258980', 'Nevalen', '@nevalen123', '(+62) 857-698-6267', '1621327747545.jpg', 'nevalenaginda10@gmail.com', 'Full Stack Web Developer', '$2b$10$yunWIzknq8V8CugDtIjyPOzhIVxgao69WBJKh1AHoXWW1Zx.GWnZm', 1, 1, '-1tiAKH5J5FsCy8NAAAL', '2021-04-28 21:14:19', '2021-04-28 21:14:19'),
(2, 'ROOM-Nevalen Aginda Prasetyo996-1619630674094', 'Toni', '@toni', '(+62) 812-380-857', '1619898907740.jpg', 'nevalenagindaprasetyo@gmail.com', 'Hi there. I\'m using Telegram.', '$2b$10$L0eBF0h80YrJm8TZI3HqHOec72Pvn6JuDYEWQ1QRyAINzOgHUbVuq', 1, 1, 'z80kOOm2LZooebqMAAAB', '2021-04-29 00:24:34', '2021-04-29 00:24:34'),
(3, 'ROOM-Vanda871-1619722573749', 'Vanda', '@vanda', '-', '1619897802423.jpg', 'nevalenaginda1532@students.unila.ac.id', 'Hi there. I\'m using Telegram.', '$2b$10$n/WedytPqQpwkClKeFGIU..JVEvmhaMk4MeOHipZHegiL7vQO1qhi', 1, 1, NULL, '2021-04-30 01:56:13', '2021-04-30 01:56:13'),
(4, 'ROOM-Adi941-1619726103441', 'Adi', '@bondan', '-', 'adi.jpg', 'admin@bohdan-dev.com', 'Hi there. I\'m using Telegram.', '$2b$10$f3f4nea0mbFvcrO4twU2iOFTuIxqquWgzmkQwOjNdZxYURDxV6wHm', 1, 1, NULL, '2021-04-30 02:55:03', '2021-04-30 02:55:03'),
(5, 'ROOM-hello660-1619726531106', 'Hella', '@hella', '-', 'hella.jpg', 'developerbohdan@gmail.com', 'Hi there. I\'m using Telegram.', '$2b$10$HIIOJDwOPW/WsYwT5qgFpOPICZ/MaUlMKsNEjblUkRAoZtijZGUee', 0, 1, NULL, '2021-04-30 03:02:11', '2021-04-30 03:02:11'),
(7, 'ROOM-Bohdan172-1620009719661', 'Bohdan', '@bohdan673', '(+62) 857-628-6267', '1620009878337.jpeg', 'developerbohdan0@gmail.com', 'Full Stack Web Developer', '$2b$10$jXkSIydSa9enWkfgs2dMPeMbSckVO/G/VRjMBwTJFdZ.cldk7TiXK', 1, 1, 'bWeiDqnA0JXhSuqPAAAD', '2021-05-03 09:41:59', '2021-05-03 09:41:59');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `activation`
--
ALTER TABLE `activation`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `friendship`
--
ALTER TABLE `friendship`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `activation`
--
ALTER TABLE `activation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `friendship`
--
ALTER TABLE `friendship`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
