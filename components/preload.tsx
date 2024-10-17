// @/components/preload.tsx
import React from "react";

const Preload: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-500">
      <img
        src="Recurso 1.png" // Asegúrate de reemplazar esta ruta con la ruta correcta de tu logo
        alt="Cafetería Avendaño"
        className="animate-pulse"
      />
    </div>
  );
};

export default Preload;
