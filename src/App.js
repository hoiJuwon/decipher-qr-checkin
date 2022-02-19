import { Participant, Admin } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  background-color: #001731;
`;

function App() {
  return (
    <Container>
      <Participant />
    </Container>
  );
}

export default App;
