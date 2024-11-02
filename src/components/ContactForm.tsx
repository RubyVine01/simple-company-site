"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormData, FormInput } from "./FormField";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";

const ContactForm: React.FC = () => {
  const methods = useForm<FormData>();
  const router = useRouter();

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setServerError(null); // Сброс общего сообщения об ошибке перед отправкой

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        router.push(
          `/contact/successRes?message=${encodeURIComponent(result.message)}`
        );
      } else {
        // Обрабатываем ошибки с сервера
        const errorData = await response.json();

        // Общая ошибка
        setServerError(
          errorData.error ||
            "Failed to submit the form. Please check your input."
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setServerError("An error occurred. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        width: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        height: "calc(100vh - 95px)",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", marginTop: "160px", fontSize: "4.5rem" }}
      >
        Only CTA on the page
      </Typography>

      <Box
        sx={{
          border: "1px solid #e0e0e0",
          marginTop: "35px",
          padding: "25px",
          borderRadius: "8px",
          maxWidth: "320px",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput name="name" label="Name" maxLength={50} required />
            <FormInput
              name="email"
              label="Email"
              required
              pattern={{
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              }}
            />
            <FormInput
              name="message"
              label="Message"
              multiline
              rows={3}
              maxLength={200}
              required
              customHeight="80px"
              customPadding="0"
            />

            <SubmitButton />
            {serverError && (
              <Typography
                color="error"
                sx={{ marginTop: "10px", textAlign: "center" }}
              >
                {serverError}
              </Typography>
            )}
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default ContactForm;
