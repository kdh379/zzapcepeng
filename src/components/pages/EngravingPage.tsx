"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../ui/button";
import Combobox from "../ui/combobox";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

const formSchema = z.object({
  eng1: z.string().min(1),
  eng2: z.string().min(1),
  eng3: z.string().min(1),
  eng4: z.string().min(1),
  eng5: z.string().min(1),
});

const itemList = [
  { value: "eng1", label: "eng1" },
  { value: "eng2", label: "eng2" },
  { value: "eng3", label: "eng3" },
  { value: "eng4", label: "eng4" },
  { value: "eng5", label: "eng5" },
];

export default function EngravingPage() {

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      eng1: "",
      eng2: "",
      eng3: "",
      eng4: "",
      eng5: "",
    },
  });

  return <Form {...form}>
    <FormField
      name="eng1"
      control={form.control}
      render={
        ({ field }) => (
          <FormItem>
            <FormControl>
              <Combobox
                itemList={itemList}
                renderItem={(item) => item.label}
                {...field}
              >
                <Button type="button" variant="default">eng1</Button>
              </Combobox>
            </FormControl>
          </FormItem>
        )
      } />
  </Form>;
}