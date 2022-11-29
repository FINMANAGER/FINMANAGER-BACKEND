import yup from "yup";

export const userModel = yup.object({
  username: yup.string().required().email(),
  password: yup
    .string()
    .required("you need to provide the password")
    .min(4)
    .max(15),
});

export const spendingModel = yup.object({
  amount: yup.number().required("Need to enter  bending amount"),
  date: yup.date(),
  category: yup.string().required("select a category")
})
