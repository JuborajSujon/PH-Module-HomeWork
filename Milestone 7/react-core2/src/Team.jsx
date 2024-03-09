import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const teamStyle = {
    border: "2px solid black",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={() => setTeam(team - 1)}>Reduce Player</button>
    </div>
  );
}
