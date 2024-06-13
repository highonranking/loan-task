import React from "react";

import {
  UserCircleCheck,
  LineVertical,
  XCircle,
  CheckCircle,
} from "@phosphor-icons/react";
const ApproveClaim = ({ data }) => {
  return (
    <div className="flex flex-col items-start justify-start px-8 pt-6 pb-8 bg-white shadow border border-gray-50">
      <div className="flex flex-col space-y-4 items-start justify-center">
        <div className="inline-flex space-x-2 items-start justify-start">
          <UserCircleCheck size={22} color="#16AF8E" />
          <div className="inline-flex flex-col space-y-4 items-start justify-center">
            <div className="flex flex-col space-y-2 items-start justify-center">
              <p className="text-base font-semibold leading-tight text-gray-900">
                Approve claim
              </p>
              <p className="text-xs font-medium leading-tight text-gray-900">
                Your organization has set up a multi-level claim approval
                process
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start justify-start pb-3">
              <div className="inline-flex space-x-3 items-start justify-start">
                <div className="inline-flex flex-col space-y-3.5 items-center justify-start">
                  <div className="flex flex-col items-center justify-center px-2.5 py-1 border-2 rounded-full border-gray-400">
                    <p className="w-full text-xs font-bold leading-tight text-center text-gray-400">
                      1
                    </p>
                  </div>
                  <LineVertical size={20} color="gray" />
                </div>
                <div className="inline-flex flex-col space-y-2 items-start justify-start w-52">
                  <p className="text-xs leading-normal text-gray-900">
                    First approval{" "}
                  </p>
                  <div className="inline-flex space-x-2 items-center justify-start p-2 bg-gray-50 border rounded-lg border-gray-200">
                    <img
                      className="w-6 h-full rounded-full"
                      src={
                        data?.employeePhoto ||
                        "https://xsgames.co/randomusers/avatar.php?g=male"
                      }
                      alt="Avatar"
                    />
                    <p className="text-sm font-semibold leading-tight text-gray-700">
                      Jules Bianchi (You)
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex space-x-3 items-start justify-start">
                <div className="flex flex-col items-center justify-center px-2.5 py-1 border-2 rounded-full border-gray-400">
                  <p className="w-full text-xs font-bold leading-tight text-center text-gray-400">
                    2
                  </p>
                </div>
                <div className="inline-flex flex-col space-y-2 items-start justify-start w-52">
                  <p className="text-xs leading-normal text-gray-900">
                    Final approval
                  </p>
                  <div className="inline-flex space-x-2 items-center justify-start p-2 bg-gray-50 border rounded-lg border-gray-200">
                    <img
                      className="w-6 h-full rounded-full"
                      src={
                        data?.employeePhoto ||
                        "https://xsgames.co/randomusers/avatar.php?g=male"
                      }
                      alt="Avatar"
                    />
                    <p className="w-full text-sm font-semibold leading-tight text-gray-700">
                      Surya Harsha
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-gray-100"
          style={{ width: "434px", height: "1px" }}
        ></div>
        <div
          className="inline-flex space-x-2 items-center justify-center"
          style={{ width: "431px", height: "36px" }}
        >
          <div className="flex items-center justify-center flex-1 h-full px-2 py-1.5 bg-white shadow border rounded-lg border-gray-100">
            <div className="flex space-x-1.5 items-center justify-center">
              <XCircle size={20} color="#D57046" />
              <p className="text-xs font-semibold leading-tight text-gray-700">
                Reject
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 h-full px-2 py-1.5 bg-green-400 shadow border rounded-lg border-green-700">
            <div className="flex space-x-1.5 items-center justify-center">
              <CheckCircle size={20} color="#FFFFFF" />
              <p className="text-xs font-semibold text-white">Approve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveClaim;
