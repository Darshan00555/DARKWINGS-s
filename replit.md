# EduGuard - AI-Powered Anti-Plagiarism & Smart Exam Integrity System

## Overview

EduGuard is a modern, futuristic web application designed for the Smart IGNOU Hackathon 2025. Built by Team DARKWING, it provides AI-powered anti-plagiarism detection and smart exam integrity monitoring. The system features plagiarism checking for text and code, real-time AI proctoring with face detection, and blockchain-based tamper-proof record keeping. The application aims to combat high plagiarism rates in educational institutions, prevent online exam cheating, and provide affordable integrity monitoring solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with a custom dark theme featuring cyan/blue primary colors
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Design System**: Glassmorphism design with animated gradient backgrounds and floating particles

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development Setup**: TSX for development server with hot module replacement
- **Build Process**: ESBuild for production bundling
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Cloud Provider**: Neon Database for serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **ORM**: Drizzle ORM with Zod for type-safe database operations
- **Current Schema**: Basic user management with username/password authentication

### Authentication and Authorization
- **Authentication**: Username/password based authentication
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Validation**: Zod schemas for input validation and type safety

### External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for cloud PostgreSQL
- **UI Components**: Extensive Radix UI component library for accessible primitives
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Tools**: Vite for frontend bundling, ESBuild for backend compilation
- **Animation**: CSS-based animations with custom glassmorphism effects

### Key Features Implementation
- **Plagiarism Detection**: File upload interface with progress tracking and similarity reporting
- **AI Proctoring**: Webcam-based monitoring with face detection capabilities
- **Blockchain Integration**: Planned tamper-proof record storage system
- **Dashboard**: Admin interface with statistics, activity monitoring, and management tools
- **Responsive Design**: Mobile-first approach with adaptive navigation and layouts

The application follows a monorepo structure with shared TypeScript types and schemas, enabling type safety across the full stack. The architecture supports both development and production environments with appropriate tooling for each.