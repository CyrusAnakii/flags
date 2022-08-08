import React, { useState, useEffect, Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import Finder from "../components/Finder";
import { createRoot } from "react-dom/client";

function HomePage() {
  const [redState, setRedState] = useState(false);
  const [orangeState, setOrangeState] = useState(false);
  const [yellowState, setYellowState] = useState(false);
  const [greenState, setGreenState] = useState(false);
  const [blueState, setBlueState] = useState(false);
  const [purpleState, setPurpleState] = useState(false);
  const [pinkState, setPinkState] = useState(false);
  const [blackState, setBlackState] = useState(false);
  const [whiteState, setWhiteState] = useState(false);
  const [stripesState, setStripesState] = useState(false);
  const [textState, setTextState] = useState(false);
  const [animalState, setAnimalState] = useState(false);
  const [symbolState, setSymbolState] = useState(false);

  useEffect(() => {
    if (redState === false) {
      document.querySelector("#red").innerHTML = "";
    }
    if (redState) {
      document.querySelector("#red").innerHTML = "Red";
    }
    if (orangeState === false) {
      document.querySelector("#orange").innerHTML = "";
    }
    if (orangeState) {
      document.querySelector("#orange").innerHTML = "Orange";
    }
    if (yellowState === false) {
      document.querySelector("#yellow").innerHTML = "";
    }
    if (yellowState) {
      document.querySelector("#yellow").innerHTML = "Yellow";
    }
    if (greenState === false) {
      document.querySelector("#green").innerHTML = "";
    }
    if (greenState) {
      document.querySelector("#green").innerHTML = "Green";
    }
    if (blueState === false) {
      document.querySelector("#blue").innerHTML = "";
    }
    if (blueState) {
      document.querySelector("#blue").innerHTML = "Blue";
    }
    if (purpleState === false) {
      document.querySelector("#purple").innerHTML = "";
    }
    if (purpleState) {
      document.querySelector("#purple").innerHTML = "Purple";
    }
    if (pinkState === false) {
      document.querySelector("#pink").innerHTML = "";
    }
    if (pinkState) {
      document.querySelector("#pink").innerHTML = "Pink";
    }
    if (blackState === false) {
      document.querySelector("#black").innerHTML = "";
    }
    if (blackState) {
      document.querySelector("#black").innerHTML = "Black";
    }
    if (whiteState === false) {
      document.querySelector("#white").innerHTML = "";
    }
    if (whiteState) {
      document.querySelector("#white").innerHTML = "White";
    }
    if (stripesState === false) {
      document.querySelector("#stripes").innerHTML = "";
    }
    if (stripesState) {
      document.querySelector("#stripes").innerHTML = "Stripes";
    }
    if (textState === false) {
      document.querySelector("#text").innerHTML = "";
    }
    if (textState) {
      document.querySelector("#text").innerHTML = "Text";
    }
    if (animalState === false) {
      document.querySelector("#animal").innerHTML = "";
    }
    if (animalState) {
      document.querySelector("#animal").innerHTML = "Animal";
    }
    if (symbolState === false) {
      document.querySelector("#symbol").innerHTML = "";
    }
    if (symbolState) {
      document.querySelector("#symbol").innerHTML = "Symbol";
    }
  });

  return (
    <div className="Indent">
      <div className="container-fluid Jumbo">
        <p>
          You ever see a flag that you just can't place and other flag
          identifiers don't seem to have it in their database either? Perhaps
          it's not a currently used flag! Describe what you're looking at using
          the drop downs below and search our database of historical flags!
        </p>
      </div>
      <div className="row backgroundPurple">
        <p>
          Please describe the flag. Don't worry if you can't describe all the
          features, just describe the most prominent ones.
        </p>
      </div>
      <div className="row">
        <div className="col-6 backgroundTeal">
          <p>
            First choose the primary colors the flag is. If possible, try to
            limit your choices to two or three colors at most. The more colors
            you choose the less likely a match will be found.
          </p>
        </div>
        <div className="col-6 backgroundOrange">
          <p>
            Next choose the primary design features on the flag. Does it have
            stripes? An animal? Does it have some sort of text displayed
            prominently?
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 CenterThisButton">
          <Dropdown>
            <Dropdown.Toggle varient="success" id="colorDropdown">
              Choose a Color!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setRedState(!redState)}>
                Red
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOrangeState(!orangeState)}>
                Orange
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setYellowState(!yellowState)}>
                Yellow
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setGreenState(!greenState)}>
                Green
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBlueState(!blueState)}>
                Blue
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPurpleState(!purpleState)}>
                Purple
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setPinkState(!pinkState)}>
                Pink
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setBlackState(!blackState)}>
                Black
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setWhiteState(!whiteState)}>
                White
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-6 CenterThisButton">
          <Dropdown>
            <Dropdown.Toggle varient="success" id="designDropdown">
              Choose a Design!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setStripesState(!stripesState)}>
                Stripes
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setTextState(!textState)}>
                Text
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setAnimalState(!animalState)}>
                Animal
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSymbolState(!symbolState)}>
                Symbol
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>
            Please keep in mind that the more colors chosen, the less flags will
            show. It's best to keep to two or three colors maximum. Just worry
            about choosing the the flag's primary colors, not every color on it.
            With that said, these are the colors you are currently searching
            for:
          </p>
        </div>
        <div className="col-6">
          <p>
            And these are the design features you are searching for! Again, try
            to keep this to one or two design features. If you don't find what
            you're looking for the first time, try removing a color or design
            feature that might not seem as prevalent as the rest!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p id="red" className="RedText">
            Red
          </p>
        </div>
        <div className="col-1">
          <p id="orange" className="OrangeText">
            Orange
          </p>
        </div>
        <div className="col-1">
          <p id="yellow" className="YellowText">
            Yellow
          </p>
        </div>
        <div className="col-1">
          <p id="green" className="GreenText">
            Green
          </p>
        </div>
        <div className="col-1">
          <p id="blue" className="BlueText">
            Blue
          </p>
        </div>
        <div className="col-1">
          <p></p>
        </div>
        <div className="col-1">
          <p id="stripes" className="WhiteText">
            Stripes
          </p>
        </div>
        <div className="col-1">
          <p id="text" className="WhiteText">
            Text
          </p>
        </div>
        <div className="col-1">
          <p id="animal" className="WhiteText">
            Animal
          </p>
        </div>
        <div className="col-1">
          <p id="symbol" className="WhiteText">
            Symbol
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <p id="purple" className="PurpleText">
            Purple
          </p>
        </div>
        <div className="col-1">
          <p id="pink" className="PinkText">
            Pink
          </p>
        </div>
        <div className="col-1">
          <p id="black" className="BlackText">
            Black
          </p>
        </div>
        <div className="col-1">
          <p id="white" className="WhiteText">
            White
          </p>
        </div>
      </div>
      <div className="CenterThis">
        <Button
          onClick={() =>
            Finder(
              redState,
              orangeState,
              yellowState,
              greenState,
              blueState,
              purpleState,
              pinkState,
              blackState,
              whiteState,
              stripesState,
              textState,
              animalState,
              symbolState
            )
          }
        >
          Find Me My Flag!
        </Button>
      </div>
      <div className="Space">
        <p>
          Clicking on a flag below will bring you to the wikipedia article for
          that flag's country!
        </p>
      </div>
      <div className="row" id="space"></div>
    </div>
  );
}

export default HomePage;
