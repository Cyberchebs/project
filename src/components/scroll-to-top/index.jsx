import useFetch from "../useFetch";
import { useRef } from "react";

export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (error) {
    return <h1>Error occured please try again</h1>;
  }
  if (loading) {
    <h1>Loading please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top and bottom feature</h1>
      <h3>This is the top Section</h3>
      <button onClick={handleScrollToBottom}>scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map(item => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>this is the bottom</h3>
    </div>
  );
}
