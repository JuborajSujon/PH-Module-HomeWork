import React from "react";

const AuthProvider = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">This is AuthProvider</h2>
    </div>
  );
};

export default AuthProvider;
