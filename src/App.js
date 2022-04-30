import React from "react";
import FormInput from "./Components/FormInput";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { DataProvider } from "./Components/DataProvider";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>What's the Plan for Today ?</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
