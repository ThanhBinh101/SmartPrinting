const Selection = ({ id, title, options, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="flex">
      <label htmlFor={id} className="flex-1">
        {title}
      </label>
      <select
        name=""
        id={id}
        className="flex-1 rounded-[16px] border-[1px] border-secondary bg-thirdary p-2"
        value={state}
        onChange={handleChange}
      >
        <option value="auto">Auto</option>
        {(options || []).map((option, index) => (
          <option key={index} value={option.id}>
            {option.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selection;
