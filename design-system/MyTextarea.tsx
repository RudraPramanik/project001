import clsx from "clsx";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type MyTextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
};

const MyTextarea: FC<MyTextareaProps> = ({
  name,
  errors,
  label,
  placeholder,
  register,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-sm text-primary-600 dark:text-primary-300"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col space-y-2">
        <textarea
          placeholder={placeholder}
          className={clsx(
            "p-2 text-sm rounded-md focus:outline-none border-[1px] h-24",
            errors
              ? "placeholder-[#a56565] text-gray-700 bg-red-100 border-red-200"
              : "text-gray-700 bg-water-100 border-water-200",
          )}
          {...register(name, { required: true })}
          {...props}
        />
        {errors && (
          <span className="px-1 text-sm text-red-500">{errors?.message}</span>
        )}
      </div>
    </div>
  );
};

export default MyTextarea;
