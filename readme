🔧 PORSIT Website Design Brief (Farsi Platform – Conversational + Classic UI)
Summary for Product, Design & Development Teams

🎯 Project Overview
Design and develop the official platform for PORSIT, an AI-driven assistant for transport & delivery services. The website should combine classic UI (pages, forms) with a dynamic conversational interface, optimized for SEO, mobile-first performance, and service accessibility in Persian.

🧱 1. Design Language & UI Guidelines
1.1 Color & Typography
Base: #F9FAFB background, white cards

Primary Text: #111827, Secondary: #6B7280

Accents: Blue #3B82F6, Green #10B981, Red #EF4444, Purple #8B5CF6, Orange #F97316

Font: Vazirmatn or Inter (fallback)

Sizes:

H1: text-3xl font-bold

Headings: text-lg font-semibold

Body: text-sm text-gray-600

1.2 Layout & Components
3-column grid with gap-6

Cards: rounded-xl, shadow-sm

Pages: py-8, Cards: px-6 py-4

Sidebar width: 240px, sticky

🧠 2. UX Patterns & Behavior
Sidebar Navigation with icons, active state highlights

Quick Action Cards: hover effects, icons, labels

Chat Widget: fixed, active across all pages with contextual prompts

Activity Timeline: icons, color-coded statuses

Notifications: badge UI, bell in header

AI Copilot CTA: fixed button launching assistant modal

🌐 3. Website Structure & Sitemap
3.1 Main Menu Clusters
📦 خدمات کاربران: Track, Cost Estimation, Fast Delivery

🏬 کسب‌وکارها: Dashboards, APIs, Integration

🤝 همکاری: Driver/Company Sign-up, Dev Portal

📚 مرکز دانش: Blog, Dictionary, Regulations, Packaging

🧑‍💼 درباره ما: Mission, Team, Contact, App

3.2 Mobile UX
Hamburger menu with bottom CTA:
«👋 دستیار پُرسیت آماده است – گفت‌وگو را شروع کنید»

🤖 4. Conversational UX Framework
Chat triggers from every page & action

Memory-preserving chat (short session history)

Contextual prompts by page (e.g., tracking, customs, quote)

Sample Flows:

Tracking ➝ code input ➝ real-time response ➝ follow-up offer

Fast Delivery ➝ package query ➝ time & cost → booking CTA

Complaint ➝ input code ➝ confirm delivery issue ➝ register claim

📈 5. Landing Pages for SEO
Each page has:

SEO-optimized heading + intro

Simple input form (e.g., weight, origin)

Embedded chat widget with tailored prompt

FAQ + internal link suggestions

Sample URLs:

/track/tipax

/shipping-cost/tehran-erbil

/delivery/fast/tehran

/customs/import-laptops-iran

🔗 6. URL Structure (Human + SEO-Friendly)
Use English slugs for all versions

/track/[carrier]

/shipping-cost/[origin]-[destination]

/customs/[topic]

/compare/[carrier1]-vs-[carrier2]

⚙️ 7. Frontend & Backend Tech Stack
7.1 Frontend (React/Next.js)
TailwindCSS, mobile-first, lazy-load chat/forms

SEO with <Head>, dynamic OG/meta, schema tags

Skeleton loading, prefetching, optimized buttons

7.2 Backend
Express.js / FastAPI

API connection to logistics providers

Session tracking & memory

Admin panel for vendors, orders, logs

7.3 AI Assistant Engine
GPT-4 with custom memory/session handling

Intent detection + fallback messages

Structured output (e.g., JSON form for order submission)

🧾 8. Formless UX (Form in Chat)
Users provide:

Origin/Destination

Package Type & Weight

Priority

Chatbot Response → JSON Output

json
Copy
Edit
{
  "origin": "Tehran",
  "destination": "Erbil",
  "package_type": "Clothing",
  "weight_kg": 3,
  "priority": "High"
}
📂 9. Core Docs & File Architecture
bash
Copy
Edit
/docs
  ├─ sitemap-structure.md
  ├─ chatbot-conversations.md
  ├─ url-plan.json
  ├─ api-spec.yaml
  └─ seo-guidelines.md

/frontend
  ├─ pages/
  ├─ components/
  └─ chatbot-widget/

/backend
  ├─ services/
  ├─ chatbot-engine/
  └─ order-management/
📊 10. Bonus Tech Recommendations
Charts: Chart.js / Recharts

Time formatting: Day.js

Animations: CountUp.js

Dark mode: Tailwind dark: variant

Icons: Heroicons / Lucide

UI Library: shadcn/ui or Radix UI
