import React, { useState } from "react";
import "./RecruiterDashboard.css";

// קומפוננטות למסכים שונים
const AddJob = ({ onBack }) => (
    <div className="screen">
        <h2>Add Job</h2>
        <button onClick={onBack}>Back to Dashboard</button>
    </div>
);

const AddCandidate = ({ onBack }) => (
    <div className="screen">
        <h2>Add Candidate</h2>
        <button onClick={onBack}>Back to Dashboard</button>
    </div>
);

const StandbyList = ({ onBack }) => (
    <div className="screen">
        <h2>Standby List</h2>
        <button onClick={onBack}>Back to Dashboard</button>
    </div>
);

const Notifications = ({ onBack }) => (
    <div className="screen">
        <h2>Notifications</h2>
        <button onClick={onBack}>Back to Dashboard</button>
    </div>
);

const DailyInstructions = ({ onBack }) => (
    <div className="screen">
        <h2>Daily Instructions</h2>
        <button onClick={onBack}>Back to Dashboard</button>
    </div>
);

const RecruiterDashboard = () => {
    const [currentScreen, setCurrentScreen] = useState("Dashboard"); // התחל עם הדשבורד הראשי

    // פונקציה למעבר למסך מסוים
    const navigateToScreen = (screen) => {
        setCurrentScreen(screen);
    };

    // פונקציה לחזרה לדשבורד
    const navigateBack = () => {
        setCurrentScreen("Dashboard");
    };

    // Render the screen based on the current screen state
    if (currentScreen === "AddJob") return <AddJob onBack={navigateBack} />;
    if (currentScreen === "AddCandidate") return <AddCandidate onBack={navigateBack} />;
    if (currentScreen === "StandbyList") return <StandbyList onBack={navigateBack} />;
    if (currentScreen === "Notifications") return <Notifications onBack={navigateBack} />;
    if (currentScreen === "DailyInstructions") return <DailyInstructions onBack={navigateBack} />;

    return (
        <div>
            {/* Menu Bar */}
            <div className="menu-bar">
                <button onClick={() => navigateToScreen("AddJob")}>Add Job</button>
                <button onClick={() => navigateToScreen("AddCandidate")}>Add Candidate</button>
                <button onClick={() => navigateToScreen("StandbyList")}>Standby List</button>
                <button onClick={() => navigateToScreen("Notifications")}>Notifications</button>
                <button onClick={() => navigateToScreen("DailyInstructions")}>Daily Instructions</button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Recruiter Dashboard</h1>
                {/* Quick Metrics */}
                <div className="metrics-bar">
                    <div className="metric-item">
                        <h3>Total Candidates</h3>
                        <p>120</p>
                    </div>
                    <div className="metric-item">
                        <h3>Open Jobs</h3>
                        <p>15</p>
                    </div>
                    <div className="metric-item">
                        <h3>Pending Tasks</h3>
                        <p>5</p>
                    </div>
                </div>

                {/* Urgent Jobs Section */}
                <div className="urgent-jobs">
                    <h2>Urgent Jobs</h2>
                    <p>List of urgent jobs will appear here.</p>
                </div>

                {/* Standby Candidates Section */}
                <div className="standby-candidates">
                    <h2>Standby Candidates</h2>
                    <p>Standby candidates list will appear here.</p>
                </div>

                {/* Notifications Section */}
                <div className="notifications-section">
                    <h2>Notifications</h2>
                    <p>Notifications will appear here.</p>
                </div>

                {/* Performance Leaderboard */}
                <div className="performance-leaderboard">
                    <h2>Performance Leaderboard</h2>
                    <p>Leaderboard details will appear here.</p>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="right-sidebar">
                <div className="notes-section">
                    <h3>Notes</h3>
                    <p>Notes section will appear here.</p>
                </div>

                <div className="daily-message">
                    <h3>Daily Message</h3>
                    <p>Remember to focus on high-priority hires today.</p>
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboard;
