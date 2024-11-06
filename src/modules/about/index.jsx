import React, { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState([]);
  // const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className=""></div>
    </>
  );
}
