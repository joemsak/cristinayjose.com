import React from "react"
import { Field, ErrorMessage } from "formik"

interface FieldProps {
  autocomplete?: string
  name: string
  label: string
  note?: string
}

export default ({ autocomplete = "", name, label, note }: FieldProps) => {
  const renderNote = () => {
    if (!!note) {
      return <div className="field__note">({note})</div>
    }
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {renderNote()}
      <Field
        id={name}
        name={name}
        autoComplete={`shipping ${autocomplete.length ? autocomplete : name}`}
      />
      <ErrorMessage className="field__error" component="span" name={name} />
    </div>
  )
}
