// src/App.tsx
import React, { useState } from 'react';
import Filter from './components/Filter';
import DataTable from './components/DataTable';
import PreviewModal from './components/PreviewModal';
import { mockData } from './data/mockData';
import './styles/App.css';

const App: React.FC = () => {
    const [selectedData, setSelectedData] = useState<any>(null);
    const [filters, setFilters] = useState<any[]>([]);

    const handleRowClick = (data: any) => {
        setSelectedData(data);
    };

    const closeModal = () => {
        setSelectedData(null);
    };

    const handleFilter = (newFilters: any) => {
        setFilters(newFilters);
    };

    const filteredData = mockData.filter((data) => {
        return filters.every(filter => {
            const { tag, condition, value } = filter;
            if (!tag || !condition || !value) return true; // Skip if any field is empty
            // Implement filtering logic based on tag, condition, and value
            return true; // Replace with actual filtering logic
        });
    });

    return (
        <div className="app">
            <h1>Segwise Front End Test</h1>
            <Filter onFilter={handleFilter} />
            <DataTable onRowClick={handleRowClick} data={filteredData} />
            {selectedData && <PreviewModal data={selectedData} onClose={closeModal} />}
        </div>
    );
};

export default App;