import React from 'react'

import Layout from '../../components/Layout'
import JobRoll from '../../components/JobRoll'

export default class JobIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>
            Join Accrual Research
          </h1>
          <p>
            Looking to join the disruption?
            Are you looking to apply your unique skillset to projects operating on the frontier of the blockchain industry?
            If so, come join the disruption. Look below to see available positions.
            If none of the opening below is a good fit, we still want to hear what makes you stand out - send an email to askus@accrualresearch.com with the subject “Career”.
          </p>
        </div>
        <section>
          <div>
            <div>
              <JobRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
