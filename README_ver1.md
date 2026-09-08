# GenAI with Python — Training Site

A static React landing page for a GenAI + Python training program, offering
both online and offline (in-person) batches.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Before you deploy

1. **Enroll form** — this site uses [Formspree](https://formspree.io) (free,
   no backend needed) to receive enrollment submissions.
   - Sign up at formspree.io, create a form, and copy your form ID.
   - Open `src/components/Enroll.jsx` and replace `YOUR_FORM_ID` in the
     `action="https://formspree.io/f/YOUR_FORM_ID"` line with your real ID.
2. **Instructor bio** — open `src/components/Instructor.jsx` and replace the
   placeholder name and bio with the real instructor's details.
3. **Batch schedule** — open `src/components/ClassModes.jsx` and update the
   actual dates/timings for the online and offline tracks.

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
    ├── Header.jsx
    ├── Hero.jsx          # animated terminal demo
    ├── WhyCourse.jsx
    ├── Curriculum.jsx    # 7 course modules
    ├── ClassModes.jsx    # online vs offline comparison
    ├── Instructor.jsx
    ├── Enroll.jsx        # signup form
    └── Footer.jsx
```

## Next steps (when you're ready to expand)

- Swap the static curriculum/instructor content for data fetched from an API.
- Add a payments step (Razorpay/Stripe) to the enroll flow.
- Add a blog or student testimonials section.
