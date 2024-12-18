/* eslint-disable react/prop-types */
import { BUTTON_MAINTAIN } from "../../../libs/constant";
import Button from "../../Button";
import React, { useState } from "react";
import axios from "axios";

const PrinterMaintainButton = ({
  selectedPrinter,
  setSelectedPrinter,
  setStartDate,
  setEndDate,
  printerList,
  setPrinterList,
  filteredPrinterList,
  setFilteredPrinterList,
  id,
}) => {
  const [showPopUp, setshowPopup] = useState(false);
  const [status, setStatus] = useState("");
  const [maintain, setMaintain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddMaintain = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!id) {
      setError("Printer ID is required.");
      return;
    }
    setLoading(true); // Set loading state
    try {
      const response = await axios.post(
        `http://localhost:8386/maintainPrinter/${id}`,
        { status: status, maintain: maintain },
      );
      console.log("Maintain successfully", response.data);

      const data = response.data.newMaintain;

      const currentPrinter = printerList.find((item) => item.id === id);
      currentPrinter.maintains.push(data);

      const currentPrinterChange = JSON.parse(JSON.stringify(currentPrinter));

      setPrinterList(JSON.parse(JSON.stringify(printerList)));
      setFilteredPrinterList(JSON.parse(JSON.stringify(printerList)));
      setSelectedPrinter(currentPrinterChange);
      setStartDate("");
      setEndDate("");
      setshowPopup(false);
      setError(""); // Clear error message
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between text-[#957DAD]">
        {BUTTON_MAINTAIN.map((button) => (
          <Button
            key={button.title}
            title={button.title}
            textColor={button.textColor}
            backgroundColor={"button.backgroundColor"}
            width={"60"}
            onClickFunction={() => setshowPopup(true)}
          />
        ))}
      </div>
      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 rounded-lg bg-white p-8">
            <h2 className="mb-4 text-center text-xl font-bold">
              Maintain Printer {id}
            </h2>

            <form onSubmit={handleAddMaintain}>
              <div className="mb-4">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Next Maintain Day
                </label>
                <input
                  type="date"
                  id="maintain"
                  value={maintain}
                  onChange={(e) => setMaintain(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                  required
                />
              </div>
              {error && (
                <div className="mb-4 text-sm text-red-500">{error}</div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setshowPopup(false)} // Corrected: Wrap in a function
                  className="rounded bg-gray-300 p-2 text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-green-500 p-2 text-white"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Confirm maintained"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default PrinterMaintainButton;
