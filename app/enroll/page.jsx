"use client";

import React, { useState } from "react";
import {  useRouter } from "next/navigation";
import "./enroll.css";

export default function ContactUs() {
  const router = useRouter();
  
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
    behavioralService: false,
    yotae: false,
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
    behavioralService,
    yotae
  } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    router.push('/')
  };

  return (
    <div className="formContainer">
      <h5 className="formH1">Enrollment Form</h5>
      <form onSubmit={handleSubmit} className="formBackground">
        <fieldset className="formSection">
          <legend> <strong>Parent Details</strong> <i> Detalles de los padres </i> </legend>

          <label htmlFor="fullname" className="">
            Full Name <p className="fontBlack spanish"><i> Nombre Completo </i> <span className="text-red-500 dark:text-gray-50">*</span></p> 
            
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFormData({ ...formData, fullname: e.target.value });
            }}
            name="fullname"
            className="formInput"
            required
          />

          <label htmlFor="email" className="">
            E-mail <p className="fontBlack spanish"> <i>Correo Electrónico</i><span className="text-red-500">*</span></p> 
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            className="formInput"
            required
          />
          <label htmlFor="phone" className="">
            Phone <p className="fontBlack spanish"> <i> Teléfono </i><span className="text-red-500">*</span> </p> 
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            className="formInput"
            required
          />
        </fieldset>

        <fieldset >
          <legend> <strong>Participant Infomation</strong> <i> Información del participante </i></legend>

          <fieldset className="formSection">
            <label htmlFor="firstParticipantName" className="">
              Name <span className="text-red-500">*</span> <p className="fontBlack spanish"> <i>nombre completo</i> </p> 
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
              required
            />
            <label htmlFor="age" className="">
              Age <span className="text-red-500">*</span> <p className="fontBlack spanish"> <i> edad </i> </p> 
            </label>
            <input
              type="text"
              name="firstAge"
              value={firstAge}
              onChange={(e) => {
                setFormData({ ...formData, firstAge: e.target.value });
              }}
              className="formInput"
              required
            />
            <label htmlFor="medNeeds" className="">
              Medical Needs <p className="fontBlack spanish"><i>Necesidades Médicas</i></p> 
             
            </label>
            <textarea
              type="text"
              name="firstMedNeeds"
              value={firstMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, firstMedNeeds: e.target.value });
              }}
              className="textareaMed"
            />
          </fieldset>

          <fieldset className="formSection">
            <label htmlFor="secondParticipantName" className="">
            Name <p className="fontBlack spanish"><i>nombre completo</i></p> 
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
            Age <p className="fontBlack spanish"><i> edad </i> </p>
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
            Medical Needs <p className="fontBlack spanish"><i>Necesidades Médicas</i></p> 
              
            </label>
            <textarea
              type="text"
              name="secondMedNeeds"
              value={secondMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, secondMedNeeds: e.target.value });
              }}
              className="textareaMed"
            />
          </fieldset>

          <fieldset className="formSection">
            <label htmlFor="thirdParticipantName" className="">
            Name <p className="fontBlack spanish"><i>nombre completo</i></p> 
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
            Age <p className="fontBlack spanish"><i> edad </i> </p>
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
            Medical Needs <p className="fontBlack spanish"><i>Necesidades Médicas</i></p> 
             
            </label>
            <textarea
              type="text"
              name="thirdMedNeeds"
              value={thirdMedNeeds}
              onChange={(e) => {
                setFormData({ ...formData, thirdMedNeeds: e.target.value });
              }}
              className="textareaMed"
            />
          </fieldset>
        </fieldset>
        <fieldset className="formSectionCheck">
            
        
          <legend> <strong> Choose Programs </strong> <i> Elija Programas </i></legend>
          <div className="checkboxContainer">
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
          </div>

          <div className="checkboxContainer">
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
          <label className="checkboxLabel" for="afterschool">Afterschool</label>
          </div>

          <div className="checkboxContainer">
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
          <label className="checkboxLabel" for="trip">TRIP Outreach</label>
          </div>
          <div className="checkboxContainer">
          <input
            type="checkbox"
            id="behavioralService"
            name="behavioralService"
            value="behavioralService"
            onChange={(e) => {
              setFormData({ ...formData, behavioralService: e.target.value? true: false });
            }}
            className="checkbox"
          />
          <label className="checkboxLabel" for="behavioralService">Behavioral Services</label>
          </div>
          <div className="checkboxContainer">
          <input
            type="checkbox"
            id="yotae"
            name="yotae"
            value="yotae"
            onChange={(e) => {
              setFormData({ ...formData, yotae: e.target.value? true: false });
            }}
            className="checkbox"
          />
          <label className="checkboxLabel" for="yotae">Yotae</label>
          </div>
        </fieldset>
            <div className="formSectionMessage">

        <label htmlFor="message" className="message">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          className="formMessage"
          ></textarea>
          </div>

        <div className="formSubmitBtnContainer">
          <button type="submit" className="btn formSubmitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
