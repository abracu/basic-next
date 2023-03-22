"use client";
import { useState } from "react";

function page() {

  const [task,setTask] = useState()

  const handleChange = (e) => {
    console.log('Cambiado..')
  }

  return (
    <form>
      <input name="title" placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea name="desciption" placeholder="Write a description"
         onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}

export default page;