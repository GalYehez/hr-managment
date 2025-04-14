import React, { useState } from "react";
import "./test3.css";

const BossDashboard = () => {
    // Example Data
    const [dailyNotes, setDailyNotes] = useState("");
    const [recruiters, setRecruiters] = useState([
        { id: 1, name: "John Doe", permissions: { addJob: true, addCandidate: true } },
        { id: 2, name: "Jane Smith", permissions: { addJob: false, addCandidate: true } },
    ]);

    const handleNoteChange = (e) => {
        setDailyNotes(e.target.value);
    };

    const togglePermission = (id, permission) => {
        setRecruiters((prev) =>
            prev.map((recruiter) =>
                recruiter.id === id
                    ? {
                          ...recruiter,
                          permissions: {
                              ...recruiter.permissions,
                              [permission]: !recruiter.permissions[permission],
                          },
                      }
                    : recruiter
            )
        );
    };

    return (
        <div className="boss-dashboard">
            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="dashboard-header">
                    <h1>Boss Dashboard</h1>
                    <button>Export Data</button>
                </div>

                {/* Daily Notes Section */}
                <div className="daily-notes">
                    <h2>Daily Notes</h2>
                    <textarea
                        placeholder="Write instructions for recruiters..."
                        value={dailyNotes}
                        onChange={handleNoteChange}
                    ></textarea>
                    <button onClick={() => alert("Daily Notes Saved!")}>Save Notes</button>
                </div>

                {/* Manage Recruiters Section */}
                <div className="manage-recruiters">
                    <h2>Manage Recruiters</h2>
                    {recruiters.map((recruiter) => (
                        <div key={recruiter.id} className="recruiter-row">
                            <span>{recruiter.name}</span>
                            <div className="permission-toggle">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={recruiter.permissions.addJob}
                                        onChange={() => togglePermission(recruiter.id, "addJob")}
                                    />
                                    Add Job
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={recruiter.permissions.addCandidate}
                                        onChange={() =>
                                            togglePermission(recruiter.id, "addCandidate")
                                        }
                                    />
                                    Add Candidate
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="right-sidebar">
                <h3>Quick Actions</h3>
                <button>Add Job</button>
                <button>Add Candidate</button>
                <button>View Standby List</button>
                <button>Notifications</button>
                <button>Daily Instructions</button>
            </div>
        </div>
    );
};

export default BossDashboard;
