const AccountOptions = () => {
  return (
    <div className="account-section">
      {/* Logout Account */}
      <div className="logout-button flex-center account-buttons">
        <p>Logout</p>
      </div>

      {/* Delete Account */}
      <div className="delete-button flex-center account-buttons">
        <p>Delete Account</p>
      </div>
    </div>
  );
};

export default AccountOptions;
