import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmployeeList() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Del = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  function Edit(id) {
    navigate("employee/edit/" + id);
  }
  function View(id) {
    navigate("employee/details/" + id);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>

        <div className="card-body">
          <Link to="/employee/create" className="btn btn-success">
            Add Emp
          </Link>

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((details) => {
                  return (
                    <tr key={details.id}>
                      <td>{details.id}</td>
                      <td>{details.name}</td>
                      <td>{details.email}</td>
                      <td>{details.phone}</td>
                      <td>
                        <a
                          className="btn btn-success"
                          onClick={() => View(details.id)}
                        >
                          View
                        </a>
                        <a
                          className="btn btn-primary"
                          onClick={() => Edit(details.id)}
                        >
                          Edit
                        </a>
                        <a
                          className="btn btn-danger"
                          onClick={() => Del(details.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
