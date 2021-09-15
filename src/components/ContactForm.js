import React from 'react'
import { navigate } from 'gatsby-link'

import "./ContactForm.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const ContactThanks = () => (
  <section>
    <div>
      <div>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
      </div>
    </div>
  </section>
)

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <h1>Contact</h1>
            <form
              className="contactForm"
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div>
                <div>
                  <input
                    placeholder={'Name*'}
                    type={'text'}
                    name={'name'}
                    onChange={this.handleChange}
                    id={'name'}
                    required={true}
                  />
                </div>
              </div>
              <div>
                <div>
                  <input
                    placeholder={'Email*'}
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true}
                  />
                </div>
              </div>
              <div>
                <div>
                  <input
                    placeholder={'Subject*'}
                    name={'subject'}
                    onChange={this.handleChange}
                    id={'subject'}
                    required={true}
                  />
                </div>
              </div>
              <div>
                <div>
                  <textarea
                    placeholder={'Message*'}
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={true}
                    rows="5"
                  />
                </div>
              </div>
              <div>
                <button type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
