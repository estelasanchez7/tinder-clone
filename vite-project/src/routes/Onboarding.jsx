import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const handleSubmit = () => {
    console.log("Submitted");
  };
  const handleChange = () => {
    console.log("change!");
  };

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="fist_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                required={true}
                value={"man"}
                onChange={handleChange}
                checked={false}
              />

              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                required={true}
                value={"woman"}
                onChange={handleChange}
                checked={false}
              />

              <label htmlFor="more-gender-identity">More</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                required={true}
                value={"more"}
                onChange={handleChange}
                checked={false}
              />
            </div>

            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show_gender"
              required={true}
              value={"more"}
              onChange={handleChange}
              checked={false}
            />

            <label>Show me</label>
            <div className="multiple-input-container">
              <label htmlFor="man-gender-interest">Man</label>
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                required={true}
                value={"man"}
                onChange={handleChange}
                checked={false}
              />

              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                required={true}
                value={"woman"}
                onChange={handleChange}
                checked={false}
              />

              <label htmlFor="everyone-gender-interest">Everyone</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                required={true}
                value={"everyone"}
                onChange={handleChange}
                checked={false}
              />
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like to travel..."
              value={""}
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              id="url"
              type="url"
              name="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container"></div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
