import { TextAreaProps } from "../TextArea/TextArea.types";


export const TextInput = (props: TextAreaProps) => {

    return (
        <label htmlFor={props.label}>
            <span className="text-sm font-medium text-gray-700"> {props.label} </span>
            <input
                type="text"
                id={props.label}
                className="mt-0.5 w-full rounded border-gray-300 border-1 shadow-sm sm:text-sm"
            />
        </label>
    )
}