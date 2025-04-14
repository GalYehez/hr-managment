import React, { useState } from "react";
import "./StandbyList.css"; // Import the CSS for styling

const StandbyList = ({ onBack }) => {
    const [standbyCandidates, setStandbyCandidates] = useState([
        { id: 1, firstName: "John", lastName: "Smith", jobType: "Driver", status: "Pending" },
        { id: 2, firstName: "Jane", lastName: "Doe", jobType: "Warehouse Worker", status: "Pending" },
        { id: 3, firstName: "Michael", lastName: "Brown", jobType: "Student", status: "Pending" },
    ]);

    const [selectedCandidate, setSelectedCandidate] = useState(null);

    const updateStatus = (id, newStatus) => {
        setStandbyCandidates(standbyCandidates.map(candidate => 
            candidate.id === id ? { ...candidate, status: newStatus } : candidate
        ));
    };

    const removeCandidate = (id) => {
        setStandbyCandidates(standbyCandidates.filter(candidate => candidate.id !== id));
    };

    const handleSelectCandidate = (candidate) => {
        setSelectedCandidate(candidate);
    };

    return (
        <div className="standby-list-container">
            <h2>Standby Candidates</h2>
            <div className="candidate-table">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standbyCandidates.map(candidate => (
                            <tr key={candidate.id} onClick={() => handleSelectCandidate(candidate)}>
                                <td>{candidate.firstName}</td>
                                <td>{candidate.lastName}</td>
                                <td>{candidate.jobType}</td>
                                <td>{candidate.status}</td>
                                <td>
                                    <button onClick={(e) => { e.stopPropagation(); updateStatus(candidate.id, "contact") }}>Contact</button>
                                    <button onClick={(e) => { e.stopPropagation(); removeCandidate(candidate.id) }}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedCandidate && (
                <div className="candidate-details">
                    <h3>Candidate Details</h3>
                    <p><strong>First Name:</strong> {selectedCandidate.firstName}</p>
                    <p><strong>Last Name:</strong> {selectedCandidate.lastName}</p>
                    <p><strong>Job Type:</strong> {selectedCandidate.jobType}</p>
                    <p><strong>Status:</strong> {selectedCandidate.status}</p>
                    <button onClick={() => setSelectedCandidate(null)} className="back-button">Back</button>
                </div>
            )}

            <div className="actions">
                <button onClick={onBack} className="back-button">Back to Dashboard</button>
            </div>
        </div>
    );
};

export default StandbyList;
