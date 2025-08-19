import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import FilterIcon from '@/assets/svg/filterIcon.svg?react';
import CustomCheckbox from '@/components/custom/CustomCheckbox';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { IFilterButtonValues, HandleFilterButtonValues } from '@/types/IData';

interface FilterButtonProps {
  filterButtonLabel: string;
  filterOptions: IFilterButtonValues[];
  handleFilters: HandleFilterButtonValues;
}

const FormSchema = z.object({
  items: z.array(z.string()),
});

export function FilterButton({
  filterButtonLabel,
  filterOptions,
  handleFilters,
}: FilterButtonProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    handleFilters(data.items);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center max-w-28 gap-x-3 text-neutral-850 font-medium h-12 filter-button shadow-none"
        >
          {filterButtonLabel}
          <FilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 p-3">
        <DropdownMenuLabel className="text-slate-450 text-xs uppercase font-normal leading-18 pb-2 pt-0 px-0">
          RFP status
        </DropdownMenuLabel>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem className="mb-4 gap-y-3">
                  {filterOptions.map(item => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.value} className="flex flex-row items-center gap-2">
                            <FormControl>
                              <CustomCheckbox
                                checked={(field.value ?? []).includes(item.value)}
                                label={item.label}
                                className="capitalize"
                                onCheckedChange={checked => {
                                  const prev = field.value ?? [];
                                  return checked
                                    ? field.onChange([...prev, item.value])
                                    : field.onChange(prev.filter(value => value !== item.value));
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DropdownMenuItem className="p-0">
              <Button
                type="submit"
                className="w-full bg-indigo-650 text-white hover:bg-indigo-800 rounded-sm"
              >
                Save
              </Button>
            </DropdownMenuItem>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
