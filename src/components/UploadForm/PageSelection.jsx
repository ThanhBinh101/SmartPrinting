const PageSelection = ({ state, setState }) => {
  const handleClickCheckBox = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="flex">
      <label htmlFor="" className="flex-1">
        Pages
      </label>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <input
            type="radio"
            name="pages"
            id="all"
            className="mr-3"
            onChange={handleClickCheckBox}
            value={"all"}
            checked={state === "all" ? "checked" : ""}
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <input
              type="radio"
              name="pages"
              id="range"
              className="mr-3"
              onChange={handleClickCheckBox}
              value={"range"}
              checked={state === "range" ? "checked" : ""}
            />
            <label htmlFor="range">Range from</label>
          </div>
          {state === "range" ? (
            <div className="flex items-center gap-4">
              <input
                className="w-[60px] rounded-[16px] border-[1px] border-secondary bg-thirdary p-2"
                type="number"
                name=""
                id=""
              />
              to
              <input
                className="w-[60px] rounded-[16px] border-[1px] border-secondary bg-thirdary p-2"
                type="number"
                name=""
                id=""
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <input
              type="radio"
              name="pages"
              id="selection"
              className="mr-3"
              onChange={handleClickCheckBox}
              value={"selection"}
              checked={state === "selection" ? "checked" : ""}
            />
            <label htmlFor="selection">Selection</label>
          </div>
          {state === "selection" ? (
            <div className="flex-1">
              <input
                type="text"
                className="w-full rounded-[16px] border-[1px] border-secondary bg-thirdary p-2"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageSelection;
