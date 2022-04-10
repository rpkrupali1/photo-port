import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About> </About>
      </main>
    </div>
  );
}

export default App;
