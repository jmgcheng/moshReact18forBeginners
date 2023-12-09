import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        dignissimos hic officia nulla nesciunt deserunt architecto tempora
        delectus, enim atque rem. Fugiat delectus nesciunt magnam temporibus,
        repellat unde ipsa eos! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Voluptatibus dignissimos hic officia nulla nesciunt
        deserunt architecto tempora delectus, enim atque rem. Fugiat delectus
        nesciunt magnam temporibus, repellat unde ipsa eos! Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Voluptatibus dignissimos hic
        officia nulla nesciunt deserunt architecto tempora delectus, enim atque
        rem. Fugiat delectus nesciunt magnam temporibus, repellat unde ipsa eos!
      </ExpandableText>
    </div>
  );
}

export default App;
