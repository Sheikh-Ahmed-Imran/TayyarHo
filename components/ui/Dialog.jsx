import React, { useState } from "react";

const Dialog = ({ trigger, title, children, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        {trigger}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={() => { setOpen(false); onClose?.(); }} className="text-gray-500 hover:text-black">
                &times;
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;