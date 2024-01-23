"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";


const formSchema = z.object({
  apiKey: z.string().min(1),
});

export default function HomePage() {

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      apiKey: "",
    },
  });

  return <></>;
}