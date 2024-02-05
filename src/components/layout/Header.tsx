"use client";

import { LogInIcon, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  apiKey: z.string().min(1),
});

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return <Button variant={"ghost"} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    <SunIcon className={cn(" w-6 h-6", theme === "dark" && "hidden")} />
    <MoonIcon className={cn("hidden w-6 h-6", theme === "dark" && "block")} />
  </Button>;

}

export default function Header() {
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      apiKey: "",
    },
  });

  return <header className="flex items-center mx-auto py-4">
    <Link href="/">
      <span className="text-2xl text-foreground font-extrabold">Lcalc</span>
    </Link>
    <div className="hidden w-full items-center tablet:flex">
      <nav className="flex items-center mx-8">
        <ul className="flex items-center gap-x-4 ml-4">
          <li>
            <Link href="/engraving">
              <Button
                type="button"
                className={cn("text-muted-foreground", pathname === "/engraving" && "text-primary")}
                variant="ghost"
                size="sm"
              >
              각인 계산기
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center ml-auto gap-x-4">
        <Form {...form}>
          <FormField
            name="apiKey"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" className="w-64" placeholder="API 키를 입력해주세요." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" size="sm">
            <LogInIcon className="size-4" />
          </Button>
        </Form>
        <ToggleTheme />
      </div>
    </div>
  </header>;
}