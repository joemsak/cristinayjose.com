import { API, graphqlOperation } from "aws-amplify"
import { Form, Formik, FormikValues } from "formik"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import { createRsvp } from "../graphql/mutations"
import initialValues from "../utils/initialValues"
import rsvpSchema from "../utils/rsvpSchema"
import RsvpField from "./RsvpField"

import "./RsvpForm.scss"

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isActive, setActive] = useState(false)
  const { t } = useTranslation()

  const onSubmit = async (values: FormikValues) => {
    try {
      if (values.streetAddress2 === "") values.streetAddress2 = null
      await API.graphql(graphqlOperation(createRsvp, { input: values }))
    } catch (e) {
      setError(true)
    }

    if (values.streetAddress2 === null) values.streetAddress2 = ""
    setSubmitted(true)
  }

  const renderButton = (isSubmitting: boolean) => {
    if (!submitted && !error) {
      return (
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("form.sending") : t("form.send")}
        </button>
      )
    } else if (!error) {
      return <p className="thank-you">{t("form.thank_you")}</p>
    } else {
      return <p className="error">{t("form.error")}</p>
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={rsvpSchema}
      onSubmit={onSubmit}
      autocomplete="on"
    >
      {({ isSubmitting }) => (
        <>
          <button
            className={isActive ? "form-active" : ""}
            id="form-open"
            onClick={() => setActive(true)}
          >
            {t("form.request_btn")}
          </button>

          <div className={isActive ? "active" : "hidden"} id="rsvp-form">
            <header>
              <h1>
                {t("form.heading")}
                <button id="form-close" onClick={() => setActive(false)}>
                  &times;
                </button>
              </h1>
            </header>

            <Form>
              <div className="form">
                <div className="input-group">
                  <RsvpField name="name" label={t("form.name")} />
                  <RsvpField name="email" label={t("form.email")} />
                </div>

                <RsvpField
                  name="howMany"
                  label={t("form.how_many")}
                  note={t("form.how_many_note")}
                />

                <RsvpField
                  name="streetAddress"
                  autocomplete="street-address"
                  label={t("form.street_address")}
                />

                <RsvpField
                  name="streetAddress2"
                  autocomplete="street-address-2"
                  label={t("form.street_address_2")}
                />

                <div className="input-group">
                  <RsvpField
                    name="city"
                    label={t("form.city")}
                    autocomplete="locality"
                  />

                  <RsvpField
                    name="state"
                    label={t("form.state")}
                    autocomplete="region"
                  />

                  <RsvpField
                    name="postalCode"
                    label={t("form.postal_code")}
                    autocomplete="postal-code"
                  />
                </div>

                <RsvpField name="country" label={t("form.country")} />

                {renderButton(isSubmitting)}
              </div>
            </Form>
          </div>
        </>
      )}
    </Formik>
  )
}
