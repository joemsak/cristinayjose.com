import React, { useState } from "react"
import { Formik, Form, FormikValues } from "formik"
import { API, graphqlOperation } from "aws-amplify"
import { createRsvp } from "../graphql/mutations"

import RsvpField from "./RsvpField"

import rsvpSchema from "../utils/rsvpSchema"
import initialValues from "../utils/initialValues"

import "./RsvpForm.scss"

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const [isActive, setActive] = useState(false)

  const onSubmit = async (values: FormikValues) => {
    await API.graphql(graphqlOperation(createRsvp, { input: values }))
    setSubmitted(true)
  }

  const renderButton = (isSubmitting: boolean) => {
    if (!submitted) {
      return (
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      )
    } else {
      return (
        <p className="thank-you">Got it! You're all set for now. Thank you!</p>
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
          <a
            href="#"
            className={isActive ? "form-active" : ""}
            id="form-open"
            onClick={() => setActive(true)}
          >
            Request an RSVP
          </a>

          <Form className={isActive ? "active" : ""}>
            <h1>
              Receive an RSVP in the mail
              <a href="#" id="form-close" onClick={() => setActive(false)}>
                &times;
              </a>
            </h1>

            <ul>
              <li>
                Please note this will be an <strong>adults-only</strong>{" "}
                celebration.
              </li>

              <li>
                <strong>Please do not book a hotel yet</strong>. We are thinking
                of buying out a block and will include that information in the
                RSVP mailing.
              </li>

              <li>
                Go ahead and book your flight, though! The airport is Puerto
                Vallarta, or, <strong>PRV</strong>
              </li>

              <li>
                <strong>
                  We are not asking for gifts, <em>especially</em> from our
                  guests
                </strong>
                &nbsp;who are making such a huge commitment to celebrate with us
                on our special day. We understand that some may wish to give a
                gift in their absence; contributions toward our wedding and
                honeymoon may be sent to&nbsp;
                <a
                  href="https://paypal.me/joemsak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://paypal.me/joemsak
                </a>
                .
              </li>
              <li>
                No matter how you choose to celebrate with us, either in person
                or from afar, we seriously cannot thank you enough. We're going
                to do everything we can to make it an easy, fun, and memorable
                experience for our guests!
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
        </>
      )}
    </Formik>
  )
}
