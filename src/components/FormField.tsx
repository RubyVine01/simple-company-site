import React from "react";
import { Typography, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormInputProps {
  name: keyof FormData;
  label: string;
  required?: boolean;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
  pattern?: { value: RegExp; message: string };
  customHeight?: string;
  customPadding?: string;
}

const commonInputStyles = {
  margin: "5px 0",
  "& .MuiTextField-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
  },
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  required,
  maxLength,
  multiline,
  rows,
  pattern,
  customHeight,
  customPadding,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <Typography variant="body1">{label}</Typography>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: required ? `${label} is required` : false,
          maxLength: maxLength
            ? { value: maxLength, message: `Max ${maxLength} characters` }
            : undefined,
          pattern: pattern,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="Value"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline={multiline}
            rows={rows}
            error={!!errors[name]}
            helperText={errors[name]?.message || " "}
            sx={{
              ...commonInputStyles,
              "& .MuiOutlinedInput-root": {
                height: customHeight || "40px",
              },
              "& .MuiOutlinedInput-input": {
                padding: customPadding || "8px",
              },
            }}
          />
        )}
      />
    </>
  );
};

export { FormInput };
