import { Card } from "react-bootstrap";
import flagArray from "../MasterList";
import { createRoot } from "react-dom/client";
import yellowState from "./HomePage";

function Finder() {
  if (yellowState) {
    const yellowResults = flagArray.filter((e) => {
      return e.colors.includes("Yellow");
    });
    console.log(yellowResults);
    const flagParade = yellowResults.map((result) => (
      <div className="col-1">
        <Card key={result.id}>
          <Card.Link href={result.link}>
            <Card.Img src={result.image} className="mx-auto" />
            <Card.Title className="text-center">{result.name}</Card.Title>
          </Card.Link>
        </Card>
      </div>
    ));
    const container = document.getElementById("space");
    const root = createRoot(container);
    root.render(flagParade);
  }
}

// function Finder() {
//   const flagParade = flagArray.map((result) => (
//     <div className="col-1">
//       <Card key={result.id}>
//         <Card.Link href={result.link}>
//           <Card.Img src={result.image} className="mx-auto" />
//           <Card.Title className="text-center">{result.name}</Card.Title>
//         </Card.Link>
//       </Card>
//     </div>
//   ));
//   const container = document.getElementById("space");
//   const root = createRoot(container);
//   root.render(flagParade);
// }

export default Finder;
