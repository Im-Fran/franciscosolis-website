import {useEffect, useState} from "react";
import {clsx} from "clsx";
import {InputProps} from "@/js/types/Form/Input.d";

const Input = ({id, name, label, placeholder, type, defaultValue, className, useForm, ...rest}: InputProps & {
    useForm?: any
}) => {

    const [value, setValue] = useState(defaultValue || '');

    useEffect(() => {
        useForm?.setData(name, value)?.forgetError(name)
    }, [value, name]);

    return <label className={clsx(["w-full", className])} htmlFor={id}>
        <span className={"text-neutral-800 dark:text-neutral-100"}>{label}</span>
        <input
            id={id}
            name={name}
            className={"text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-700 w-full p-2 border border-neutral-100 dark:border-neutral-700 rounded-md my-1 focus:outline-none focus:border-indigo-500 dark:focus:border-primary-500 transition-colors duration-200 ease-in-out"}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value || '')}
            {...rest}
        />
        {useForm?.validating ? <span className={"text-blue-400"}>Validating...</span> : useForm?.invalid(name) && <span className={"text-red-400"}>{useForm.errors[name]}</span>}
    </label>
};

export default Input;
