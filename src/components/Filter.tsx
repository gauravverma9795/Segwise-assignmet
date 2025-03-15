// src/components/Filter.tsx
import React, { useState } from 'react';
import './Filter.css';

interface FilterOption {
    label: string;
    value: string;
}

const dimensionOptions: FilterOption[] = [
    { label: 'Dimension 1', value: 'dimension1' },
    { label: 'Dimension 2', value: 'dimension2' },
];

const tagOptions: FilterOption[] = [
    { label: 'Character', value: 'character' },
    { label: 'Background', value: 'background' },
    { label: 'Elements', value: 'elements' },
    { label: 'CTA Position', value: 'cta_position' },
    { label: 'CTA Text', value: 'cta_text' },
];

const metricOptions: FilterOption[] = [
    { label: 'Spends', value: 'spends' },
    { label: 'Impressions', value: 'impressions' },
    { label: 'Clicks', value: 'clicks' },
];

const conditionOptions: FilterOption[] = [
    { label: 'is', value: 'is' },
    { label: 'is not', value: 'is_not' },
    { label: 'contains', value: 'contains' },
    { label: 'does not contain', value: 'does_not_contain' },
    { label: 'Lesser than', value: 'lesser_than' },
    { label: 'Greater than', value: 'greater_than' },
    { label: 'Equals', value: 'equals' },
];

const valueOptions: FilterOption[] = [
    { label: 'Pumpkin', value: 'pumpkin' },
    { label: 'Cat', value: 'cat' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Egg', value: 'egg' },
];

interface FilterProps {
    onFilter: (filters: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
    const [filters, setFilters] = useState<any[]>([{ category: '', tag: '', condition: '', value: '' }]);

    const addFilter = () => {
        setFilters([...filters, { category: '', tag: '', condition: '', value: '' }]);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const newFilters = [...filters];
        newFilters[index][field] = value;
        setFilters(newFilters);
    };

    const handleApply = () => {
        onFilter(filters);
    };

    return (
        <div className="filter-container">
            <button className="add-filter" onClick={addFilter}>+ Add Filter</button>
            {filters.map((filter, index) => (
                <div key={index} className="filter-row">
                    <select
                        value={filter.category}
                        onChange={(e) => handleChange(index, 'category', e.target.value)}
                        className="filter-select"
                    >
                        <option value="">Select Category</option>
                        <option value="dimension">Dimensions</option>
                        <option value="tag">Tags</option>
                        <option value="metric">Metrics</option>
                    </select>
                    {filter.category === 'tag' && (
                        <select
                            value={filter.tag}
                            onChange={(e) => handleChange(index, 'tag', e.target.value)}
                            className="filter-select"
                        >
                            <option value="">Select Tag</option>
                            {tagOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    )}
                    {filter.category === 'metric' && (
                        <select
                            value={filter.condition}
                            onChange={(e) => handleChange(index, 'condition', e.target.value)}
                            className="filter-select"
                        >
                            <option value="">Select Metric</option>
                            {metricOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    )}
                    <select
                        value={filter.condition}
                        onChange={(e) => handleChange(index, 'condition', e.target.value)}
                        className="filter-select"
                    >
                        <option value="">Select Condition</option>
                        {conditionOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Enter Value"
                        value={filter.value}
                        onChange={(e) => handleChange(index, 'value', e.target.value)}
                        className="filter-input"
                    />
                    <button className="remove-filter" onClick={() => setFilters(filters.filter((_, i) => i !== index))}>
                        🗑️
                    </button>
                </div>
            ))}
            <button className="apply-filters" onClick={handleApply}>Apply</button>
        </div>
    );
};

export default Filter;