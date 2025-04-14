import React, { useState } from "react";
import "./AddCandidate.css"; // Import the CSS for styling

const AddCandidate = ({ onBack }) => {
    const [candidateDetails, setCandidateDetails] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        jobType: "Driver",
        experience: "Yes",
        skills: [], // ניהול הכישורים הנבחרים במערך
        status: "Pending",
        resume: null, // שדה לקובץ קורות חיים
        position: null, // שדה למשרה שנבחרה

    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        resume: "",
    });
    const availablePositions = [
        "Software Engineer",
        "Product Manager",
        "Data Analyst",
        "Designer",
        "Marketing Specialist",
    ];
    
    const availableSkills = [
        "Communication",
        "Leadership",
        "Teamwork",
        "Problem Solving",
        "Technical Skills",
        "Other",
    ];
    const handlePositionSelect = (e) => {
        const selectedPosition = e.target.value;
        setCandidateDetails((prevDetails) => ({
            ...prevDetails,
            position: selectedPosition,
        }));
    };
    
    const handleRemovePosition = () => {
        setCandidateDetails((prevDetails) => ({
            ...prevDetails,
            position: null,
        }));
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCandidateDetails((prevDetails) => ({
            ...prevDetails,
            resume: file,
        }));
    };

    const handleSkillSelect = (e) => {
        const selectedSkill = e.target.value;
        if (selectedSkill && !candidateDetails.skills.includes(selectedSkill)) {
            setCandidateDetails((prevDetails) => ({
                ...prevDetails,
                skills: [...prevDetails.skills, selectedSkill],
            }));
        }
    };

    const handleRemoveSkill = (skill) => {
        setCandidateDetails((prevDetails) => ({
            ...prevDetails,
            skills: prevDetails.skills.filter((s) => s !== skill),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!candidateDetails.firstName) newErrors.firstName = "First name is required.";
        if (!candidateDetails.lastName) newErrors.lastName = "Last name is required.";
        if (!candidateDetails.phone) newErrors.phone = "Phone number is required.";
        if (!candidateDetails.email) newErrors.email = "Email is required.";
        if (!candidateDetails.resume) newErrors.resume = "Resume is required."; // בדיקת קובץ קורות חיים
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Candidate Added:", candidateDetails);
            alert("Candidate successfully added!");
            setErrors({});
            onBack();
        }
    };

    return (
        <div className="add-candidate-container">
            <h2>Add a New Candidate</h2>
            <form onSubmit={handleSubmit} className="add-candidate-form">
                {/* First Name */}
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={candidateDetails.firstName}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={candidateDetails.lastName}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phone"
                        value={candidateDetails.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={candidateDetails.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                {/* Resume */}
                <div className="form-group">
                    <label>Upload Resume:</label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="form-input"
                    />
                    {errors.resume && <span className="error">{errors.resume}</span>}
                </div>

                {/* Skills */}
                <div className="form-group">
                    <label>Skills:</label>
                    <select onChange={handleSkillSelect} className="form-input" defaultValue="">
                        <option value="" disabled>
                            Select a skill
                        </option>
                        {availableSkills.map((skill) => (
                            <option key={skill} value={skill}>
                                {skill}
                            </option>
                        ))}
                    </select>
                    <div className="skills-tags">
                        {candidateDetails.skills.map((skill) => (
                            <span key={skill} className="skill-tag">
                                {skill}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveSkill(skill)}
                                    className="remove-skill-button"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                        {/* Position */}
<div className="form-group">
    <label>Position:</label>
    {candidateDetails.position ? (
        <div className="position-tag">
            {candidateDetails.position}
            <button
                type="button"
                onClick={handleRemovePosition}
                className="remove-position-button"
            >
                &times;
            </button>
        </div>
    ) : (
        <select onChange={handlePositionSelect} className="form-input" defaultValue="">
            <option value="" disabled>
                Select a position
            </option>
            {availablePositions.map((position) => (
                <option key={position} value={position}>
                    {position}
                </option>
            ))}
        </select>
    )}
</div>

                    </div>
                </div>

                {/* Status */}
                <div className="form-group">
                    <label>Status:</label>
                    <select
                        name="status"
                        value={candidateDetails.status}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="form-buttons">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    <button type="button" onClick={onBack} className="back-button">
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCandidate;
