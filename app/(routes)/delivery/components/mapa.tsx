// MapComponent.tsx
import React from 'react';

const MapComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg"> {/* Aumenta aquí el valor de h-96 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d962.4377752685715!2d-74.20785073042934!3d-13.15213269327178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA5JzA3LjciUyA3NMKwMTInMjYuMCJX!5e1!3m2!1ses!2spe!4v1722753206412!5m2!1ses!2spe"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
