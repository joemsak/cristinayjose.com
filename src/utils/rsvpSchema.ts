import * as Yup from "yup"

export default Yup.object().shape({
  name: Yup.string().required("Required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  how_many: Yup.number()
    .required("Required")
    .min(1),

  street_address: Yup.string().required("Required"),

  city: Yup.string().required("Required"),

  postal_code: Yup.number().required("Required"),

  state: Yup.string()
    .required("Required")
    .min(2)
    .max(3),

  country: Yup.string().required("Required"),
})
