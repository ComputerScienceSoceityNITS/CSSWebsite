import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Spinner from "../Spinner";

const AbacusRegisterComponent = ({ data }) => {
  const essentialData = ["Team Name", "Team Leader Scholar ID"];
  const minTeamSize = data.minTeamSize - 1;
  const maxTeamSize = data.maxTeamSize - 1;
  const eventNameLength = data.name.split(" ").length;

  const [showForm, setShowForm] = useState(true);
  const [createdTeam, setCreatedTeam] = useState({
    name: "",
  });

  const [formState, setFormState] = useState({
    teamName: "",
    teamLeaderScholarID: "",
  });
  const [loading, setLoading] = useState(false);

  // check if signed in user has already registered for the event
  useEffect(() => {
    const participants = data.participants || [];
    const currUserScholarID = localStorage.getItem("CSS_ScholarID");
    if (!currUserScholarID) return;
    if (participants.indexOf(currUserScholarID) !== -1) {
      setShowForm(false);
    }
  }, []);

  useEffect(() => {
    const initState = ["teamName", "teamLeaderScholarID"];
    for (let i = 1; i <= maxTeamSize; i++) {
      initState.push(`member${i}scholarID`);
    }
    let initObject = {};
    initState.forEach((key) => {
      initObject = { ...initObject, [key]: "" };
    });
    setFormState(initObject);
  }, []);

  const handleFormChange = (e) => {
    setFormState((prevFormState) => {
      return { ...prevFormState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const registrationForm = {
      teamName: formState.teamName,
      teamLeaderScholarID: formState.teamLeaderScholarID,
      memberScholarIDs: [],
    };
    for (let key of Object.keys(formState)) {
      if (key.startsWith("member") && formState[key].length === 7) {
        registrationForm.memberScholarIDs.push(formState[key]);
      }
    }
    try {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/abacus/register/${data._id}`,
          registrationForm,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setShowForm(false);
          setCreatedTeam(res.data.team);
          console.log({ res });
          alert(`Team created successfully`);
          // if (res.response.status === 401) {
          //   localStorage.clear();
          //   window.location.pathname = "/abacus";
          // }
        })
        .catch((err) => {
          err.response ?
            alert(err.response.data.message) : alert(err.message)
          console.log({ err });
          if (err.response.status === 401) {
            localStorage.clear();
            window.location.pathname = "/abacus";
          }
        }).finally(()=>setLoading(false))
    } catch (err) {
      err.response ?
        alert(err.response.data.message) : alert(err.message);
      setLoading(false);
      // alert(err.message);
    }
  };
  return (
    <>
    {loading?<Spinner/>:null}
      <div
        className={styles.heroSection}
        style={{
          background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),url("${data.coverPic ? data.coverPic : null
            }") no-repeat center center / cover`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className={styles.registerCard}>
          {showForm ? (
            <>
              <div
                className={
                  minTeamSize > 0 ? styles.registerForm : styles.registerFormMin
                }
              >
                {essentialData.map((element, index) => {
                  return (
                    <div className={styles.group} key={index}>
                      <input
                        required
                        type="text"
                        className={styles.input}
                        placeholder="lol"
                        name={index === 0 ? "teamName" : "teamLeaderScholarID"}
                        value={
                          index === 0
                            ? formState.teamName
                            : formState.teamLeaderScholarID
                        }
                        onChange={handleFormChange}
                      />
                      <span className={styles.highlight}></span>
                      <span className={styles.bar}></span>
                      <label className={styles.label}>{element}</label>
                    </div>
                  );
                })}
                {minTeamSize > 0 && (
                  <div className={styles.teamWrapper}>
                    <legend className={styles.legend}>
                      Required Team Members
                    </legend>
                    <div className={styles.fieldsets}>
                      {[...Array(minTeamSize)].map((x, index) => {
                        const fieldName = `member${index + 1}scholarID`;
                        return (
                          <div className={styles.group} key={fieldName}>
                            <input
                              required
                              type="text"
                              className={styles.input}
                              placeholder="lol"
                              name={fieldName}
                              value={formState[fieldName]}
                              onChange={handleFormChange}
                            />
                            <span className={styles.highlight}></span>
                            <span className={styles.bar}></span>
                            <label className={styles.label}>{`Member ${index + 1
                              } Scholar ID`}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {maxTeamSize > 0 && (
                  <div className={styles.teamWrapper}>
                    <legend className={styles.legend}>
                      Optional Team Members
                    </legend>
                    <div className={styles.fieldsets}>
                      {[...Array(maxTeamSize - minTeamSize)].map((x, index) => {
                        const fieldName = `member${index + 1 + minTeamSize
                          }scholarID`;
                        return (
                          <div
                            className={styles.group}
                            key={minTeamSize + index}
                          >
                            <input
                              required={false}
                              type="text"
                              className={styles.input}
                              placeholder="lol"
                              name={fieldName}
                              value={formState[fieldName]}
                              onChange={handleFormChange}
                            />
                            <span className={styles.highlight}></span>
                            <span className={styles.bar}></span>
                            <label className={styles.label}>{`Member ${minTeamSize + index + 1
                              } Scholar ID`}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className={styles.btnWrapper}>
                  <button className={styles.btn} onClick={handleSubmit}>
                    submit
                  </button>
                </div>
              </div>
              <div className={styles.eventNameSection}>
                <h1
                  className={
                    (eventNameLength === 1 && styles.eventName) ||
                    (eventNameLength === 2 && styles.eventName2) ||
                    (eventNameLength >= 3 && styles.eventName3) ||
                    undefined
                  }
                >
                  {data.name}
                </h1>
              </div>
            </>
          ) : (
            <div className={styles.afterForm}>
              <div className={styles.afterFormTeamName}>{createdTeam.name}</div>
              <div className={styles.groupLink}>
                <a href={data.groupLink}>
                  Join Our WhatsApp Group for this event
                </a>
              </div>
              <a href={data.groupLink} className={styles.groupLink}>
                [{data.groupLink}]
              </a>
            </div>
          )}
        </div>
      </div>
      <div>{data.name}</div>
    </>
  );
};

export default AbacusRegisterComponent;
