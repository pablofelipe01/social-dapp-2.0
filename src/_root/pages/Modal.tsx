import React from 'react';

interface ModalProps {
    url: string;
    isOpen: boolean;
    onClose: () => void;  // Function that returns nothing (void)
}

export const Modal: React.FC<ModalProps> = ({ url, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
                <button onClick={onClose} className="absolute top-2 right-2 text-lg font-bold">&times;</button>
                <iframe src={url} title="Plan Details" className="w-full h-full" style={{ height: '700px' }}></iframe>
            </div>
        </div>
    );
};
