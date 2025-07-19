# FedBase - Open Source User Feedback Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)

FedBase is a modern, open-source user feedback platform designed to help product builders collect, organize, and act on user feedback efficiently. Built with a monorepo architecture using modern web technologies.

> ⚠️ **Work in Progress**: This project is currently under active development. Features and APIs may change. We welcome contributions and feedback!

## ✨ Features

- **📝 Feedback Collection**: Easy-to-embed feedback widgets and forms
- **🎯 Categorization**: Organize feedback by features, bugs, and requests
- **👥 User Management**: Track feedback from registered and anonymous users
- **📊 Analytics Dashboard**: Visualize feedback trends and insights
- **🔗 Integration Ready**: API-first design for seamless integrations
- **🎨 Customizable**: White-label solution with custom branding
- **🚀 Real-time Updates**: Live feedback notifications and updates
- **📱 Responsive Design**: Works perfectly on desktop and mobile

## 🏗️ Architecture

FedBase is built as a monorepo with the following structure:

```
├── apps/
│   ├── api/          # Backend API (Node.js/Express)
│   └── app/          # Frontend Application (Next.js)
├── packages/
│   ├── database/     # Prisma database schema and client
│   ├── ui/           # Shared UI components
│   ├── logger/       # Logging utilities
│   └── config/       # Shared configurations
```

**Made with ❤️ by the FedBase team**
