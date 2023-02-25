import React, { useRef } from "react";


interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
   
      onSubmit={(e) => {
        handleAdd(e);
 
      }}
    >
      <input
        type="text"
        placeholder="Enter a post"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{padding:"15px 30px ", width:"35%", marginTop:"15px", marginBottom:"20px"}}
      />
      <button type="submit" style={{padding:"16px 30px ", background:"blue", color:"#fff",border:"1px solid blue"}}>
        Post
      </button>
    </form>
  );
};

export default InputField;
