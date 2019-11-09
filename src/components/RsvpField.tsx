import React from "react"
import { Field, ErrorMessage } from "formik"

interface FieldProps {
  name: string
  label: string
}

export default ({ name, label }: FieldProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} />
      <ErrorMessage className="field__error" component="span" name={name} />
    </>
  )
}
