import "./App.css";
import ReuseableForm from "./components/Reuseable Form/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import UseRefForm from "./components/Use Ref Form/UseRefForm";
// import StateFullForm from "./components/StateFull Form/StateFullForm";
// import SimpleForm from "./components/Simple Form/SimpleForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up data", data);
  };
  const handleUpdateSubmit = (data) => {
    console.log("Update data", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm /> */}
      {/* <StateFullForm /> */}
      {/* <UseRefForm /> */}
      {/* <HookForm /> */}
      <ReuseableForm
        formTitle="Sign Up"
        submitBtnText="Submit"
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle="Profile Update"
        submitBtnText="Update"
        handleSubmit={handleUpdateSubmit}>
        <div>
          <h2>Profile Update</h2>
          <p>Please update your profile</p>
        </div>
      </ReuseableForm>
    </>
  );
}

export default App;
