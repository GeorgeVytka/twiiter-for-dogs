import React , { useState } from 'react';
import { useForm } from "react-hook-form";
import { createTwitterEntry } from './API';
//



import './App.css';

function TwitterEntry() {

  const { register, handleSubmit, watch, errors } = useForm();
  const [count, setCount] = useState(0);
  
  const onSubmit = async (data) => {
      await createTwitterEntry(data);
  }

  

  return (
    <div>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="name" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="content" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" onClick={() => setCount(count + 1)}/>
    </form>

    </div>
  );

}

export default TwitterEntry;
