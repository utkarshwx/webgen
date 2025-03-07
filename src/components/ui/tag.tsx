import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { cn } from "../../lib/utils";

interface Option {
  label: string;
  value: string;
}
const tagOptions:Option[] = [
  { value: 'important', label: 'Important' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'personal', label: 'Personal' },
  { value: 'work', label: 'Work' }
];
interface TagProps {
  value: string[];
  onChange: (tags: string[]) => void;
  options?: Option[];
  className?: string;
  placeholder?: string;
}

export const TagInput: React.FC<TagProps> = ({
  value,
  onChange,
  options = tagOptions,
  className,
  placeholder = "Select or create tags..."
}) => {
  const handleChange = (newValue: readonly Option[]) => {
    onChange(newValue.map(item => item.value));
  };

  return (
    <CreatableSelect
      isMulti
      isClearable
      options={options}
      value={value.map(tag => ({ value: tag, label: tag }))}
      onChange={handleChange}
      className={cn("w-full md:w-64", className)}
      classNamePrefix="select"
      placeholder={placeholder}
      formatCreateLabel={(inputValue) => `Create tag "${inputValue}"`}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: 'var(--bg-color, transparent)',
          borderColor: 'var(--border-color, rgb(209 213 219))',
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? 'var(--hover-color, #e5e7eb)' : 'transparent',
          color: 'var(--text-color, #374151)',
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: 'var(--tag-bg, #e5e7eb)',
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: 'var(--bg-color, white)',
        }),
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: 'var(--primary-color, #3b82f6)',
        },
      })}
    />
  );
};