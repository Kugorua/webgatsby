import React from "react"
import "./contact-content.scss"
export default function ContactContent() {
  return (
    <div className="contact-content">
      <div className="contact-content-wrap">
        <div className="contact-content__detail">
          <h2>Get in touch with us</h2>
          <p>
            Having worked with hundreds of companies from small businesses to
            Fortune 1000’s, we understand your pain points. Partner with an
            award winning digital marketing agency that has proven to deliver
            new customers.
          </p>
          <p>
            We’ve been helping businesses grow since 2009, let us do it for you.
          </p>
          <p>Contact us today!</p>
        </div>
        <div className="contact-info">
          <h2>Address</h2>
          <p>8000 Centerview Parkway</p>
          <p>Suite 203</p>
          <p>Memphis, TN 38018</p>
          <h2>Phone</h2>
          <p>888.598.4449</p>
          <p>901.672.7243</p>
          <p>FAX: 901-842-9340</p>
          <h2>Email</h2>
          <p>
            <a href="mailto:info@highervisibility.com">
              info@highervisibility.com
            </a>
          </p>
          <p className="hours">Monday – Friday, 8:00 am – 5:00 pm CST</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984205.3119342119!2d107.41381473003374!3d15.508511569529821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420dd4e1353a7b%3A0xe49cabb166747679!2zUXXhuqNuZyBOYW0sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1590902808586!5m2!1svi!2s"
          width={"100%"}
          height={1000}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          title="map"
        />
      </div>
    </div>
  )
}
