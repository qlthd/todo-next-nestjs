"use client";
import { useEffect, useState } from "react";
import {Configuration, TodoApi} from "../../../api-client/src";
import { Todo } from "../../../api-client/src/models/Todo";
import { TodoSelection } from "@/components/TodoSelection";
import { Button } from "@material-tailwind/react";
import {ActionButton} from "@/components/ActionButton/ActionButton";

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
        <div className="container mx-auto px-4 py-8 space-y-2">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl text-black font-bold mb-4">Task List</h1>
                <ActionButton text="Add a task" href="new"/>
            </div>

            {todo && <TodoSelection name={todo.title} />}
            {todo && <TodoSelection name={todo.title} />}
        </div>
    );
}
