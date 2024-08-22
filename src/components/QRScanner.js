import React, { useState, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const QRScanner = ({ onResult }) => {
  const webcamRef = React.useRef(null);

  const capture = useCallback(() => {
    const video = webcamRef.current.video;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
      
      if (qrCode) {
        onResult(qrCode.data);
      }
    }
  }, [onResult]);

  useEffect(() => {
    const interval = setInterval(capture, 1000); // Scan every second
    return () => clearInterval(interval);
  }, [capture]);

  return (
    <div className="relative w-full h-64 flex justify-center items-center rounded-lg overflow-hidden shadow-md">
      <Webcam
        ref={webcamRef}
        audio={false}
        className="absolute top-0 left-0 w-full h-full object-cover"
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "environment" // Use the back camera on mobile devices
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"></div>
      <div className="absolute border-4 border-blue-400 rounded-lg w-2/3 h-2/3"></div>
    </div>
  );
};

export default QRScanner;
