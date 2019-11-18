import * as Yup from "yup"

export default Yup.object().shape({
  name: Yup.string().required("Required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  howMany: Yup.number()
    .required("Required")
    .min(1),

  streetAddress: Yup.string().required("Required"),

  city: Yup.string().required("Required"),

  postalCode: Yup.number().required("Required"),

  state: Yup.string()
    .required("Required")
    .min(2)
    .max(3),

  country: Yup.string().required("Required"),
})
