import {
  CalendarDots,
  CheckCircle,
  LineVertical,
  SealWarning,
  UserCircleCheck,
  XCircle,
} from "@phosphor-icons/react";
import { Money } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { data } from "../constants/Data";
import iphone from "../assets/iphone.png";
import ApproveClaim from "./ApproveClaim";

const ClaimDetails = () => {
  const {
    employeeName,
    employeePhoto,
    designation,
    device,
    addson,
    requestedOn,
    amountPayable,
    amountDurationInMonths,
    status,
  } = data;

  const ClaimedItems = () => (
    <div
      className="flex flex-col space-y-2 items-start justify-start"
      style={{ width: "434px", height: "98px" }}
    >
      <p className="text-sm font-semibold leading-tight text-gray-900">
        Claimed items
      </p>
      <div
        className="inline-flex space-x-2.5 items-center justify-between p-4 bg-white shadow border rounded-xl border-gray-100"
        style={{ width: "434px", height: "70px" }}
      >
        <div className="flex space-x-3 items-center justify-start w-1/2">
          <div
            className="relative bg-gray-100 rounded-md"
            style={{ width: "36px", height: "36px" }}
          >
            <div className="w-6 h-6 absolute left-0 top-0 shadow"></div>
            <div className="w-9 h-9"></div>
            <img
              className="w-20 h-11 absolute left-0 top-0"
              src={iphone}
              alt="Device"
            />
          </div>
          <div className="inline-flex flex-col items-start justify-center">
            <p className="text-sm font-semibold leading-tight text-gray-700">
              {device}
            </p>
            <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
              128 GB • Black
            </p>
          </div>
        </div>
        <p className="text-sm leading-tight text-right text-gray-700">
          ₹ {amountPayable}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="inline-flex flex-col space-y-16 items-center justify-start bg-white rounded-xl overflow-auto"
      style={{ width: "498px", height: "1056px" }}
    >
      <div
        className="flex flex-col space-y-6 items-start justify-center mt-8"
        style={{ width: "434px", height: "448px" }}
      >
        <div
          className="flex flex-col space-y-2 items-start justify-center"
          style={{ width: "434px", height: "98px" }}
        >
          <p className="text-sm font-semibold leading-tight text-gray-900">
            Request details
          </p>
          <div
            className="inline-flex space-x-2.5 items-center justify-between p-4 bg-white shadow border rounded-xl border-gray-100"
            style={{ width: "434px", height: "70px" }}
          >
            <div className="inline-flex space-x-3 items-center justify-start w-full">
              <img
                className="w-9 h-9 rounded-full"
                src={employeePhoto}
                alt="Employee"
              />
              <div className="inline-flex flex-col items-start justify-center">
                <p className="text-sm font-semibold leading-tight text-gray-700">
                  {employeeName}
                </p>
                <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
                  {designation}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <p className="w-full text-sm font-medium leading-tight text-right text-gray-700">
                Requested 5 minutes ago
              </p>
              <p className="opacity-60 w-full text-xs font-medium leading-none text-right text-gray-700">
                {requestedOn}
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col space-y-2 items-start justify-start"
          style={{ width: "434px", height: "202px" }}
        >
          <p className="text-sm font-semibold leading-tight text-gray-900">
            Payment terms
          </p>
          <div
            className="inline-flex space-x-8 items-center justify-start p-4 bg-white shadow border rounded-xl border-gray-100"
            style={{ width: "434px", height: "98px" }}
          >
            <div className="inline-flex flex-col space-y-1 items-start justify-center w-36">
              <Money size={22} color="#FF91EE" />
              <div className="flex flex-col items-start justify-center">
                <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
                  Deductible amount
                </p>
                <p className="text-base font-semibold leading-tight text-gray-700">
                  ₹{amountPayable} / month
                </p>
              </div>
            </div>
            <div className="transform -rotate-90 w-1/6 h-full border-gray-50"></div>
            <div className="inline-flex flex-col space-y-1 items-start justify-center w-36">
              <CalendarDots size={22} color="#FF91EE" />

              <div className="flex flex-col items-start justify-center">
                <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
                  Tenure
                </p>
                <p className="text-base font-semibold leading-tight text-gray-700">
                  {amountDurationInMonths} months
                </p>
              </div>
            </div>
          </div>
          <div
            className="inline-flex space-x-2 items-start justify-start p-4 bg-gray-100 bg-opacity-50 rounded-xl"
            style={{ width: "434px", height: "68px" }}
          >
            <SealWarning size={22} color="#CBCBCB" />
            <p className="flex-1 text-xs leading-none">
              ₹ {amountPayable} to be deducted from {employeeName}'s monthly
              salary under the non-taxable device allowance section over a
              period of {amountDurationInMonths} months
            </p>
          </div>
        </div>
        <ClaimedItems />
      </div>

      <ApproveClaim data={data} />
    </div>
  );
};

export default ClaimDetails;
