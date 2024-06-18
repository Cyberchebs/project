import { useRef, useState } from "react";
import useoutsideClick from ".";

export default function UseonOnclickoutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useoutsideClick(ref, () => setShowContent(false));

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>this is a random center</h1>
          <p>please click outside of this to close this. it</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>show Content</button>
      )}
    </div>
  );
}
