import React from "react";
import StandbyList from "./test2"; // ייבוא של StandbyList

function App() {
  return (
    <div className="App">
      <StandbyList onBack={() => {}} /> {/* הצגת StandbyList בלבד */}
    </div>
  );
}

export default App;
