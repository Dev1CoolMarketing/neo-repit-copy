# Dr. Neo Hair Restoration Website

## Overview

This is a modern, premium hair restoration website for Dr. Neo, built with a full-stack TypeScript architecture using React, Express, and PostgreSQL. The application features Apple-inspired design elements, advanced animations, and AI-powered image generation capabilities for medical visualizations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Animations**: Framer Motion for premium animations and transitions
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with custom configuration for multi-environment support

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Session-based with connect-pg-simple
- **Email Service**: SendGrid integration for contact form submissions
- **AI Integration**: OpenAI DALL-E 3 for medical image generation

### Design System
- **Primary Colors**: Yellow (#FAE151), Brown (#625046), Gold (#A87B23)
- **Typography**: Inter font family with premium Apple-style presentation
- **Components**: Custom shadcn/ui implementation with medical industry theming
- **Animations**: Custom CSS animations with intersection observer triggers

## Key Components

### Page Structure
- **Home Page**: Multi-section landing page with hero, treatments, testimonials, and contact
- **FUE Page**: Dedicated Follicular Unit Extraction treatment information
- **Treatments Page**: Comprehensive treatment catalog with detailed modals
- **VIP Membership**: Premium membership program presentation
- **Exosomes Page**: Apple Card Family-style treatment page for cellular regeneration therapy
- **Component Export**: Design system export tool for Figma integration

### Medical Treatment Sections
- FUE Hair Transplant (primary offering)
- Microneedling therapy
- Growth Factors (PRP) treatment
- Exosome Therapy (cellular regeneration)
- Follicular Hypersomes™ regenerative therapy
- VIP membership program

### Interactive Features
- Responsive image carousels for testimonials
- Smooth scroll navigation between sections
- Contact form with multi-step validation
- FAQ accordion with rich text content
- Mobile-optimized touch interactions

## Data Flow

### Client-Server Communication
1. React frontend makes API calls to Express backend
2. Form submissions processed through validated endpoints
3. Email notifications sent via SendGrid service
4. Database operations handled through Drizzle ORM
5. AI image generation triggered on-demand

### State Management
- React Query manages server state and caching
- Local component state for UI interactions
- Form state managed by React Hook Form with Zod validation
- Animation states controlled by Framer Motion

### Content Management
- Static content managed through TypeScript interfaces
- Medical images served from assets directory
- AI-generated medical visualizations cached and optimized
- Responsive image loading with lazy loading implementation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@sendgrid/mail**: Email service integration
- **@anthropic-ai/sdk**: AI service integration
- **@modelcontextprotocol/sdk**: Design tool integration
- **drizzle-orm**: Database ORM and migrations

### UI Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **framer-motion**: Animation library
- **@tailwindcss/vite**: CSS framework integration
- **class-variance-authority**: Component variant management

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Production build optimization
- **vite**: Development server and build tool

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server on port 5000
- **Production**: Node.js server with pre-built static assets
- **Database**: PostgreSQL with connection pooling
- **CDN**: Static assets served through Vite build process

### Build Process
1. Vite builds frontend assets to `dist/public`
2. esbuild bundles server code to `dist/index.js`
3. Database migrations run via `drizzle-kit push`
4. Environment variables loaded from `.env`

### Hosting Requirements
- Node.js 20+ runtime environment
- PostgreSQL 16+ database instance
- Environment variables for API keys and database connection
- Static file serving capability

## Changelog
- June 25, 2025. Initial setup
- January 8, 2025. Added comprehensive AI medical image generation system with OpenAI DALL-E 3 integration
- January 8, 2025. Created medical image generator component with Apple-style equipment photography capabilities
- January 8, 2025. Added API endpoints for generating individual medical images and complete hair restoration sets

## Recent Changes

### Design System Cohesiveness Audit & CTA Button Standardization (January 17, 2025)
- **Comprehensive font color audit**: Conducted full review of typography and color usage across all treatment pages
- **Standardized Learn More CTAs**: Updated all secondary buttons to use consistent Apple blue gradient (#007AFF to #0051D5)
- **Exosomes page enhancements**: Updated HYPERSOMES™ header to use vibrant gradient matching "Specialists are your partners" section
- **Unified button styling**: Applied Apple-quality polish with hover effects, shimmer animations, and proper shadows
- **Cross-page consistency**: Ensured microneedling, exosomes, and growth factors pages use cohesive CTA design
- **Design system documentation**: Created comprehensive audit report documenting font color patterns and recommendations

### Growth Factors Page Apple Blue Gradient Implementation (January 17, 2025)
- **Applied Apple-style blue gradient**: Replaced neon green accent color (#32d74b) with Apple-inspired sierra blue gradient from gradients page
- **Updated main headline**: Applied `apple-gradient-sierra-blue` class to "FACTORS" text for cohesive design
- **Refined interactive elements**: Updated step indicators, progress bars, and highlight text to use consistent blue gradient
- **Enhanced button styling**: Transformed button from flat green to elegant blue gradient with hover effects and shadow
- **Improved visual cohesion**: Aligned Growth Factors page with overall site design language while maintaining unique treatment identity
- **CSS gradient system**: Utilized existing Apple gradient system for consistent brand application across treatment pages

### Growth Factors Page Routing Fix
- **Fixed routing issue**: Updated App.tsx to use the correct growth-factors2.tsx page instead of the older growth-factors.tsx
- **Design consistency**: Now shows the modern Apple-style Growth Factors page with proper animations
- **User experience**: Resolved design mix-up that was showing outdated page version
- **Removed incorrect FUE FAQ**: Removed FueResults component that was displaying FUE questions instead of Growth Factors FAQ
- **Added proper components**: Ensured GrowthFactorsFAQ and SiteFooter are correctly included

## Previous Changes

### Medical Image Generation System
- **MedicalImageGenerator class**: Professional AI image generation for medical equipment
- **API endpoints**: `/api/generate-medical-images` and `/api/generate-hair-restoration-set`
- **Device types**: dermoscope, microscope, otoscope, consultation_tool, hair_analyzer
- **Apple-style aesthetics**: Clean white backgrounds, soft studio lighting, minimalist design
- **Quality optimization**: HD quality, photorealistic results, commercial photography standards

### User Interface
- **Image Generator Page**: Interactive UI at `/image-generator` route
- **Device selection**: Dropdown menus for equipment type, style, and size
- **Batch generation**: Generate individual images or complete equipment sets
- **Download capabilities**: Copy URLs and download high-resolution images
- **Progress indicators**: Loading states and success notifications

### Documentation
- **Comprehensive guide**: `docs/medical-image-generation-guide.md`
- **API usage examples**: cURL commands and integration patterns
- **Professional photography alternatives**: Mobile solutions and DIY setups
- **Stock photography resources**: Shutterstock, Getty Images, Adobe Stock
- **Cost comparison**: AI vs. stock photos vs. professional photography

## User Preferences

Preferred communication style: Simple, everyday language.

### Footer Design Updates (January 8, 2025)
- **Updated color palette**: Changed from green accents to main brand yellow (#FAE151)
- **Simplified structure**: Reduced from 4 columns to 3 columns with essential information only
- **More minimal design**: Smaller logo, reduced padding, cleaner typography
- **Human-centered approach**: Focused on key user needs - treatments, resources, and contact
- **Faster scrolling**: Reduced content density for better user experience

### Treatment Pages Implementation (January 15, 2025)
- **Apple Card Family Design System**: Created consistent design pattern across multiple treatment pages
- **Exosomes Page**: Purple/violet/rose gradient color scheme with cellular regeneration focus
- **Microneedling Page**: Blue/teal gradient color scheme with precision stimulation theme
- **Mobile-First Optimization**: Comprehensive responsive design with Apple's signature breakpoints
- **CSS Animations**: Pulse, float, and hover animations following Apple's design principles
- **Typography System**: Applied Apple's exact font sizing, line heights, and letter spacing
- **Interactive Elements**: Enhanced with Apple-style hover effects and transitions
- **Brand Integration**: Seamlessly adapted Apple's design language for different treatment modalities



