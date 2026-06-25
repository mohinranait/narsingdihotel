"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData, contactSchema } from "@/components/validations/contact";


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully");
        reset();
      } else {
        alert("Failed to send message");
      }
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            {...register("name")}
            placeholder="NAME"
            className="h-10  border-gray-300 text-gray-600 rounded-none"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <Input
            {...register("email")}
            placeholder="EMAIL"
            className="h-10 border-gray-300 text-gray-600 rounded-none"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <Input
            {...register("phone")}
            placeholder="PHONE"
            className="h-10 border-gray-300 text-gray-600 rounded-none"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <Input
            {...register("subject")}
            placeholder="SUBJECT"
            className="h-10 border-gray-300 text-gray-600 rounded-none"
          />
          <p className="text-red-500 text-sm">{errors.subject?.message}</p>
        </div>
      </div>

      <div>
        <Textarea
          {...register("message")}
          rows={6}
          placeholder="MESSAGE"
          className="border-gray-300 text-gray-600 rounded-none"
        />
        <p className="text-red-500 text-sm">
          {errors.message?.message}
        </p>
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="bg-[#A70F2E] cursor-pointer px-8 h-10 rounded-none hover:bg-red-700 text-white"
      >
        {isSubmitting ? "Sending..." : "SEND YOUR MESSAGE"}
      </Button>
    </form>
  );
};

export default ContactForm;