import React, { useState } from "react";
import "./AddJob.css"; // Import the CSS for styling

const AddJob = ({ onBack }) => {
    const [jobDetails, setJobDetails] = useState({
        title: "",
        description: "",
        requirements: "",
        urgency: "Medium",
        skills: [], // ניהול הכישורים הנבחרים במערך
        salary: "",
        location: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        requirements: "",
    });

    // Function to handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Add a new skill to the job
    const handleAddSkill = () => {
        const skill = prompt("Enter skill:");
        if (skill && !jobDetails.skills.includes(skill)) {
            setJobDetails((prevDetails) => ({
                ...prevDetails,
                skills: [...prevDetails.skills, skill],
            }));
        }
    };

    // Remove a skill from the list
    const handleRemoveSkill = (skill) => {
        setJobDetails((prevDetails) => ({
            ...prevDetails,
            skills: prevDetails.skills.filter((item) => item !== skill),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!jobDetails.title) newErrors.title = "Job title is required.";
        if (!jobDetails.description) newErrors.description = "Description is required.";
        if (!jobDetails.requirements) newErrors.requirements = "Requirements are required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Job Added:", jobDetails);
            alert("Job successfully added!");
            setErrors({});
            onBack(); // Return to the dashboard after submitting
        }
    };

    return (
        <div className="add-job-container">
            <h2>Add a New Job</h2>
            <form onSubmit={handleSubmit} className="add-job-form">
                {/* Job Title */}
                <div className="form-group">
                    <label>Job Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={jobDetails.title}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.title && <span className="error">{errors.title}</span>}
                </div>

                {/* Job Description */}
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={jobDetails.description}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                {/* Job Requirements */}
                <div className="form-group">
                    <label>Requirements:</label>
                    <textarea
                        name="requirements"
                        value={jobDetails.requirements}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    {errors.requirements && <span className="error">{errors.requirements}</span>}
                </div>

                {/* Skills */}
                <div className="form-group">
                    <label>Skills:</label>
                    <div>
                        <button type="button" onClick={handleAddSkill} className="add-skill-button">
                            Add Skill
                        </button>
                        <div className="skills-list">
                            {jobDetails.skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(skill)}
                                        className="remove-skill-button"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Salary */}
                <div className="form-group">
                    <label>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        value={jobDetails.salary}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* Location */}
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={jobDetails.location}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* Urgency */}
                <div className="form-group">
                    <label>Urgency:</label>
                    <select
                        name="urgency"
                        value={jobDetails.urgency}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                {/* Company */}
                <div className="form-group">
                    <label>Company:</label>
                    <select
                        name="company"
                        value={jobDetails.company}
                        onChange={handleChange}
                        className="form-input"
                    >
                        <option value="Coca Cola">Coca Cola</option>
                        <option value="Tnuva">Tnuva</option>
                        <option value="Osem">Osem</option>
                    </select>
                </div>

                {/* Submit Button */}
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

export default AddJob;
