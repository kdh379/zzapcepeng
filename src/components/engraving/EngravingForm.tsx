import { Check, Search } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import Combobox from "../ui/combobox";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

interface TargetFormProps {
    itemList: { value: string, label: string }[];
}

export default function EngravingForm( props: TargetFormProps ) {

  const { itemList } = props;

  const form = useFormContext();

  const { fields } = useFieldArray({
    control: form.control,
    name: "targetEngList",
  });

  return <Card className="grid grid-cols-1 tablet:grid-cols-2">
    <div>
      <CardHeader>
        <h1 className="font-bold">Target Engraving</h1>
      </CardHeader>
      <CardContent className="space-y-2 pr-0">
        {
          fields.map((field, index) => (
            <div key={field.id}>
              <FormLabel>Eng{index+1}</FormLabel>
              <div className="flex items-center space-x-2">
                <FormField
                  name={`targetEngList.${index}.eng`}
                  control={form.control}
                  render={
                    ({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Combobox
                            placeholder="Select Eng"
                            itemList={itemList}
                            renderItem={(item, isActive) => (
                              <>
                                <span>{item.label}</span>
                                <Check className={cn(
                                  "w-4 h-4 ml-auto invisible",
                                  isActive && "visible"
                                )} />
                              </>
                            )}
                            {...field}
                          >
                            <Button 
                              type="button"
                              className="w-full justify-start"
                              variant="outline"
                            >
                              {field.value || "Select Eng"}
                              <Search className="w-4 h-4 ml-auto" />
                            </Button>
                          </Combobox>
                        </FormControl>
                      </FormItem>
                    )
                  } />
                <FormField
                  name={`targetEngList.${index}.level`}
                  control={form.control}
                  render={
                    ({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="w-14"
                            disabled={form.getValues().targetEngList[index].eng === ""}
                            {...field} />
                        </FormControl>
                      </FormItem>
                    )
                  } />
              </div>
            </div>
          ))
        }
      </CardContent>
    </div>
    <div>
      <CardHeader>
        <h1 className="font-bold">Search Ranking</h1>
      </CardHeader>
      <CardContent>
        <Combobox
          className="w-full h-80"
          itemList={Array.from({ length: 10 }).map((_, index) => ({
            value: `Eng${index + 1}`,
            label: `Eng${index + 1}`,
          }))}
          placeholder="Select a Job Eng"
          renderItem={(item) => (
            <span>{item.label}</span>
          )}
        >
          <Button
            type="button"
            className="w-full justify-start mb-2"
            variant="outline"
          >
            <span>Select a Job Eng</span>
            <Search className="w-4 h-4 ml-auto" />
          </Button>
        </Combobox>
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <Button
                type="button"
                className="w-full justify-start"
                variant="ghost"
              >
                <span>{index + 1}. Eng</span>
                <span className="ml-auto">33331</span>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
  </Card>;
}