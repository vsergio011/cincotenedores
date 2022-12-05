import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("El password es obligatorio"),
    newPassword: Yup.string().required("El password es obligatorio"),
    confirmNewPassword: Yup.string()
      .required("El password es obligatorio")
      .oneOf([Yup.ref("newPassword")],"El password no coincide"),
  });
}
