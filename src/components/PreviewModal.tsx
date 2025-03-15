// src/components/PreviewModal.tsx
import React from 'react';

interface PreviewModalProps {
    data: any;
    onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ data, onClose }) => {
    return (
        <div className="modal">
            <button onClick={onClose}>Close</button>
            <h2>{data.creative_name}</h2>
            <p>{data.tags}</p>
            {/* Display more data as needed */}
        </div>
    );
};

export default PreviewModal;