import * as yup from 'yup';

export const loginValidation = yup.object({
  username: yup.string().trim().required('Username wajib diisi'),
  password: yup
    .string()
    .required('Password wajib diisi')
    .min(8, 'Password minimal 8 karakter'),
});
