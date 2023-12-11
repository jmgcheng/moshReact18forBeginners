import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // better to be called afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My Apppppp";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
