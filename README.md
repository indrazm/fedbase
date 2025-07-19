# FedBase - Open Source User Feedback Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)

FedBase is a modern, open-source user feedback platform designed to help product builders collect, organize, and act on user feedback efficiently. Built with a monorepo architecture using modern web technologies.

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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fedbase.git
   cd fedbase
   ```

2. **Install dependencies**
   ```bash
   # Using bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment files
   cp apps/api/.env.example apps/api/.env
   cp apps/app/.env.example apps/app/.env
   
   # Edit the files with your configuration
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   bun run db:generate
   
   # Run migrations
   bun run db:migrate
   
   # Seed the database (optional)
   bun run db:seed
   ```

5. **Start the development servers**
   ```bash
   # Start all services
   bun run dev
   
   # Or start individually
   bun run dev:api    # API server on http://localhost:3001
   bun run dev:app    # Frontend on http://localhost:3000
   ```

### Using Docker

```bash
# Start all services with Docker Compose
docker-compose -f docker-compose.dev.yml up
```

## 📖 Usage

### Embedding Feedback Widget

```html
<!-- Add to your website -->
<script src="https://your-fedbase-instance.com/widget.js"></script>
<script>
  FedBase.init({
    projectId: 'your-project-id',
    position: 'bottom-right',
    theme: 'light'
  });
</script>
```

### API Integration

```javascript
// Submit feedback via API
fetch('https://your-fedbase-instance.com/api/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    message: 'Great feature!',
    category: 'feature-request',
    userEmail: 'user@example.com'
  })
});
```

## 🛠️ Development

### Available Scripts

```bash
# Development
bun run dev          # Start all development servers
bun run dev:api      # Start API server only
bun run dev:app      # Start frontend only

# Building
bun run build        # Build all packages
bun run build:api    # Build API only
bun run build:app    # Build frontend only

# Database
bun run db:generate  # Generate Prisma client
bun run db:migrate   # Run database migrations
bun run db:seed      # Seed database with sample data
bun run db:studio    # Open Prisma Studio

# Testing
bun run test         # Run all tests
bun run test:api     # Test API only
bun run test:app     # Test frontend only

# Linting
bun run lint         # Lint all packages
bun run lint:fix     # Fix linting issues
```

### Project Structure

- **apps/api**: Express.js backend with TypeScript
- **apps/app**: Next.js frontend application
- **packages/database**: Prisma schema and database utilities
- **packages/ui**: Shared React components and design system
- **packages/logger**: Centralized logging utilities
- **packages/eslint-config**: Shared ESLint configurations
- **packages/typescript-config**: Shared TypeScript configurations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Prisma](https://www.prisma.io/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

- 📧 Email: support@fedbase.com
- 💬 Discord: [Join our community](https://discord.gg/fedbase)
- 📖 Documentation: [docs.fedbase.com](https://docs.fedbase.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/fedbase/issues)

---

**Made with ❤️ by the FedBase team**
