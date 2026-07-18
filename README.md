## Blog App (React + Vite + Appwrite)

A full-stack blog web application built with **React (Vite)** on the frontend and **Appwrite** for:
- Authentication (sign up / login / logout)
- Post storage (create, read, update, delete)
- Featured image uploads (upload, preview, delete)

Public visitors can read **active** posts. Authenticated users can create posts and manage their own posts.

---

## Features

- **Authentication (Appwrite Account)**
  - Sign up
  - Login / Logout
  - Session restore on refresh

- **Posts (Appwrite Databases)**
  - Create posts (title, slug, content, featured image, status)
  - Edit posts
  - Delete posts (author-only)
  - List posts
  - View a single post
  - Only **active** posts are shown on the Home page

- **Featured Images (Appwrite Storage)**
  - Upload an image when creating/updating a post
  - Preview image on the post page and edit form
  - Delete old images when updating/deleting a post

- **Rich Text Content**
  - Content is authored using a rich text editor and rendered on the post page.

---

## Tech Stack

- **Frontend**: React, React Router (data router), Redux Toolkit, Tailwind CSS
- **Editor**: TinyMCE (@tinymce/tinymce-react)
- **Rendering**: html-react-parser
- **Backend/Services**: Appwrite (Account, Databases, Storage)

---

## Project Structure (high level)

- `src/appwrite/`
  - `auth.js` — Appwrite authentication service
  - `config.js` — Appwrite posts + storage service
- `src/Pages/`
  - `Home.jsx` — shows active posts
  - `Post.jsx` — shows one post; author can edit/delete
  - `AddPost.jsx` — create post
  - `EditPost.jsx` — update post
  - `AllPosts.jsx` — list posts for authenticated users
  - `Login.jsx`, `Signup.jsx` — authentication pages
- `src/components/`
  - Reusable UI (Header, Footer, PostCard, form fields, etc.)
  - `post-form/PostForm.jsx` — shared form for create + edit


## Routes

- `/` — Home (active posts)
- `/login` — Login (protected via `AuthLayout` with `authentication={false}`)
- `/signup` — Signup (protected via `AuthLayout` with `authentication={false}`)
- `/all-posts` — All posts for authenticated users
- `/add-post` — Create a post
- `/edit-post/:slug` — Edit a post
- `/post/:slug` — View a single post

---

## Notes

- Posts have a `status` field. Home filters for `status === "active"`.
- Delete/update actions are restricted to the post author (based on `userId`).
