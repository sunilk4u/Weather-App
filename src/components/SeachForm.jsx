import { useContext, useState } from "react";
import DataContext from "./Context/DataContext";
/* eslint-disable */
function SeachForm() {
  const [location, setLocation] = useState("");
  const { fetchData } = useContext(DataContext);

  const submit = (e) => {
    e.preventDefault();
    fetchData(location);
    setLocation("");
  };
  return (
    <div className="search-form">
      <form onSubmit={submit}>
        <input
          type="text"
          name="search"
          id="search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location..."
        />
      </form>
    </div>
  );
}

export default SeachForm;
