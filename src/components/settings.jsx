import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  const [settingsActive, setSettingsActive] = useState(false);
  return (
    <div>
      <button onClick={() => setSettingsActive(!settingsActive)}>
        <FontAwesomeIcon icon={faCog} />
      </button>
      {settingsActive ? (
        <p>Settings Active</p>
      ) : null}
    </div>
  );
}

export default Settings;
