import React, { useState } from "react";
import ClaimDetailsTab from "./ClaimDetailsTab";
import PaymentBreakdownTab from "./PaymentBreakdownTab";
import DocumentsTab from "./DocumentsTab";

const SideModal = ({ rowData, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md">
      <div className="flex flex-col h-full bg-white border-l border-gray-200 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Claim Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tab headers */}
        <div className="flex">
          <button
            className={`flex-1 py-2 text-sm font-medium text-center ${
              activeTab === 0
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Claim Details
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium text-center ${
              activeTab === 1
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Payment Breakdown
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium text-center ${
              activeTab === 2
                ? "text-gray-800 bg-gray-200"
                : "text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Documents
          </button>
        </div>

        {/* Tab content based on activeTab */}
        {activeTab === 0 && <ClaimDetailsTab rowData={rowData} />}
        {activeTab === 1 && <PaymentBreakdownTab rowData={rowData} />}
        {activeTab === 2 && <DocumentsTab rowData={rowData} />}
      </div>
    </div>
  );
};

export default SideModal;
