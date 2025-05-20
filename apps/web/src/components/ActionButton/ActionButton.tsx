import React from 'react';
import { AddButtonProps } from "@/components/ActionButton/ActionButton.types";

export const ActionButton = (props: AddButtonProps) => {

    return (
        <a
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href={props.href}
        >
            {props.text}
        </a>
    );
}
