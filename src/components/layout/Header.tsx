"use client";

import { LogInIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  apiKey: z.string().min(1),
});

export default function Header() {
  const { setTheme } = useTheme();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      apiKey: "",
    },
  });

  return <header className="flex items-center max-w-desktop mx-auto py-4">
    <span className="text-2xl text-foreground font-extrabold">Lcalc</span>
    <div className="flex items-center ml-auto gap-x-4">
      <Form {...form}>
        <FormField
          name="apiKey"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" className="w-96" placeholder="API 키를 입력해주세요." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" size="sm">
          <LogInIcon className="size-4" />
        </Button>
      </Form>
      <Button className="dark:hidden" variant={"ghost"} onClick={() => setTheme("dark")}>
        <SunIcon className="w-6 h-6" />
      </Button>
      <Button className="hidden dark:block" variant={"ghost"} onClick={() => setTheme("light")}>
        <MoonIcon className="w-6 h-6" />
      </Button>
    </div>
  </header>;
}