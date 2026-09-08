export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Contact &amp; apply</p>
          <h2>Reserve your seat in the next batch.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <div className="label">ADDRESS</div>
              <div className="value">Smart Solutions Services<br />Neredmet X Road, Hyderabad</div>
            </div>
            <div>
              <div className="label">PHONE</div>
              <a className="value" href="tel:+918790313846" style={{ display: 'block' }}>87903 13846</a>
              <a className="value" href="tel:+919848015587" style={{ display: 'block' }}>98480 15587</a>
            </div>
          </div>

          <div className="contact">
            {/*
              This form posts to Formspree, a free service for handling form
              submissions on static sites with no backend required.
              Sign up at https://formspree.io, create a form, and replace
              YOUR_FORM_ID below with the ID they give you.
            */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required />
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
              <button type="submit" className="btn btn-primary">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
