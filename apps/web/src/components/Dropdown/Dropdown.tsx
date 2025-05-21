import React, { useState } from 'react';
import Select, { MultiValue, StylesConfig } from "react-select";
import { DropdownProps } from "@/components/Dropdown/Dropdown.types";

type OptionType = {
    id: number;
    name: string;
    colorCode: string;
};

type SelectOption = {
    value: number;
    label: string;
    colorCode: string;
};

const customStyles: StylesConfig<SelectOption, true> = {
    multiValue: (styles, { data }) => ({
        ...styles,
        backgroundColor: data.colorCode,
        color: 'black',
    }),
    multiValueLabel: (styles) => ({
        ...styles,
        color: 'black',
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: 'black',
        ':hover': {
            backgroundColor: 'darkgray',
            color: 'white',
        },
    }),
};

export const Dropdown = (props: DropdownProps) => {
    const [selectedOption, setSelectedOption] = useState<MultiValue<SelectOption>>([]);

    const mappedOptions: SelectOption[] = props.options.map((opt: OptionType) => ({
        value: opt.id,
        label: opt.name,
        colorCode: opt.colorCode,
    }));

    const handleChange = (newValue: MultiValue<SelectOption>) => {
        setSelectedOption(newValue);
    };

    return (
        <Select
            options={mappedOptions}
            onChange={handleChange}
            placeholder="Choose a category"
            isMulti
            value={selectedOption}
            styles={customStyles}
        />
    );
};
