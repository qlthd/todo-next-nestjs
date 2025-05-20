"use client";
import { useEffect, useState } from "react";
import {Configuration, TodoApi} from "../../api-client/src";
import { Todo } from "../../api-client/src/models/Todo";
import { TodoSelection } from "@/components/TodoSelection";

export default function Home() {
    const id = 1;
    const [todo, setTodo] = useState<Todo>();

    useEffect(() => {
        const fetchTodo = async () => {
            const config = new Configuration({ basePath: "http://localhost:3003" });
            const api = new TodoApi(config);
            try {
                const response = await api.findOne({ id: "dee369ff-7519-4c0e-b1d1-658a310881f9" });
                setTodo(response);
            } catch (err) {
            }
        };

        fetchTodo();
    }, []);


    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-10">
          <h1 className="text-2xl text-black font-bold mb-4">Welcome to Todo App</h1>
          {todo && <TodoSelection name={todo.title} />}
      </div>
    );
}
