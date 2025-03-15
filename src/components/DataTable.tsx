// src/components/DataTable.tsx
import React from 'react';
import { mockData } from '../data/mockData';
import './DataTable.css'; // Import the CSS for styling

interface DataTableProps {
    onRowClick: (data: any) => void;
    data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ onRowClick, data }) => {
    return (
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Creative ID</th>
                        <th>Creative Name</th>
                        <th>Tags</th>
                        <th>Country</th>
                        <th>Ad Network</th>
                        <th>OS</th>
                        <th>Campaign</th>
                        <th>Ad Group</th>
                        <th>IPM</th>
                        <th>CTR</th>
                        <th>Spend</th>
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>CPM</th>
                        <th>Cost per Click</th>
                        <th>Cost per Install</th>
                        <th>Installs</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.creative_id} onClick={() => onRowClick(item)}>
                            <td>{item.creative_id}</td>
                            <td>{item.creative_name}</td>
                            <td>{item.tags}</td>
                            <td>{item.country}</td>
                            <td>{item.ad_network}</td>
                            <td>{item.os}</td>
                            <td>{item.campaign}</td>
                            <td>{item.ad_group}</td>
                            <td>{item.ipm}</td>
                            <td>{item.ctr}</td>
                            <td>{item.spend}</td>
                            <td>{item.impressions}</td>
                            <td>{item.clicks}</td>
                            <td>{item.cpm}</td>
                            <td>{item.cost_per_click}</td>
                            <td>{item.cost_per_install}</td>
                            <td>{item.installs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;