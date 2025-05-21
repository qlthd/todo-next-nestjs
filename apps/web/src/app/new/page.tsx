"use client";
import {TextArea} from "@/components/TextArea/TextArea";
import {TextInput} from "@/components/TextInput/TextInput";
import {Dropdown} from "@/components/Dropdown/Dropdown";
import {useEffect, useState} from "react";
import {CategoriesApi, Configuration, Category} from "../../../api-client/src";

export default function NewPage() {

    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {
        const fetchTodo = async () => {
            const config = new Configuration({ basePath: "http://localhost:3003" });
            const api = new CategoriesApi(config);
            try {
                console.log("response1");
                const response = await api.findAll();
                console.log("response2");
                setCategories(response);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchTodo();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-10 space-y-2">
            <h1 className="text-2xl font-bold text-black">Add a task</h1>
            <div>
                <TextInput label="Title"/>
                <TextArea label="Description"/>
                {categories && <Dropdown options={categories}/>}
            </div>

        </div>
    );
}