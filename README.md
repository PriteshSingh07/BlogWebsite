# 📝 MegaBlog

A full-featured blogging platform built with **React**, **Redux Toolkit** and **Appwrite**. Users can sign up, log in, write rich-text posts with a featured image, and manage their own content, all backed by Appwrite for authentication, database and file storage.

---

## 🌐 Live Demo

<div align="center">

<a href="https://your-deployed-url-here.com">
  <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Visit%20MegaBlog%20→-7C3AED?style=for-the-badge&labelColor=4C1D95" alt="Live Demo" height="60"/>
</a>

<br/><br/>

🔗 **[your-deployed-url-here.com](https://blog-website-2cpb7na30-solo-4f2e.vercel.app/)**

<br/>

![Status](https://img.shields.io/badge/status-live-22C55E?style=flat-square&logo=statuspage&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=flat-square&logo=appwrite&logoColor=white)

</div>

> 🔧 **To update:** replace `https://your-deployed-url-here.com` (in the button link and the text link above) and `your-deployed-url-here.com` (the visible text) with your actual deployed link from Vercel, Netlify or Appwrite Sites.

---

## ✨ Features

### 🔐 Authentication
- Sign up with name, email and password
- Log in / log out with secure Appwrite sessions
- Session persists on refresh (current user is re-fetched on app load)
- Auto-login after successful signup

### ✍️ Blog Management (CRUD)
- **Create** posts with a title, auto-generated slug, rich-text content and a featured image
- **Read** any post on its own page (`/post/:slug`)
- **Update** your posts, with the option to replace the featured image (old image is removed from storage)
- **Delete** your posts, which also deletes the featured image from storage
- Post status control: **active** or **inactive**

### 🧾 Rich Text Editor
- TinyMCE editor with formatting, lists, alignment, colours, links, images, tables and more
- Post content is rendered back safely as HTML on the post page

### 🛡️ Protected Routes
- `AuthLayout` wrapper guards pages based on login state
- Logged-out users are redirected to `/login` when opening protected pages
- Logged-in users are redirected away from `/login` and `/signup`

### 👤 Author-only Controls
- **Edit** and **Delete** buttons appear only for the author of a post

### ⚡ State Management
- Redux Toolkit stores the **auth state** and **posts list**, so pages load quickly without re-fetching on every navigation

### 🎨 UI
- Responsive layout styled with Tailwind CSS v4
- Reusable components: `Button`, `Input`, `Select`, `PostCard`, `Header`, `Footer`, `Container`, `Logo`

---

## 🧭 Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Home: grid of active posts | Public (login prompt if logged out) |
| `/login` | Login | Logged-out only |
| `/signup` | Signup | Logged-out only |
| `/all-posts` | All posts | Logged-in only |
| `/add-post` | Create a new post | Logged-in only |
| `/edit-post/:slug` | Edit an existing post | Logged-in only |
| `/post/:slug` | Read a single post | Public |

---

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 19, Vite |
| Routing | React Router DOM v7 |
| State | Redux Toolkit, React Redux |
| Forms | React Hook Form |
| Styling | Tailwind CSS v4 |
| Rich Text | TinyMCE (`@tinymce/tinymce-react`) |
| HTML Parsing | html-react-parser |
| Backend (BaaS) | Appwrite (Auth, Database, Storage) |
| Tooling | ESLint, Vite |

---

## 📁 Project Structure

```
12MegaBlog/
├── public/
├── src/
│   ├── appwrite/
│   │   ├── auth.js          # Signup, login, logout, get current user
│   │   └── config.js        # Posts CRUD + file upload/delete/view
│   ├── components/
│   │   ├── Header/          # Navbar + LogoutBtn
│   │   ├── Footer/
│   │   ├── PostForm/        # Create / edit post form
│   │   ├── AuthLayout.jsx   # Route protection
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── RTE.jsx          # TinyMCE rich text editor
│   │   ├── PostCard.jsx
│   │   └── ...              # Button, Input, Select, Container, Logo
│   ├── conf/conf.js         # Reads environment variables
│   ├── pages/               # Home, AllPosts, AddPost, EditPost, Post, Login, Signup
│   ├── store/               # authSlice, postSlice, store
│   ├── App.jsx
│   └── main.jsx             # Router setup
├── .env.sample
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- An [Appwrite](https://appwrite.io) project (Cloud or self-hosted)
- A [TinyMCE](https://www.tiny.cloud) API key (free)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd 12MegaBlog
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Appwrite

1. Create a **Project** and add a **Web platform** (use `localhost` for development and your deployed domain for production).
2. Create a **Database** and a **Collection** with these attributes:

   | Attribute | Type | Required |
   |---|---|---|
   | `title` | String | ✅ |
   | `content` | String (large, e.g. 10000+) | ✅ |
   | `featuredImage` | String | ✅ |
   | `status` | String | ✅ |
   | `userId` | String | ✅ |

3. Set the collection **permissions** so that users can create and read documents (and update/delete their own).
4. Create a **Storage Bucket** for featured images with matching permissions.

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_APP_APPWRITE_URL=https://<REGION>.cloud.appwrite.io/v1
VITE_APP_APPWRITE_PROJECT_ID=your_project_id
VITE_APP_APPWRITE_DATABASE_ID=your_database_id
VITE_APP_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APP_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINY_MCE_EDITOR_API_KEY=your_tinymce_api_key
```

> ⚠️ Never commit your real `.env` file. Only commit `.env.sample`.

### 5. Run the app
```bash
npm run dev
```
Open **http://localhost:3000**

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (port 3000) |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## ☁️ Deployment

1. Run `npm run build`.
2. Deploy the `dist/` folder to Vercel, Netlify or Appwrite Sites.
3. Add all the `VITE_...` environment variables in your hosting dashboard.
4. Add your deployed domain as a platform in your Appwrite project (otherwise API calls will be blocked by CORS).
5. Because this is a single-page app with client-side routing, add a rewrite rule so all routes serve `index.html` (on Netlify, a `_redirects` file with `/* /index.html 200`; Vercel needs a `vercel.json` rewrite).
6. Paste your live URL into the **Live Demo** section at the top of this README.

---

## 🔮 Future Improvements

- Public reading for logged-out visitors
- Search, categories and tags
- Comments and likes
- Pagination for the posts list
- User profile page

---

## 👨‍💻 Author

**Pritesh Singh**
GitHub: [@PriteshSingh07](https://github.com/PriteshSingh07)

---

⭐ If you found this project useful, consider giving it a star!
