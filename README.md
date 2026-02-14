# Job Listing Platform

A modern job-listing web application built with Next.js and React, featuring authentication workflows, email verification, and dynamic job data integration.

---

## Overview

This application provides a streamlined experience for users to register, verify their accounts via OTP email verification, authenticate using Google OAuth, and browse available job listings retrieved from backend APIs.

The project focuses on frontend architecture, authentication flows, protected routing, and clean UI implementation using modern React patterns.

While the backend services were pre-existing, I implemented the complete frontend system, authentication handling, API integration, and component structure.

---

## Features

- User registration with OTP email verification
- Google OAuth authentication
- Secure login flow
- Protected routes for authenticated users
- Dynamic job listing retrieval from backend API
- Clean, reusable component architecture
- Responsive UI design

---

## Tech Stack

### Frontend
- Next.js
- React
- JavaScript / TypeScript

### Authentication
- Google OAuth
- Backend-provided OTP verification

### Backend
- External REST API (pre-existing service)

---

## Application Flow

1. User signs up  
2. Email OTP verification is required  
3. User logs in (Email or Google)  
4. Authenticated session is created  
5. Protected route grants access to job listings  
6. Jobs are fetched dynamically from backend endpoints  

---

## Project Structure

    .
    ├── app/
    ├── components/
    ├── pages/
    ├── services/
    ├── utils/
    ├── public/
    ├── package.json
    └── README.md

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/luhygenet/Joblication.git
cd job-listing-app
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Application runs at:

```
http://localhost:3000
```

---

## Author

Liya Daniel
Frontend Developer | Next.js | React | Authentication Systems
