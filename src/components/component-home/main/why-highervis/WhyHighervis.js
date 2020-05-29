import React from "react"
import "./why-highervis.scss"
export default function WhyHighervis() {
  return (
    <div className="why-highervis">
      <div className="why-highervis__wrap">
        <div className="why-highervis__wrap__intro">
          <div className="why-highervis__wrap__intro__content">
            <h2 className="blue">Why HigherVisibility</h2>
            <p>
              <strong>
                Most agencies talk about improving your rankings or increasing
                your traffic. While we work to achieve those metrics as well, we
                focus on your ultimate goal... more conversions!
              </strong>
            </p>
            <p>
              We’re often asked, what makes you different than other digital
              marketing agencies? Our answer is simple: HigherVisibility’s focus
              is to drive customer acquisitions through laser-focused targeting
              combined with an optimal post-click experience. If the experience
              your prospects have after they click isn’t relevant, isn’t
              optimized, isn’t converting, then all the effort and investment
              was wasted. We understand that success in search doesn’t end with
              the click.
            </p>
          </div>
          <div className="large-6 ">
            <h3>We deliver results through:</h3>
            <dl>
              <dt>Strategies tailored around your specific business.</dt>
              <dd>
                Everyone's situation is different and there is no one size fits
                all solution.
              </dd>
              <dt>Laser focused targeting.</dt>
              <dd>
                We research how people search for your products or services and
                focus on delivering traffic that converts into paying customers.
              </dd>
              <dt>Transparent Reporting</dt>
              <dd>
                You have a right to know what we are doing, and we are proud of
                our work.
              </dd>
              <dt>White glove customer service.</dt>
              <dd>You deserve a company that cares about your success!</dd>
            </dl>
          </div>
          <div className="large-6 cell">
            {" "}
            <img
              src="https://www.highervisibility.com/wp-content/uploads/2018/01/why-highervisibility.webp"
              alt="Why HigherVisibility"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
