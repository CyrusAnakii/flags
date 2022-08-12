import React from "react";
import { Card } from "react-bootstrap";
import flagArray from "../MasterList";

//NOTE TO SELF: VERY IMPORTANT TO USE VAR FOR RESULTS
function Finder(
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
) {
  if (redState) {
    var redResults = flagArray.filter((e) => {
      return e.colors.includes("Red");
    });
  }
  if (redState === false) {
    var redResults = flagArray;
  }
  if (orangeState) {
    var orangeResults = flagArray.filter((e) => {
      return e.colors.includes("Orange");
    });
  }
  if (orangeState === false) {
    var orangeResults = flagArray;
  }
  if (yellowState) {
    var yellowResults = flagArray.filter((e) => {
      return e.colors.includes("Yellow");
    });
  }
  if (yellowState === false) {
    var yellowResults = flagArray;
  }
  if (greenState) {
    var greenResults = flagArray.filter((e) => {
      return e.colors.includes("Green");
    });
  }
  if (greenState === false) {
    var greenResults = flagArray;
  }
  if (blueState) {
    var blueResults = flagArray.filter((e) => {
      return e.colors.includes("Blue");
    });
  }
  if (blueState === false) {
    var blueResults = flagArray;
  }
  if (purpleState) {
    var purpleResults = flagArray.filter((e) => {
      return e.colors.includes("Purple");
    });
  }
  if (purpleState === false) {
    var purpleResults = flagArray;
  }
  if (pinkState) {
    var pinkResults = flagArray.filter((e) => {
      return e.colors.includes("Pink");
    });
  }
  if (pinkState === false) {
    var pinkResults = flagArray;
  }
  if (blackState) {
    var blackResults = flagArray.filter((e) => {
      return e.colors.includes("Black");
    });
  }
  if (blackState === false) {
    var blackResults = flagArray;
  }
  if (whiteState) {
    var whiteResults = flagArray.filter((e) => {
      return e.colors.includes("White");
    });
  }
  if (whiteState === false) {
    var whiteResults = flagArray;
  }
  if (stripesState) {
    var stripesResults = flagArray.filter((e) => {
      return e.design.includes("Stripes");
    });
  }
  if (stripesState === false) {
    var stripesResults = flagArray;
  }
  if (textState) {
    var textResults = flagArray.filter((e) => {
      return e.design.includes("Text");
    });
  }
  if (textState === false) {
    var textResults = flagArray;
  }
  if (animalState) {
    var animalResults = flagArray.filter((e) => {
      return e.design.includes("Animal");
    });
  }
  if (animalState === false) {
    var animalResults = flagArray;
  }
  if (symbolState) {
    var symbolResults = flagArray.filter((e) => {
      return e.design.includes("Symbol");
    });
  }
  if (symbolState === false) {
    var symbolResults = flagArray;
  }
  const stepOne = redResults.filter((element) =>
    orangeResults.includes(element)
  );
  const stepTwo = stepOne.filter((element) => yellowResults.includes(element));
  const stepThree = stepTwo.filter((element) => greenResults.includes(element));
  const stepFour = stepThree.filter((element) => blueResults.includes(element));
  const stepFive = stepFour.filter((element) =>
    purpleResults.includes(element)
  );
  const stepSix = stepFive.filter((element) => pinkResults.includes(element));
  const stepSeven = stepSix.filter((element) => blackResults.includes(element));
  const stepEight = stepSeven.filter((element) =>
    whiteResults.includes(element)
  );
  const stepNine = stepEight.filter((element) =>
    stripesResults.includes(element)
  );
  const stepTen = stepNine.filter((element) => textResults.includes(element));
  const stepEleven = stepTen.filter((element) =>
    animalResults.includes(element)
  );
  const stepTwelve = stepEleven.filter((element) =>
    symbolResults.includes(element)
  );
  if (searchState) {
    return stepTwelve.map((result) => (
      <div className="col-1">
        <Card key={result.id}>
          <Card.Link href={result.link}>
            <Card.Img src={result.image} className="mx-auto" />
            <Card.Title className="text-center">{result.name}</Card.Title>
          </Card.Link>
        </Card>
      </div>
    ));
  }
  if (searchState === false) {
    return "";
  }
}

export default Finder;
