import * as Yup from "yup"

export default Yup.object().shape({
  name: Yup.string().required(),

  email: Yup.string()
    .email("Invalid email")
    .required(),

  howMany: Yup.number()
    .required()
    .min(1),

  streetAddress: Yup.string().required(),

  city: Yup.string().required(),

  postalCode: Yup.string().required(),

  state: Yup.string()
    .required()
    .min(2)
    .max(3),

  country: Yup.string().required(),
})
