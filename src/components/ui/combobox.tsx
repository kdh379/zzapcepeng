"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";


interface ComboboxProps<T> extends 
    Pick<PopoverPrimitive.PopoverContentProps, "side" | "align">{
    itemList: Item<T>[];
    children: React.ReactNode;
    renderItem: ( item: Item<T>, active: boolean ) => React.ReactNode;
    
    placeholder?: string;
    className?: string;
    emptyMessage?: string;
    onChange?: ( value: string ) => void;
}

type Item<T> = {
    value: string;
} & T;

const Combobox = React.forwardRef(
  <T extends unknown>(
    props: ComboboxProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const {
      itemList,
      className,
      children,
      emptyMessage = "",
      side = "bottom",
      align = "start",
      placeholder,
      renderItem } = props;

    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  
    return <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        className={cn("overflow-y-auto", className, children)}
        side={side}
        align={align}
      >
        <Command ref={ref}>
          <CommandInput placeholder={placeholder}  />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup className="overflow-y-auto">
            {itemList.map((item, index) => 
              <CommandItem
                key={index}
                value={item.value}
                onSelect={() => {
                  setOpen(false);
                  setSelectedItem(item.value);
                  props.onChange?.(item.value);
                }}
              >
                {renderItem(item, selectedItem === item.value)}
              </CommandItem>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>;
  });

Combobox.displayName = "Combobox";

export default Combobox as <T extends unknown>(props: ComboboxProps<T> & { ref?: React.Ref<HTMLDivElement> }) => JSX.Element;