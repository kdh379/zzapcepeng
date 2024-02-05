"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import EngravingForm from "../engraving/EngravingForm";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const engFormSchema = z.object({
  targetEngList: z.array(z.object({
    eng: z.string(),
    level: z.number().max(3),
  })),
});

type EngFormValue = z.infer<typeof engFormSchema>;

const itemList = [
  { value: "won", label: "won" },
  { value: "yae", label: "yae" },
  { value: "ju", label: "ju" },
  { value: "bad", label: "bad" },
  { value: "gi", label: "gi" },
];

const defaultValues: EngFormValue = {
  targetEngList: [
    {
      eng: "",
      level: 3,
    },
    {
      eng: "",
      level: 3,
    },
    {
      eng: "",
      level: 3,
    },
    {
      eng: "",
      level: 3,
    },
    {
      eng: "",
      level: 3,
    },
    {
      eng: "",
      level: 3,
    },
  ],
};

export default function EngravingPage() {

  const form = useForm<EngFormValue>({
    resolver: zodResolver(engFormSchema),
    defaultValues,
  });

  const onSubmit = (data: EngFormValue) => {
    console.log(data);
  };

  return <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 tablet:grid-cols-2">
          <EngravingForm itemList={itemList} />
        </div>
        <Button
          type="submit"
          size="lg"
          className="col-span-2"
        >
          Calculate
        </Button>
      </form>
    </Form>
  </div>;
}