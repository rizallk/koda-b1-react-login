import * as yup from 'yup';

export const registerValidation = yup.object({
  fullname: yup.string().required('Nama lengkap wajib diisi'),
  email: yup.string().required('Email wajib diisi').email('Email harus valid'),
  username: yup.string().trim().required('Username wajib diisi'),
  password: yup
    .string()
    .required('Password wajib diisi')
    .min(8, 'Password minimal 8 karakter'),
});
