import { TextAreaProps } from "./TextArea.types";


export const TextArea = (props: TextAreaProps) => {

    return (
        <label htmlFor={props.label}>
            <span className="text-sm font-medium text-gray-700"> {props.label} </span>
            <textarea
                id={props.label}
                className="mt-0.5 w-full resize-none rounded border-gray-300 border-1 shadow-sm sm:text-sm"
                rows={4}
            ></textarea>
        </label>
    )
}