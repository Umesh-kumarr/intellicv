# IntelliCV - AI-Powered Resume Builder

<div align="center">
  <img src="public/3d-cv-resume-icon_165488-4908-removebg-preview.png" alt="IntelliCV Logo" width="200" height="200">
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.1-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-11.6.1-orange.svg)](https://firebase.google.com/)
  [![Clerk](https://img.shields.io/badge/Clerk-Auth-green.svg)](https://clerk.com/)
</div>

## 🚀 Overview

IntelliCV is a modern, AI-powered resume builder that helps you create professional, ATS-friendly resumes with intelligent content generation. Built with React and powered by Google's Generative AI, it offers a seamless experience for crafting compelling resumes that stand out in today's competitive job market.

## ✨ Key Features

### 🤖 AI-Powered Content Generation
- **Smart Summaries**: Generate professional summaries using Google's Generative AI
- **Experience Descriptions**: AI-assisted content for work experience sections
- **ATS Optimization**: Ensure your resume passes Applicant Tracking Systems
- **Content Enhancement**: Improve existing content with AI suggestions

### 🎨 Modern User Interface
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Preview**: See changes instantly as you edit
- **Professional Templates**: Multiple resume layouts to choose from

### 🔐 Secure & Reliable
- **Clerk Authentication**: Secure user authentication and management
- **Firebase Backend**: Reliable data storage and synchronization
- **Protected Routes**: Secure access to user-specific content
- **Data Privacy**: Your information stays private and secure

### 📄 Resume Management
- **Multiple Resumes**: Create and manage multiple resume versions
- **Export Options**: Download resumes in PDF format
- **Rich Text Editor**: Advanced formatting capabilities
- **Section Management**: Organize education, experience, skills, and more

### 🛠️ Developer Experience
- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS
- **Component Library**: Shadcn/ui components for consistent design
- **Type Safety**: JavaScript with proper linting and formatting
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend & Services
- **Firebase** - Database and authentication
- **Clerk** - User authentication and management
- **Google Generative AI** - AI content generation
- **Axios** - HTTP client for API calls

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Firebase account
- Clerk account
- Google AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/intellicv.git
   cd intellicv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage Guide

### Creating Your First Resume

1. **Sign Up/Login**: Create an account or sign in using Clerk authentication
2. **Dashboard**: Access your dashboard to manage resumes
3. **Create New**: Click "Add Resume" to start a new resume
4. **Fill Details**: Complete personal information, experience, education, and skills
5. **AI Enhancement**: Use AI features to improve your content
6. **Preview**: Review your resume in real-time
7. **Export**: Download your finished resume as PDF

### Features Walkthrough

- **Personal Details**: Add your contact information and professional summary
- **Experience**: List work history with AI-generated descriptions
- **Education**: Include academic background and certifications
- **Skills**: Highlight technical and soft skills
- **Theme Customization**: Choose colors and styling
- **Dark Mode**: Toggle between light and dark themes

## 🏗️ Project Structure

```
intellicv/
├── public/                 # Static assets
├── src/
│   ├── auth/              # Authentication components
│   ├── components/        # Reusable UI components
│   │   ├── custom/       # Custom components
│   │   └── ui/           # Shadcn/ui components
│   ├── context/          # React contexts
│   ├── dashboard/        # Dashboard and resume management
│   ├── home/             # Landing page
│   ├── my-resume/        # Resume viewing
│   ├── utils/            # Utility functions
│   └── main.jsx          # App entry point
├── service/              # AI and external services
└── package.json          # Dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Rushikesh** - A passionate front-end developer specializing in React.js and modern web technologies. I build user-friendly applications that solve real-world problems.

### Connect With Me
- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Clerk](https://clerk.com/) for authentication services
- [Google Generative AI](https://ai.google.dev/) for AI capabilities
- [Firebase](https://firebase.google.com/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact me through my portfolio
- Check the documentation for common solutions

---

<div align="center">
  Made with ❤️ by Rushikesh
</div>
