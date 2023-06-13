"use client";
import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";
const CountrySelect = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <Select
      onChange={(value) => onChange(value)}
      placeholder="AnyWhere"
      options={getAll}
      value={value}
      isClearable
      formatOptionLabel={(option) => (
        <div
          className="
        flex flex-row items-center gap-3"
        >
          <div>
            <p>{option.flag}</p>
          </div>
          <div>
            {option.label},
            <span className="text-neutral-500 ml-1">{option.region}</span>
          </div>
        </div>
      )}
      classNames={{
        control: () => "p-3 border-2",
      }}
    />
  );
};

export default CountrySelect;
