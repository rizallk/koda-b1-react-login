import { useRef, useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const passValue = passwordRef.current.value;

    if (username === 'admin' && passValue === 'admin123') {
      alert('Login Berhasil!');
    } else {
      alert('Login Gagal!');
    }
  };

  return (
    <div className="m-5 p-4 border border-black rounded-3xl flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold p-2 text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label htmlFor="username" className="mb-3">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="border border-black rounded-md py-3 px-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan Username"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            className="border border-black rounded-md py-3 px-4"
            placeholder="Masukkan Password"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black mt-4 text-white py-3 px-4 rounded-lg"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
}
