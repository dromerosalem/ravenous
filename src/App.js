import React from "react";
import BusinessList from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="jumbotron text-center bg-dark-gold">
      <h1 className="bg-warning p-3">ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;