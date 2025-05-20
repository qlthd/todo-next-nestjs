import React from 'react';
import { TodoSelectionProps } from "@/components/TodoSelection.props";

export const TodoSelection = (props: TodoSelectionProps) => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-l-md rounded-r-md px-4 py-2 w-full text-left">
            <label className="relative flex items-center cursor-pointer" htmlFor="html">
                <input name="framework" type="radio"
                       className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                       id="html"/>
                <h2
                    className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </h2>
            </label>
            <label className="ml-2 text-slate-800 cursor-pointer text-lg" htmlFor="html">{props.name}</label>
        </div>
    );
}