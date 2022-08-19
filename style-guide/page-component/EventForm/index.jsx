import axios from "axios";
import React, { useState } from "react";
import Styles from "./styles.module.css";

const EventForm = () => {
  const [images, setImages] = useState([]);
  const [event, setUser] = useState({
    name: "",
    startDate: null,
    endDate: null,
    description: "",
    formLink: "",
    startTime: "",
  });

  const registerDataChange = (e) => {
    if (e.target.name === "images") {
      const files = Array.from(e.target.files);
      setImages([]);
      files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setImages((old) => [...old, reader.result]);
          }
        };

        reader.readAsDataURL(file);
      });
    } else {
      setUser({ ...event, [e.target.name]: e.target.value });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      images.forEach((image) => {
        myForm.append("images", image);
      });

      myForm.set("name", event.name);
      myForm.set("description", event.description);
      myForm.set("formLink", event.formLink);
      myForm.set("startTime", event.startTime);
      myForm.set("startDate", event.startDate);
      myForm.set("endDate", event.endDate);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      // const { data } = await axios.post(`http://localhost:5000/api/admin/event/new`, myForm,config);
      const { data } = await axios.post(
        `https://css-website.herokuapp.com/api/admin/event/new`,
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
          <label htmlFor="Name">Event Name</label>
          <input type="text" name="name" onChange={registerDataChange} />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="StartDate">Start Date</label>
          <input type="date" name="startDate" onChange={registerDataChange} />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="StartTime">Start Time</label>
          <input type="text" name="startTime" onChange={registerDataChange} />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="EndDate">End Date</label>
          <input type="date" name="endDate" onChange={registerDataChange} />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="formLink">Link</label>
          <input type="text" name="formLink" onChange={registerDataChange} />
        </div>
        <div className={Styles.entry}>
          <label htmlFor="Details">Event Details</label>
          <textarea name="description" onChange={registerDataChange}></textarea>
        </div>
        <div className={Styles.entry}>
          <label htmlFor="images">Images</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={registerDataChange}
          />
        </div>

        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
};

export default EventForm;
