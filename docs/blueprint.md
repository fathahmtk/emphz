# **App Name**: EMPHZ Corporate

## Core Features:

- Homepage Hero Section: Dynamic hero section showcasing EMPHZ's capabilities and value proposition, featuring high-quality images and a clear call to action. Vibe should feature '30+ Years of Engineering'.
- Industries Served Grid: Visually engaging grid displaying the industries EMPHZ serves (e.g., Construction, Energy, Public Works). Each industry should have a representative icon and brief description. Include a section for 'Industry Verticals'.
- Featured Products Gallery: Interactive gallery showcasing EMPHZ's modular infrastructure products (electrical enclosures, portable toilets, kiosks) with detailed product information and specifications. Include a section for 'Featured Projects'.
- About Us Section: Detailed company overview including EMPHZ's mission, vision, and history. Include employee profiles and team photos.
- Contact Form: User-friendly contact form for inquiries and quote requests, integrated with backend notification system for prompt response.
- Resource Library: A repository of downloadable PDFs for spec sheets and other resources.
- AI-Powered Lead Routing Tool: Use generative AI to analyze the 'Inquiry Type' (e.g., 'Oil & Gas' vs. 'Power') and routes the email to the specific industry expert. The LLM will act as a tool to route incoming emails to the proper departments.
- Dynamic Product Gallery: Dynamic product gallery page with categories for Electrical Enclosures, Kiosks, and Portable Toilets. Each product card should have a title, short description, and a 'Request Datasheet' button.
- RFQ Firestore Integration: Connect the 'Request for Quote' (RFQ) form on the contact page to a Firestore collection named 'leads' for storing lead information.
- Quote Basket: Implement a 'Quote Basket' state (using React Context) allowing users to add multiple GRP products to a single RFQ.
- Product Schema: Create a dynamic 'Product Schema' in Firestore with fields: sku, category, ip_rating, dimensions, material_specs, and download_url. Also include: ip_rating (number), authority_approval (string array), material_standard (e.g., BS EN 60529), and fire_retardancy_class.
- Partner Login: A 'Partner Login' using Firebase Auth that toggles between 'Public View' and 'Distributor Pricing'. Logged-in users can 'Request Commercial Details' or 'Download 3D CAD Files'.
- RFQ Form: A multi-step form that saves submissions to a 'leads' collection and triggers a 'New Inquiry' email.
- Technical Data Tables: Include high-performance Technical Data Tables for all product specs. Every product page must have a 'Standard Models' table with columns for Height, Width, Depth, and IP Rating.
- Dynamic Meta Tags: Implement 'Dynamic Meta Tags' for every product to ensure high SEO ranking for specific GRP keywords.
- Searchable Resource Hub: Set up a 'Searchable Resource Hub' for technical datasheets stored in Firebase Storage.
- Utility Filter Component: Create a 'Utility Filter' component that lets users see products approved by specific regional authorities.
- Certifications Grid: A grid of 12+ industry standards (NEMA, IP, ISO) that links to a 'Request Certification Copy' form.

## Style Guidelines:

- Primary color: Industrial blue (#2962FF) for a professional and trustworthy feel.
- Background color: Light gray (#F0F2F5) to provide a clean and modern backdrop.
- Accent color: Steel gray (#6C757D) to highlight important information and calls to action.
- Body and headline font: 'Inter', a grotesque-style sans-serif, is recommended.
- Use minimalist line icons in steel gray to represent industries and product features.
- Employ a grid-based layout with generous whitespace to ensure a clean and organized presentation.
- Subtle transitions and hover effects to enhance user engagement and provide visual feedback.
- Theme: 'Industrial Professional'. Colors: Slate (#0f172a), Steel (#64748b), and Alert Orange (#f97316).
- Professional Industrial Theme: Deep Charcoal (#1E293B), Safety Orange (#EA580C), and Clean White.
- Use Lucide-react for 'Corrosion Resistant', 'UV Stable', and 'Self-Extinguishing' icons.