export default function Enroll() {
  return (
    <section id="enroll" className="enroll">
      <div className="wrap">
        <p className="eyebrow">Enroll</p>
        <h2>Reserve your seat in the next batch.</h2>
        <p>Tell us a bit about you and which format you'd prefer — we'll follow up with dates and payment details.</p>

        {/*
          This form posts to Formspree, a free service for handling form
          submissions on static sites with no backend required.
          To activate it: sign up at https://formspree.io (free tier),
          create a form, and replace YOUR_FORM_ID below with the ID they give you.
        */}
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
          </div>
          <div>
            <label htmlFor="mode">Preferred format</label>
            <select id="mode" name="mode" defaultValue="online">
              <option value="online">Online</option>
              <option value="offline">Offline (Hyderabad)</option>
              <option value="undecided">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Anything you'd like us to know</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit enrollment interest</button>
        </form>
      </div>
    </section>
  )
}
