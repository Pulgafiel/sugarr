import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-extrabold text-pink-600 mb-6">Sugarr</h1>
      <p className="text-lg text-pink-500 mb-10">Crea. Conecta. Gana.</p>
      <div className="flex space-x-4">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition">Registrarse</button>
        <button className="bg-white border border-pink-400 text-pink-500 hover:bg-pink-50 font-bold py-2 px-6 rounded-full shadow-lg transition">Iniciar sesión</button>
      </div>
    </main>
  );
}
