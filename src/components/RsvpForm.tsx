import React from "react"
import { Formik, Form, FormikValues } from "formik"
import RsvpField from "./RsvpField"

import rsvpSchema from "../utils/rsvpSchema"
import initialValues from "../utils/initialValues"

import "./RsvpForm.scss"

export default () => {
  const onSubmit = async (values: FormikValues) => {
    console.log(values)
    await fetch(
      "http://slowwly.robertomurray.co.uk/delay/1000/url/http://www.google.co.uk"
    )
  }

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={rsvpSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <RsvpField name="name" label="Name" />
            <RsvpField name="email" label="Email" />

            <RsvpField
              name="how_many"
              label="How many expected in your party?"
            />
            <div className="field__note">
              (you will have a chance to change this)
            </div>

            <RsvpField name="street_address" label="Street Address" />
            <RsvpField name="street_address2" label="Street Address 2" />
            <RsvpField name="city" label="City" />
            <RsvpField name="state" label="State / Province" />
            <RsvpField name="postal_code" label="Postal Code" />
            <RsvpField name="country" label="Country" />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
