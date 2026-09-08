# GenAI with Python — Training Site

A static React landing page for Smart Solutions Services' "Gen AI with Python"
training program — live weekend batches, both online and offline (Hyderabad).

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Before you deploy

1. **Contact form** — this site uses [Formspree](https://formspree.io) (free,
   no backend needed) to receive applications.
   - Sign up at formspree.io, create a form, and copy your form ID.
   - Open `src/components/Contact.jsx` and replace `YOUR_FORM_ID` in the
     `action="https://formspree.io/f/YOUR_FORM_ID"` line with your real ID.
2. **Instructor name** — open `src/components/About.jsx` and add the
   instructor's real name (currently just shows a bio, no name).
3. **Batch dates** — open `src/components/ClassModes.jsx` and add the actual
   start date once it's confirmed (currently says "Live weekend batch").
4. **Logo** — a simple placeholder "AI" mark is in `src/components/Logo.jsx`.
   Swap it for a real logo image whenever you have one.

## Deploy to Vercel (free)

**Option A — from GitHub (recommended):**
1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. You'll get a live URL in under a minute. Every future push to `main`
   auto-redeploys.

**Option B — straight from your terminal, no GitHub needed:**
```bash
npm run build
npx vercel --prod
```
Follow the prompts (first time it'll ask you to log in / create a free account).

## Project structure

```
src/
├── App.jsx              # assembles all sections
├── styles.css           # all styling (CSS variables at the top)
├── main.jsx             # entry point
└── components/
    ├── Logo.jsx          # simple placeholder logo mark
    ├── Header.jsx
    ├── Hero.jsx
    ├── TopicsStrip.jsx   # RAG / Agents / Fine-Tuning / LLMOps / Deployment
    ├── Banner.jsx        # tagline strip
    ├── StatsBar.jsx      # 100 hrs / 23 modules / 50% hands-on / capstone
    ├── About.jsx         # company + instructor
    ├── Curriculum.jsx    # 5 tracks, 23 modules
    ├── ClassModes.jsx    # online vs offline comparison
    ├── Contact.jsx       # address, phone, apply form
    └── Footer.jsx
```

## Next steps (when you're ready to expand)

- Swap the static curriculum/instructor content for data fetched from an API.
- Add a payments step (Razorpay/Stripe) to the enroll flow.
- Add a blog or student testimonials section.
