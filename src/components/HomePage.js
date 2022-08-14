import React, { useState, useEffect, Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import Finder from "../components/Finder";

function HomePage() {
  const [searchState, setSearchState] = useState(false);
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
    <div className="background">
      <div className="Indent">
        <div className="container-fluid Jumbo">
          <p>
            You ever see a flag that you just can't place and other flag
            identifiers don't seem to have it in their database either? Perhaps
            it's not a currently used flag! Describe what you're looking at
            using the drop downs below and search our database of historical
            flags!
          </p>
        </div>
        <div className="row TextCenter">
          <p>
            Please describe the flag. Don't worry if you can't describe all the
            features, just describe the most prominent ones.
          </p>
        </div>
        <div className="row">
          <div className="col-6 TextCenter">
            <p>
              First choose the primary colors the flag is. If possible, try to
              limit your choices to two or three colors at most. The more colors
              you choose the less likely a match will be found.
            </p>
          </div>
          <div className="col-6 TextCenter">
            <p>
              Next choose the primary design features on the flag. Does it have
              stripes? An animal? (People count as animals!) Does it have some
              sort of text displayed prominently?
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

        <div className="row borderlands">
          <div className="col-1">
            <p id="red" className="BlackText">
              Red
            </p>
          </div>
          <div className="col-1">
            <p id="orange" className="BlackText">
              Orange
            </p>
          </div>
          <div className="col-1">
            <p id="yellow" className="BlackText">
              Yellow
            </p>
          </div>
          <div className="col-1">
            <p id="green" className="BlackText">
              Green
            </p>
          </div>
          <div className="col-1">
            <p id="blue" className="BlackText">
              Blue
            </p>
          </div>
          <div className="col-1 ColBorderlands">
            <p> </p>
          </div>
          <div className="col-1">
            <p id="stripes" className="BlackText">
              Stripes
            </p>
          </div>
          <div className="col-1">
            <p id="text" className="BlackText">
              Text
            </p>
          </div>
          <div className="col-1">
            <p id="animal" className="BlackText">
              Animal
            </p>
          </div>
          <div className="col-1">
            <p id="symbol" className="BlackText">
              Symbol
            </p>
          </div>
        </div>
        <div className="row borderlands">
          <div className="col-1">
            <p id="purple" className="BlackText">
              Purple
            </p>
          </div>
          <div className="col-1">
            <p id="pink" className="BlackText">
              Pink
            </p>
          </div>
          <div className="col-1">
            <p id="black" className="BlackText">
              Black
            </p>
          </div>
          <div className="col-1">
            <p id="white" className="BlackText">
              White
            </p>
          </div>
          <div className="col-2 ColBorderlands">
            <p></p>
          </div>
        </div>
        <div className="row">
          <div className="col CenterThisButton">
            <Button onClick={() => setSearchState(true)}>
              Search Those Flags!
            </Button>
          </div>
        </div>
        <div className="row InfoDrone">
          <p>
            Some flags have more than one color scheme! For those flags all
            possible colors are listed, but only one will be shown. So if you
            see a flag that doesn't seem to match your parameters that's likely
            why! (For instance: Rome's standard can be found in Red and Purple.
            The red one is shown, but purple is still listed as a valid color
            for it.)
          </p>
        </div>
        <div className="Space">
          <p>
            Clicking on a flag below will bring you to the wikipedia article for
            that flag's country!
          </p>
        </div>
        <div className="row" id="space">
          {Finder(
            searchState,
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
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
