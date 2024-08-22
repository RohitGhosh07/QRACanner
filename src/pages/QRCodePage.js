import React from 'react';
import QRCodeWithLogo from '../components/QRCodeWithLogo';
import { useNavigate } from 'react-router-dom';

const QRCodePage = () => {
    const logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpS8LbUxH0plYUBXoIzIJbVg3ctujquNHXA&s';
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            {/* <h1 className="text-3xl font-extrabold text-red-800 mb-6">QR Code Generator</h1> */}
            <div className="w-full max-w-md p-6 bg-red-800 text-white rounded-2xl shadow-lg mb-10">

                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg mb-6">
                    <QRCodeWithLogo value="https://example.com" logoUrl={logoUrl} />
                </div>
                <p className="text-center font-semibold">
                    Scan this QR code with any QR code scanner to visit our website.
                </p>
            </div>
            <button
                className="mt-4 bg-red-800 text-white py-3 px-6 rounded-full shadow-md w-2/3"
                onClick={() => navigate('/scanner')}
            >
                Scan QR Code
            </button>
        </div>
    );
};

export default QRCodePage;
