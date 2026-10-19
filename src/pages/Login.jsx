import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from '../utils/loginValidation';
import { Link } from 'react-router';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      username: '',
      password: '',
    },
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = (data) => {
    if (data.username === 'admin' && data.password === 'admin123') {
      alert('Login Berhasil!');
    } else {
      alert('Login Gagal!');
    }
  };

  return (
    <div className="card">
      <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="username" className="mb-3">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            placeholder="Masukkan Username"
            {...register('username')}
          />
          {errors.username?.message && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            placeholder="Masukkan Password"
            {...register('password')}
          />
          {errors.password?.message && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-700 mt-5">
          Belum punya akun?{' '}
          <Link to="/register" className="underline hover:text-blue-600">
            Daftar disini!
          </Link>
        </p>
        <div className="flex justify-center">
          <button type="submit" className="btn">
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
}
