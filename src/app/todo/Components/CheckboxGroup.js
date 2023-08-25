import CheckboxContext from "./CheckboxContext";

const CheckboxGroup = ({ children, values, onChange }) => {
  const isChecked = (value) => {
    values.includes(value);
  };
  const toggleValue = ({ checked, value }) => {
    checked
      ? onChange(values.concat(value))
      : onChange(values.filter((v) => v !== value));
  };

  return (
    <fieldset className="flex">
      <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </fieldset>
  );
};

export default CheckboxGroup;
