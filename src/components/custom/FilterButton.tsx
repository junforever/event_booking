import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import FilterIcon from '@/assets/svg/filterIcon.svg?react';
import CustomCheckbox from '@/components/custom/CustomCheckbox';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface filters {
  value: string;
  label: string;
}

interface FilterButtonProps {
  filterButtonLabel: string;
  filters: filters[];
  handleFilters: (filter: string[]) => void;
}

const FormSchema = z.object({
  items: z.array(z.string()),
});

export function FilterButton({ filterButtonLabel, filters, handleFilters }: FilterButtonProps) {
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
          className="flex items-center gap-x-3 px-4.5 py-3.5 text-neutral-850 font-medium"
        >
          {filterButtonLabel}
          <FilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel className="text-slate-450 text-xs uppercase font-normal leading-18 pb-2 px-0">
          RFP status
        </DropdownMenuLabel>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem className="mb-4 gap-y-3">
                  {filters.map(item => (
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
            <Button
              type="submit"
              className="w-full bg-indigo-650 text-white hover:bg-indigo-800 rounded-sm"
            >
              Save
            </Button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
