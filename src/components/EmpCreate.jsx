import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpCreate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
const navigate=useNavigate()
  const handleFormSubmit = (e)=>{
    e.preventDefault()
    const data={id,name,email,phone}
    fetch('http://localhost:8000/employee',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    }).then((res)=>{
       alert('Saved Successfully')
       navigate('/')
    }).catch((err)=>{
        console.log(err.message)
    })
  }
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
              <form className="row" onSubmit={handleFormSubmit}>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input required
                      value={id}
                      disabled="disabled"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input required
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success">Save</button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpCreate;
