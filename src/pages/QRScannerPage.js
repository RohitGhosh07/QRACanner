import React, { useState } from 'react';
import QRScanner from '../components/QRScanner';
import { useNavigate } from 'react-router-dom';

const QRScannerPage = () => {
    const [scanResult, setScanResult] = useState('');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            {/* <div className="w-full max-w-md p-6 bg-red-800 text-white rounded-2xl shadow-lg mb-10"> */}
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl mb-6">
                    <QRScanner onResult={setScanResult} />
                </div>
                {scanResult && (
                    <p className="text-center font-semibold">
                        Scanned Result: {scanResult}
                    </p>
                )}
            {/* </div> */}
            <button
                className="mt-4 bg-red-800 text-white py-3 px-6 rounded-full shadow-md w-2/3"
                onClick={() => navigate('/')}
            >
                Generate QR Code
            </button>
        </div>
    );
};

export default QRScannerPage;
