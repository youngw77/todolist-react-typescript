import React, {useState} from 'react';

interface item {
    id:number;
    text:string;
    completed:boolean;
}

export const TodoList:React.FC = () => {
    const [todo, setTodo] = useState<item[]>([
        {id:1, text:"learn typescript", completed: false},
        {id:2, text:"learn react", completed: false},
    ])
    const [input, setInput] = useState<string>("");

    const handleToggle = (id:number) => {
        setTodo(
            todo.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            })
        )
    }
    const handleClick = () => {
        const newTodo: item = {id:Date.now(), text:input, completed:false}
        setTodo([...todo, newTodo]);
        setInput("");
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    
  return (
    <div className='main-container'>
        <h1>Todo List</h1>
        <ul>
            {todo.map((todo) => (
                <li 
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                style={{textDecoration: todo.completed ? "line-through" : "none"}}
                >{todo.text}</li>
            ))}
        </ul>
        <input 
        type="text" 
        value={input}
        placeholder='Add todo item'
        // onChange={(e) => setInput(e.currentTarget.value)}
        onChange={handleInputChange}
        />
        <button
        onClick={handleClick}
        >Add</button>
    </div>
  )
}
