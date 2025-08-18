import { type ChangeEvent, useId, useState } from 'react';
import CheckBoxIcon from '@/assets/svg/checkBoxIcon.svg?react';
import { cn } from '@/lib/utils';

export interface CustomCheckboxProps {
  id?: string;
  label?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function CustomCheckbox({
  id,
  label,
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
}: CustomCheckboxProps) {
  const autoId = useId();
  const inputId = id ?? `chk-${autoId}`;

  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false);
  const currentChecked = isControlled ? (checked as boolean) : internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalChecked(e.target.checked);
    onCheckedChange?.(e.target.checked);
  };

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'inline-flex items-center gap-2 select-none',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      )}
    >
      {/* Native input for accessibility */}
      <input
        id={inputId}
        type="checkbox"
        className="peer sr-only"
        checked={currentChecked}
        onChange={handleChange}
        disabled={disabled}
      />

      {/* Visual box */}
      <span
        className={cn(
          'relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px]',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-650',
        )}
        aria-hidden
      >
        {currentChecked ? (
          <CheckBoxIcon className="h-[18px] w-[18px]" />
        ) : (
          <span className="h-[18px] w-[18px] rounded-[4px] border border-slate-350 bg-white" />
        )}
      </span>

      {label ? (
        <span className="text-neutral-850 font-semibold leading-18">{label}</span>
      ) : null}
    </label>
  );
}

export default CustomCheckbox;
