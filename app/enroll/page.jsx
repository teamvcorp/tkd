"use client";
import React, { useState } from "react";
import "./enroll.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    firstParticipantName: "",
    secondParticipantName: "",
    thirdParticipantName: "",
    firstAge: "",
    secondAge: "",
    thirdAge: "",
    medNeeds: "",
    taekwondo: false,
    afterschool: false,
    trip: false,
  });
  const {
    fullname,
    email,
    message,
    phone,
    firstParticipantName,
    secondParticipantName,
    thirdParticipantName,
    firstAge,
    secondAge,
    thirdAge,
    firstMedNeeds,
    secondMedNeeds,
    thirdMedNeeds,
    taekwondo,
    afterschool,
    trip,
  } = formData;

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const  formattedData = async () => {
      
    };

    const res = await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="formContainer">
      <h5 className="formH1">Enrollment Form</h5>
      <form onSubmit={handleSubmit} className="formBackground">
        <fieldset className="formSection">
          <legend>Parent Details - Detalles de los padres </legend>

          <label htmlFor="fullname" className="">
            Full Name <p className="fontBlack spanish">Nombre Completo <span className="text-red-500 dark:text-gray-50">*</span></p> 
            
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFormData({ ...formData, fullname: e.target.value });
            }}
            name="fullname"
            className="formInput"
          />

          <label htmlFor="email" className="">
            E-mail <p className="fontBlack spanish">Correo Electrónico<span className="text-red-500">*</span></p> 
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            className="formInput"
          />
          <label htmlFor="phone" className="">
            Phone <p className="fontBlack spanish">Teléfono<span className="text-red-500">*</span> </p> 
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            className="formInput"
          />
        </fieldset>

        <fieldset >
          <legend>Participant Infomation - Información del participante</legend>

          <fieldset className="formSection">
            <label htmlFor="firstParticipantName" className="">
              Name <span className="text-red-500">*</span> <p className="fontBlack spanish">nombre completo </p> 
            </label>
            <input
              type="text"
              name="firstParticipantName"
              value={firstParticipantName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  firstParticipantName: e.target.value,
                });
              }}
              className="formInput"
            />
            <label htmlFor="age" className="">
              Age <span className="text-red-500">*</span> <p className="fontBlack spanish">edad </p> 
            </label>
            <input
              type="text"
              name="firstAge"
              value={firstAge}
              onChange={(e) => {
                setFormData({ ...formData, firstAge: e.target.value });
              }}
              className="formInput"
            />
            <label htmlFor="medNeeds" className="">
              Medical Needs <p className="fontBlack spanish">Necesidades Médicas</p> 
             
            </label>
            <textarea
              type="text"
              name="firstMedNeeds"
              value={firstMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, firstMedNeeds: e.target.value });
              }}
              className=""
            />
          </fieldset>

          <fieldset className="formSection">
            <label htmlFor="secondParticipantName" className="">
            Name <p className="fontBlack spanish">nombre completo</p> 
            </label>
            <input
              type="text"
              name="secondParticipantName"
              value={secondParticipantName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  secondParticipantName: e.target.value,
                });
              }}
              className="formInput"
            />
            <label htmlFor="age" className="">
            Age <p className="fontBlack spanish">edad </p>
            </label>
            <input
              type="text"
              name="secondAge"
              value={secondAge}
              onChange={(e) => {
                setFormData({ ...formData, secondAge: e.target.value });
              }}
              className="formInput"
            />
            <label htmlFor="medNeeds" className="">
            Medical Needs <p className="fontBlack spanish">Necesidades Médicas</p> 
              
            </label>
            <textarea
              type="text"
              name="secondMedNeeds"
              value={secondMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, secondMedNeeds: e.target.value });
              }}
              className=""
            />
          </fieldset>

          <fieldset className="formSection">
            <label htmlFor="thirdParticipantName" className="">
            Name <p className="fontBlack spanish">nombre completo</p> 
            </label>
            <input
              type="text"
              name="thirdParticipantName"
              value={thirdParticipantName}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  thirdParticipantName: e.target.value,
                });
              }}
              className="formInput"
            />
            <label htmlFor="age" className="">
            Age <p className="fontBlack spanish">edad </p>
            </label>
            <input
              type="text"
              name="thirdAge"
              value={thirdAge}
              onChange={(e) => {
                setFormData({ ...formData, thirdAge: e.target.value });
              }}
              className="formInput"
            />
            <label htmlFor="medNeeds" className="">
            Medical Needs <p className="fontBlack spanish">Necesidades Médicas</p> 
             
            </label>
            <textarea
              type="text"
              name="thirdMedNeeds"
              value={thirdMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, thirdMedNeeds: e.target.value });
              }}
              className=""
            />
          </fieldset>
        </fieldset>
        <fieldset className="formSectionCheck">
          <legend>Choose Programs -Elija Programas</legend>
          <input
            type="checkbox"
            id="taekwondo"
            name="taekwondo"
            value="taekwondo"
            onChange={(e) => {
              setFormData({ ...formData, taekwondo: e.target.value? true:false });
            }}
            className="checkbox"
          />
          <label className="checkboxLabel" for="taekwondo">Taekwondo</label>
          <input
            type="checkbox"
            id="afterschool"
            name="afterschool"
            value="afterschool"
            onChange={(e) => {
              setFormData({ ...formData, afterschool: e.target.value? true:false });
            }}
            className="checkbox"
          />
          <label for="afterschool">Afterschool</label>
          <input
            type="checkbox"
            id="trip"
            name="trip"
            value="trip"
            onChange={(e) => {
              setFormData({ ...formData, trip: e.target.value? true: false });
            }}
            className="checkbox"
          />
          <label for="trip">TRIP Outreach</label>
        </fieldset>

        <label htmlFor="message" className="">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          className=""
        ></textarea>

        <div className="">
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
