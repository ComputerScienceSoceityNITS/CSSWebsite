import axios from "axios";
import React, { useState } from "react";
import Styles from "./styles.module.css";

const MemberForm = () => {
  const [user, setUser] = useState({
    name: "",
    session: "",
    role: "",
    year: "",
    coHead: "",
  });

  const [socialMedia, setsocialMedia] = useState({
    instagram: "",
    linkedin: "",
    github: "",
    facebook: "",
  });
  const [avatar, setAvatar] = useState("");

  const tchanger = (e) => {
    setUser({ ...user, role: e.target.value });
  };
  const socialMediaDataChange = (e) => {
    setsocialMedia({ ...socialMedia, [e.target.name]: e.target.value });
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (user.coHead === "true" && user.role !== "Technical Head") {
        if (user.role === "Dev-Wing") {
          user.role += " Co-Head";
        } else {
          user.role += " Head";
        }
      }

      const myForm = new FormData();
      myForm.set("name", user.name);
      myForm.set("session", user.session);
      myForm.set("year", user.year);
      myForm.set("role", user.role);
      myForm.set("avatar", avatar);
      myForm.set("instagram", socialMedia.instagram);
      myForm.set("linkedin", socialMedia.linkedin);
      myForm.set("facebook", socialMedia.facebook);
      myForm.set("github", socialMedia.github);
      // console.log(socialMedia);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      // const { data } = await axios.post(`http://localhost:5000/api/admin/member/new`, myForm,config);
      const { data } = await axios.post(
        `https://css-website.herokuapp.com/api/admin/member/new`,
        myForm,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Styles.main}>
      <form>
        <div className={Styles.entry}>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="Name"
            name="name"
            onChange={registerDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="Designation">Designation: </label>
          <select name="role" onChange={tchanger}>
            <option value="General Secretary">General Secretary</option>
            <option value="Assistant General Secretary">
              Assistant General Secretary
            </option>
            <option value="Technical Head">Technical Head</option>
            <option value="Dev-Wing">Dev Wing</option>
            <option value="Dev-Wing Head">Dev Wing Head</option>
            <option value="Dev-Wing Co-Head">Dev Wing Co-Head</option>
            <option value="CP-Wing">CP Wing</option>
            <option value="CP-Wing Head">CP Wing Head</option>
            <option value="CP-Wing Co-Head">CP Wing Co-Head</option>
            <option value="Executive-Wing">Executive Wing</option>
            <option value="Executive-Wing Head">Executive Wing Head</option>
            <option value="Executive-Wing Co-Head">
              Executive Wing Co-Head
            </option>
            <option value="ML-Wing">ML Wing</option>
            <option value="ML-Wing Head">ML Wing Head</option>

            <option value="ML-Wing Co-Head">ML Wing Co-Head</option>
            <option value="Design-Wing">Design Wing</option>
            <option value="Design-Wing Head">Design Wing Head</option>
            <option value="Design-Wing Co-Head">Design Wing Co-Head</option>
            <option value="Literary-Wing">Literary Wing</option>
            <option value="Literary-Wing Head">Literary Wing Head</option>
            <option value="Literary-Wing Co-Head">Literary Wing Co-Head</option>
            <option value="Design-Executive">Design Executive</option>
            <option value="Literary-Executive">Literary Executive</option>
            <option value="Technical Members">Technical Members</option>
            <option value="Executive Members">Executive Members</option>
          </select>
        </div>
        <div className={Styles.entry}>
          <p>Are you a Co-head/Head?</p>
          <label htmlFor="true">Yes</label>
          <input
            type="radio"
            value="true"
            name="coHead"
            onChange={registerDataChange}
          />
          <label htmlFor="false">No</label>
          <input
            type="radio"
            value="false"
            name="coHead"
            onChange={registerDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="Img">Profile Picture :</label>
          <input
            type="file"
            id="Img"
            name="avatar"
            onChange={registerDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <p>Year: </p>
          <label htmlFor="2">2nd</label>
          <input
            type="radio"
            id="2"
            name="year"
            value="2"
            onChange={registerDataChange}
          />
          <label htmlFor="3">3rd</label>
          <input
            type="radio"
            id="3"
            name="year"
            value="3"
            onChange={registerDataChange}
          />
          <label htmlFor="4">4th</label>
          <input
            type="radio"
            id="4"
            name="year"
            value="4"
            onChange={registerDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <p>Session: </p>
          <label htmlFor="session">2019-20</label>
          <input
            type="radio"
            id="2"
            name="session"
            value="19-20"
            onChange={registerDataChange}
          />
          <label htmlFor="session">2020-21</label>
          <input
            type="radio"
            id="3"
            name="session"
            value="20-21"
            onChange={registerDataChange}
          />
          <label htmlFor="session">2021-22</label>
          <input
            type="radio"
            id="4"
            name="session"
            value="21-22"
            onChange={registerDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="Facebook">Facebook: </label>
          <input
            type="text"
            id="Facebook"
            name="facebook"
            onChange={socialMediaDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="Instagram">Instagram: </label>
          <input
            type="text"
            id="Instagram"
            name="instagram"
            onChange={socialMediaDataChange}
          />
        </div>
        <div>
          <label htmlFor="Github">Github: </label>
          <input
            type="text"
            id="Github"
            name="github"
            onChange={socialMediaDataChange}
          />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="LinkedIn">LinkedIn: </label>
          <input
            type="text"
            id="LinkedIn"
            name="linkedin"
            onChange={socialMediaDataChange}
          />
        </div>

        <input type="submit" onClick={submit} />
        <input type="reset" />
      </form>
    </div>
  );
};

export default MemberForm;
