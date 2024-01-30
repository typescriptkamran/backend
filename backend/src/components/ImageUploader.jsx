"use client";
import { deepStrictEqual } from "assert";
import React, { useState, ChangeEvent, FormEvent } from "react";

function Page() {
  let [file, setFile] = useState();

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set('file', file);
    const result = await fetch('@/api/upload', {
      method: 'POST',
      body: data
    } )
    console.log(result);
    
  }
      
    
  

  return (
    <div>
      <div>upload image</div>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) =>setFile(e.target.files?.[0])}
          />  
        <button type="submit" className="bg-green-500 py-2 px-3">
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default Page;
