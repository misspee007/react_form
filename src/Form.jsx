import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit} >
        <div className="name">
          <label>
            <div>First Name:</div>
            <input type="text" value={name} onChange={handleNameChange} disabled={isSubmitting} />
          </label>
        </div>
        <div className="surname">
          <label>
            <div>Last Name:</div>
            <input type="text" value={surname} onChange={handleSurnameChange} disabled={isSubmitting} />
          </label>
        </div>
        <div className="mail">
          <label>
            <div>Email:</div>
            <input type="email" value={email} onChange={handleEmailChange} disabled={isSubmitting} />
          </label>
        </div>
        <div className="gender">
          <div>Gender:</div>
          <div onChange={handleGenderChange} className="radio" >
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={gender === "male"}
                  disabled={isSubmitting}
                />
                &#160;Male
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={gender === "female"}
                  disabled={isSubmitting}
                />
              </label>
              &#160;Female
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={gender === "other"}
                  disabled={isSubmitting}
                />
              </label>
              &#160;Other
            </div>
          </div>
        </div>
        <div className="address">
          <div>Address:</div>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleAddressChange}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <div>Bio:</div>
          <textarea
            className="bio"
            type="text"
            value={bio}
            onChange={handleBioChange}
            disabled={isSubmitting}
          />
        </div>
        {isSubmitting && <div>Submitting..</div>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </>
  );
};

export default Form;
