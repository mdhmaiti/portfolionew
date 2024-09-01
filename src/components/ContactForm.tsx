"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type FormValues = {
  Name: string;
  Email: string;
  Phone: string;
  Country: string;
  State: string;
  Message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz1LyUdAOCG-Y7cfVRFpyciZESoJVEZHaYhpqXBXebyRhGDBPcooryeOSeFeHL4QehkPg/exec",
      {
        method: "POST",
        body: new URLSearchParams(data as any),
      },
    );
    const result = await response.json();
    if (result.status === "success") {
      alert("Message sent successfully!");
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col w-full max-w-lg mx-auto space-y-6 p-6 bg-sky-100/25   rounded-md  shadow-md "
    >
      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="Name" className="mb-2  ">
          Name
        </Label>
        <Input
          id="Name"
          placeholder="Your name"
          {...register("Name", { required: true, maxLength: 50 })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.Name && (
          <span className="text-sm text-red-500">
            Name is required and should not exceed 50 characters
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="Email" className="mb-2 ">
          Email
        </Label>
        <Input
          id="Email"
          type="email"
          placeholder="Your email address"
          {...register("Email", { required: true, maxLength: 30 })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.Email && (
          <span className="text-sm text-red-500">
            Email is required and should not exceed 30 characters
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="Phone" className="mb-2 ">
          Phone
        </Label>
        <Input
          id="Phone"
          type="text"
          placeholder="Your phone number"
          {...register("Phone", { required: true, maxLength: 16 })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.Phone && (
          <span className="text-sm text-red-500">
            Phone is required and should not exceed 16 characters
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="Country" className="mb-2">
          Country
        </Label>
        <Input
          id="Country"
          placeholder="Your country"
          {...register("Country", { required: true, maxLength: 50 })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.Country && (
          <span className="text-sm text-red-500">
            Country is required and should not exceed 50 characters
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="State" className="mb-2 ">
          State
        </Label>
        <Input
          id="State"
          placeholder="Your state"
          {...register("State", { required: true, maxLength: 16 })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.State && (
          <span className="text-sm text-red-500">
            State is required and should not exceed 50 characters
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 ">
        <Label htmlFor="Message" className=" ">
          Message
        </Label>
        <Textarea
          id="Message"
          placeholder="Your message"
          {...register("Message", { required: true, maxLength: 1000 })}
          className="w-full p-2 border border-gray-300 rounded h-32"
        />
        {errors.Message && (
          <span className="text-sm text-red-500">
            Message is required and should not exceed 1000 characters
          </span>
        )}
      </div>

      <Button type="submit" className="w-full py-2 px-4">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
