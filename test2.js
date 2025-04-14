import React, { useState } from "react";
import "./test2.css";

const CandidateProfile = () => {
    const [showEmployeeForm, setShowEmployeeForm] = useState(false);

    const candidate = {
        name: "John Doe",
        profilePicture: "/profile-pic.jpg", // Replace with actual URL
        email: "john.doe@example.com",
        phone: "+123456789",
        skills: ["JavaScript", "React", "Node.js", "MongoDB"],
        experience: "5 years",
        jobHistory: [
            { title: "Frontend Developer", company: "ABC Corp", duration: "2 years" },
            { title: "Fullstack Developer", company: "XYZ Ltd", duration: "3 years" },
        ],
        resume: "/resume.pdf", // Replace with actual file URL
    };

    const handleAddEmployee = () => setShowEmployeeForm(true);

    const handleSubmitEmployee = (e) => {
        e.preventDefault();
        alert("Candidate added as an employee!");
        setShowEmployeeForm(false);
    };

    return (
        <div className="profile-container">
            {/* Header Section */}
            <div className="profile-header">
                <div className="profile-info">
                    <img src={candidate.profilePicture} alt="Profile" />
                    <h1>{candidate.name}'s Profile</h1>
                </div>
                <button onClick={handleAddEmployee}>Add as Employee</button>
            </div>

            {/* Profile Details */}
            <div className="profile-details">
                <h2>Details</h2>
                <div className="detail-item">
                    <span>Email:</span>
                    <strong>{candidate.email}</strong>
                </div>
                <div className="detail-item">
                    <span>Phone:</span>
                    <strong>{candidate.phone}</strong>
                </div>
                <div className="detail-item">
                    <span>Skills:</span>
                    <strong>
                        {candidate.skills.map((skill, index) => (
                            <span key={index} className="badge">{skill}</span>
                        ))}
                    </strong>
                </div>
                <div className="detail-item">
                    <span>Experience:</span>
                    <strong>{candidate.experience}</strong>
                </div>
                <div className="detail-item">
                    <span>Resume:</span>
                    <a href={candidate.resume} className="download-link" download>
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Job History */}
            <div className="job-history">
                <h2>Job History</h2>
                {candidate.jobHistory.map((job, index) => (
                    <div key={index} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.company} ({job.duration})</p>
                    </div>
                ))}
            </div>

            {/* Add as Employee Form */}
            {showEmployeeForm && (
                <form className="add-employee-form active" onSubmit={handleSubmitEmployee}>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" defaultValue={candidate.name} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" defaultValue={candidate.email} required />

                    <label htmlFor="department">Department:</label>
                    <select id="department" required>
                        <option value="">Select Department</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                    </select>

                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" required />

                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" required />

                    <button type="submit">Add Employee</button>
                </form>
            )}
        </div>
    );
};

export default CandidateProfile;
