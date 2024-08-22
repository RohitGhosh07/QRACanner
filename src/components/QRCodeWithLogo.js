import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeWithLogo = ({ value, logoUrl }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const logo = new Image();
    logo.src = logoUrl;
    logo.onload = () => {
      const logoSize = canvas.width / 4;
      ctx.drawImage(logo, (canvas.width - logoSize) / 2, (canvas.height - logoSize) / 2, logoSize, logoSize);
    };
  }, [logoUrl]);

  return (
    <div className="flex justify-center">
      <div ref={canvasRef}>
        <QRCode value={value} size={256} />
      </div>
    </div>
  );
};

export default QRCodeWithLogo;
