import React, { useState } from "react";

const Followus = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [showFormData, setshowFormData] = useState(false);

  // const handleName = (event) => {
  //   setName(event.target.value);
  //   // console.log(event.target.value);
  //   console.log(name);
  // };

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   console.log(name, email, password);
  // };

  const handleForm = (event) => {
    event.preventDefault();
    setshowFormData(true);
    console.log(email, password, address, state, zipcode);
  };
  return (
    <>
      <form className="row g-3 container" onSubmit={handleForm}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            className="form-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option selected>Choose...</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>Canada</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>

      {showFormData ? (
        <div>
          <p>
            {email} {password} {address} {address2} {state} {zipcode}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Followus;
