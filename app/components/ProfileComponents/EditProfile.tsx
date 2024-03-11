import { useState } from "react";

interface ProfileState {
  [key: string]: string;
}

const EditProfile = () => {
  const [profile, setProfile] = useState<ProfileState>({});
  const [changeType, setChangeType] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (changeType == "username") {
        console.log("Change username");
    } else {
        console.log("Change Password");
    }
  }

  return (
    <>
      <form onSubmit={handleForm} className="edit-form">
        {/* Change Username */}
        <div className="section">
          <p className="change-text">Change username</p>
          <div className="changing-section">
            <div className="change">
              <input
                name="old_username"
                value={profile["old_username"] || ""}
                placeholder="Enter old username"
                onChange={handleInputChange}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                name="new_username"
                value={profile["new_username"] || ""}
                placeholder="Enter new username"
                onChange={handleInputChange}
                className="change-input"
              />
            </div>

            <button onClick={() => setChangeType("username")} className="change-button">Change</button>
          </div>
        </div>

        {/* Change Password */}
        <div className="section">
          <p className="change-text">Change Password</p>
          <div className="changing-section">
            <div className="change">
              <input
                type="password"
                name="old_password"
                value={profile["old_password"] || ""}
                placeholder="Enter old password"
                onChange={handleInputChange}
                className="change-input"
              />
            </div>
            <div className="change">
              <input
                type="password"
                name="new_password"
                value={profile["new_password"] || ""}
                placeholder="Enter new password"
                onChange={handleInputChange}
                className="change-input"
              />
            </div>

            <button onClick={() => setChangeType("password")} className="change-button">Change</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
