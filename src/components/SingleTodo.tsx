import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { Todo } from "../models/models";
import Accordion from 'react-bootstrap/Accordion';

const SingleTodo: React.FC<{
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (


    <form
      onSubmit={(e) => handleEdit(e, todo.id)}

      className={`todos__single`}
    >

      <>
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header>New post</Accordion.Header>
            <Accordion.Body>
              {edit ? (
                <input
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  style={{ padding: "10px 20px", border: "1px solid #ccc" }}
                  ref={inputRef}
                />
              ) :
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{todo.todo}</span>
                  <div>
                    <span
                      style={{cursor:"pointer"}}
                      onClick={() => {
                        if (!edit && !todo.isDone) {
                          setEdit(!edit);
                        }
                      }}
                    >
                      <AiFillEdit />
                    </span>
                    <span style={{cursor:"pointer", marginLeft:"10px"}} onClick={() => handleDelete(todo.id)}>
                      <AiFillDelete />
                    </span>

                  </div>
                </div>
              }
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </>


    </form>


  );
};

export default SingleTodo;
