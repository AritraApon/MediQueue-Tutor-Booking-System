
<div align="center">

# 🎓 MediQueue | Tutor Booking Platform

### A Modern Tutor Booking & Learning Management Platform

Find skilled tutors, book sessions, manage learning schedules, and enhance educational experiences through a seamless and responsive web platform.

<p align="center">
  <a href="https://medi-queue-tutor-booking-system-six.vercel.app/"><strong>🌐 Live Website</strong></a> |
  <a href="https://github.com/AritraApon/MediQueue-Tutor-Booking-System"><strong>💻 Client Repository</strong></a> |
  <a href="https://github.com/AritraApon/medi-queue-server"><strong>⚙️ Server Repository</strong></a>
</p>

</div>

---

## 📌 Project Overview

**MediQueue | Tutor Booking Platform** is a modern full-stack tutor booking web application designed to help students discover experienced tutors and book learning sessions effortlessly.

The platform provides secure authentication, tutor management, booking systems, profile customization, protected routes, and a responsive user-friendly experience across all devices.

---

## ✨ Key Features

### 🔐 Authentication & Security
- Email & Password Authentication
- Secure Authentication using **Better Auth**
- Session Management
- Protected Routes
- Secure User Access

### 👨‍🏫 Tutor Management
- Browse Available Tutors
- Tutor Details Page
- Search Tutors by name
- Tutor Booking Functionality
- Booking History Management

### 👤 User Features
- Student & Tutor Role-Based Dashboard
- Update User Profile
- Manage Personal Information
- Personalized User Experience

### ⚙️ CRUD Operations
- Add New Data
- Update Existing Data
- Delete Functionality
- Read Dynamic Data from Database

### 🖼️ Media Upload
- Image Upload Support using **Cloudinary / ImgBB**

### 📱 Responsive Experience
- Fully Responsive Design
- Mobile Friendly UI
- Tablet & Desktop Optimized

---

## 🚀 Live Website

🔗 **Live Website**
https://medi-queue-tutor-booking-system-six.vercel.app/

---

## 💻 GitHub Repositories

### Client Side Repository
https://github.com/AritraApon/MediQueue-Tutor-Booking-System

### Server Side Repository
https://github.com/AritraApon/medi-queue-server

---

# 🛠️ Tech Stack

## Frontend Technologies

- **Next.js**
- **React.js**
- **Tailwind CSS**
- **HeroUI**
- **JavaScript**
- **Lucide React**
- **Responsive Design**

## Backend Technologies

- **Node.js**
- **Express.js**
- **MongoDB**
- **Better Auth**
- **JWT / Session Management**
- **REST API**
- **dotenv**
- **CORS**

---

# 📸 Project Screenshots


<table width="100%">
  <!-- Row 1 -->
  <tr>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/1fr7s6rt/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 1"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/prbHNZWG/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 2"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/21VHtRRM/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 3"/>
    </td>
  </tr>

  <!-- Row 2 -->
  <tr>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/RpGF10fQ/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 4"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/bgfXKDFj/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 5"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/gL3J8hmG/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 6"/>
    </td>
  </tr>

  <!-- Row 3 -->
  <tr>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/RGMF4wXL/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 7"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/Q3yrDn1F/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 8"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/hRyyRnzk/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 9"/>
    </td>
  </tr>

  <!-- Row 4 -->
  <tr>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/0WNQ6WR/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 10"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/KpSHvbCp/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 11"/>
    </td>
    <td width="33.33%" align="center">
      <img src="https://i.ibb.co.com/RGMF4wXL/image.png" style="width:100%; height:200px; object-fit:cover; border-radius:6px;" alt="Screenshot 12"/>
    </td>
  </tr>
</table>

---

# ⚙️ Installation & Setup

### Clone the repositories

#### Client Side

```bash
git clone https://github.com/AritraApon/MediQueue-Tutor-Booking-System.git
````

#### Server Side

```bash
git clone https://github.com/AritraApon/medi-queue-server.git
```

---

### Install Dependencies

```bash
npm install
```

---

### Run Development Server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file in the client side and add:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_IMGBB_KEY=your_imgbb_key
```

Create a `.env` file in the server side and add:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=your_auth_url
```

---

# 📁 Folder Structure

```bash
├── client
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── public
│   └── styles
│
├── server
│   ├── routes
│   ├── controllers
│   ├── middleware
│   ├── database
│   └── config
```

---

# 🔐 Security Features

✅ Protected Routes
✅ Authentication System
✅ Session Management
✅ Role-Based Authorization
✅ Secure API Communication

---

# 📱 Responsive Design

This project is fully responsive and optimized for:

* 📱 Mobile Devices
* 💻 Laptop Screens
* 🖥️ Desktop Devices
* 📲 Tablet Devices

---

# 🎯 Future Improvements

* Real-time Tutor Availability
* Online Video Session Integration
* Payment Gateway Integration
* Tutor Reviews & Ratings
* Notification System
* Advanced Search & Filters

---

# 👨‍💻 Developer

### Aritra Apon

Passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly web applications.

---

# ⭐ Support

If you like this project, don't forget to **star the repositories** ⭐

---

<div align="center">

### 🚀 Built with passion using Next.js, Express.js, MongoDB & Better Auth

</div>
```
