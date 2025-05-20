import {TextArea} from "@/components/TextArea/TextArea";
import {TextInput} from "@/components/TextInput/TextInput";

export default function NewPage() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-10 space-y-2">
            <h1 className="text-2xl font-bold text-black">Add a task</h1>
            <div>
                <TextInput label="Title"/>
                <TextArea label="Description"/>
            </div>

        </div>
    );
}