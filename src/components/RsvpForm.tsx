import { API, graphqlOperation } from "aws-amplify"
import { Form, Formik, FormikValues } from "formik"
import React, { useState } from "react"
import { createRsvp } from "../graphql/mutations"
import initialValues from "../utils/initialValues"
import rsvpSchema from "../utils/rsvpSchema"
import RsvpField from "./RsvpField"
import "./RsvpForm.scss"

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isActive, setActive] = useState(false)

  const onSubmit = async (values: FormikValues) => {
    try {
      await API.graphql(graphqlOperation(createRsvp, { input: values }))
    } catch (e) {
      setError(true)
    }

    setSubmitted(true)
  }

  const renderButton = (isSubmitting: boolean) => {
    if (!submitted && !error) {
      return (
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      )
    } else if (!error) {
      return (
        <p className="thank-you">Got it! You're all set for now. Thank you!</p>
      )
    } else {
      return (
        <p className="error">Shoot, there was an error. Please let Joe know!</p>
      )
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={rsvpSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <button
            className={isActive ? "form-active" : ""}
            id="form-open"
            onClick={() => setActive(true)}
          >
            Request an RSVP
          </button>

          <div className={isActive ? "active" : "hidden"} id="rsvp-form">
            <header>
              <h1>
                Receive an RSVP in the mail
                <button id="form-close" onClick={() => setActive(false)}>
                  &times;
                </button>
              </h1>
            </header>

            <Form>
              <ul>
                <li>
                  <strong>Please do not book a hotel yet</strong>. We are
                  blocking out at least one hotel and we will give you all the
                  information you need with plenty of time to make plans.
                </li>

                <li>
                  Go ahead and book your flight, though! The airport you should
                  fly to is Puerto Vallarta, or, <strong>PRV</strong>. We will
                  be providing transportation service.
                </li>

                <li>
                  <strong>
                    We are not asking for gifts, <em>especially</em> from our
                    guests
                  </strong>
                  &nbsp;who are making such a huge commitment to celebrate with
                  us on our special day. We understand that some may wish to
                  give a gift in their absence; please&nbsp;
                  <a
                    href="mailto:joe@joesak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email Joe
                  </a>{" "}
                  if you wish to contribute toward our wedding and honeymoon
                  costs.
                </li>
                <li>
                  Venue space is limited, so please keep your party to two as is
                  possible.
                </li>
                <li>
                  No matter how you choose to celebrate with us, either in
                  person or from afar, we seriously cannot thank you enough.
                  We're going to do everything we can to make it an easy, fun,
                  and memorable experience for our guests!
                </li>
              </ul>

              <div className="form">
                <div className="input-group">
                  <RsvpField name="name" label="Name" />
                  <RsvpField name="email" label="Email" />
                </div>

                <RsvpField
                  name="howMany"
                  label="How many expected in your party?"
                  note="you will have a chance to change this"
                />

                <RsvpField name="streetAddress" label="Street Address" />
                <RsvpField name="streetAddress2" label="Street Address 2" />

                <div className="input-group">
                  <RsvpField name="city" label="City" />
                  <RsvpField name="state" label="State / Province" />
                  <RsvpField name="postalCode" label="Postal Code" />
                </div>

                <RsvpField name="country" label="Country" />

                {renderButton(isSubmitting)}
              </div>
            </Form>
          </div>
        </>
      )}
    </Formik>
  )
}
