import React from "react";
import "./MainContent.css";
import NavBar from "./NavBar/NavBar";
import DetailedBlock from "./DetailedBlock/DetailedBlock";
import ContactsBlock from "./ContactsBlock/ContactsBlock";

export default function MainContent() {
  return (
    <div className="content_contaier">
      <NavBar />
      <DetailedBlock />
      <ContactsBlock />
    </div>
  );
}
