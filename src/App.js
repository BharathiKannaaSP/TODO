import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmpCreate from "./components/EmpCreate";
import EmpEdit from "./components/EmpEdit";
import EmpDetails from "./components/EmpDetails";
import { useState } from "react";
import { useEffect } from "react";
import {debounce} from 'lodash'

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilterData(filterData);
      });
  }
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  const handleFilter = debounce((value) => {
    setSearchTerm(value);
    // Filter data by title
    const filteredPosts = data.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilterData(filteredPosts);
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    handleFilter(value);
  };

  return (
    <div className="app">
       <input
        type="text"
        placeholder="Filter by title"
        onChange={handleInputChange}
        value={searchTerm} // Set input value to search term
      />
      {filterData.map((item) => (
        <>
          <p>{item.title}</p>
        </>
      ))}
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/create" element={<EmpCreate />} />
        <Route path="/employee/edit/:id" element={<EmpEdit />} />
        <Route path="/employee/details/:id" element={<EmpDetails />} />
      </Routes>
    </div>
  );
}

export default App;
