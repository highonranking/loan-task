import {
  ArrowFatLineRight,
  CalendarBlank,
  CaretCircleDown,
  Bank,
  Money,
  Receipt,
  MoneyWavy,
} from "@phosphor-icons/react";
import { DeviceMobile } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import ApproveClaim from "./ApproveClaim";

const SectionHeader = ({ title, iconSrc }) => (
  <div
    className="inline-flex space-x-2.5 items-center justify-between"
    style={{ width: "400px", height: "20px" }}
  >
    <p className=" text-sm font-semibold leading-tight text-gray-900">
      {title}
    </p>
    <CaretCircleDown size={20} color="gray" />
  </div>
);

const DetailItem = ({ iconSrc, label, value }) => (
  <div
    className="inline-flex space-x-2.5 items-center justify-between"
    style={{ width: "400px", height: "26px" }}
  >
    <div className={`flex space-x-2 items-center justify-start`}>
      {iconSrc}
      <p className="text-sm font-medium leading-relaxed text-gray-900">
        {label}
      </p>
    </div>
    <p className="text-sm leading-relaxed text-right text-gray-900">{value}</p>
  </div>
);

const Notice = ({ text }) => (
  <div
    className="inline-flex items-start justify-start p-4 bg-gray-100 bg-opacity-50 rounded-xl"
    style={{ width: "400px", height: "86px" }}
  >
    <p className="flex-1 text-xs leading-none">{text}</p>
  </div>
);

const DividerWithLabel = ({ label, color }) => (
  <div
    className="inline-flex items-center justify-center"
    style={{ width: "400px", height: "28px" }}
  >
    <div className="flex-1 h-0.5" style={{ backgroundColor: color }}></div>
    <div
      className="flex items-start justify-center px-3 py-1 shadow rounded-full"
      style={{ backgroundColor: color, borderColor: color }}
    >
      <p className="text-xs font-semibold leading-tight text-gray-50">
        {label}
      </p>
    </div>
    <div className="flex-1 h-0.5" style={{ backgroundColor: color }}></div>
  </div>
);

const EmployeeSection = () => (
  <div
    className="flex flex-col space-y-4 items-start justify-center p-4 bg-white shadow border rounded-xl border-gray-100"
    style={{ width: "432px", height: "552px" }}
  >
    <SectionHeader title="For Employee" />

    <div
      className="flex flex-col space-y-4 items-start justify-center"
      style={{ width: "400px", height: "140px" }}
    >
      <div
        className="flex flex-col space-y-1 items-start justify-center"
        style={{ width: "400px", height: "66px" }}
      >
        <DeviceMobile color="#62E29F" size={22} />
        <div className="flex flex-col items-start justify-start">
          <p className="opacity-60 w-full text-xs font-medium leading-none text-gray-700">
            Total claim value
          </p>
          <p className="w-full text-base font-semibold leading-tight text-gray-700">
            ₹80,498
          </p>
        </div>
      </div>
      <div
        className="flex flex-col space-y-1 items-start justify-center"
        style={{ width: "400px", height: "58px" }}
      >
        <p
          className="text-sm font-semibold leading-none text-gray-700"
          style={{ width: "400px" }}
        >
          Payments are split into monthly payment for 6 months
        </p>
        <p
          className="text-xs font-medium leading-none text-gray-700"
          style={{ width: "400px" }}
        >
          It is deducted directly out of the employee's salary as part of a
          tax-free device allowance.
        </p>
      </div>
    </div>

    <div
      className="flex flex-col space-y-4 items-center justify-center"
      style={{ width: "400px", height: "242px" }}
    >
      <DividerWithLabel label="Salary deductions" color="#FFB5F2" />
      <div
        className="flex flex-col space-y-2 items-start justify-center"
        style={{ width: "400px", height: "96px" }}
      >
        <DetailItem
          iconSrc={<CalendarBlank size={15} color="#FF91EE" />}
          label="Monthly instalment amount"
          value="₹13,416"
        />
        <DetailItem
          iconSrc={<Money size={15} color="#FF91EE" />}
          label="No. of instalments to be deducted"
          value="6"
        />
        <DetailItem
          iconSrc={<Receipt size={15} color="gray" />}
          label="Total amount to be paid"
          value="₹80,498"
          labelWidth="w-64"
        />
      </div>
      <Notice text="If you approve this request today, you’ll have to deduct ₹13,416 from Aditya’s salary from the next payroll cycle starting May 2024 till October 2024" />
    </div>

    <DividerWithLabel label="Payments by employee" color="#BBACFF" />
    <DetailItem
      iconSrc={<ArrowFatLineRight size={20} weight="fill" color="#FF91EE" />}
      label="Advance paid"
      value="₹ 1,000"
      labelWidth="w-36"
    />
  </div>
);

// ABB Section
const ABBSection = () => (
  <div
    className="flex flex-col space-y-4 items-start justify-center p-4 bg-white shadow border rounded-xl border-gray-100"
    style={{ width: "432px", height: "474px" }}
  >
    <SectionHeader title="For ABB" />

    <div
      className="flex flex-col space-y-6 items-start justify-center"
      style={{ width: "400px", height: "148px" }}
    >
      <div
        className="inline-flex space-x-4 items-center justify-start"
        style={{ width: "400px", height: "66px" }}
      >
        <div className="inline-flex flex-col space-y-1 items-start justify-center">
          <Bank size={20} weight="fill" color="#FF91EE" />
          <div className="flex flex-col items-start justify-start">
            <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
              GST input Credit
            </p>
            <p className="w-full text-base font-semibold leading-tight text-gray-700">
              18% over 6 months
            </p>
          </div>
        </div>
        <div className="transform -rotate-90 flex-1 h-0.5 border-gray-50"></div>
        <div className="inline-flex flex-col space-y-1 items-start justify-center">
          <MoneyWavy size={20} weight="fill" color="#FF91EE" />
          <div className="flex flex-col items-start justify-start">
            <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
              Sponsored amount
            </p>
            <p className=" text-base font-semibold leading-tight text-gray-700">
              ₹ 20,000
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col space-y-1 items-start justify-center"
        style={{ width: "400px", height: "58px" }}
      >
        <p
          className="text-sm font-semibold leading-none text-gray-700"
          style={{ width: "400px" }}
        >
          ₹ 28,000 contributed to this purchase
        </p>
        <p
          className="text-xs font-medium leading-none text-gray-700"
          style={{ width: "400px" }}
        >
          Your organisation has passed 18% GST input credit and additional
          sponsorship of ₹ 20,000 for this purchase
        </p>
      </div>
    </div>

    <div
      className="flex flex-col space-y-4 items-center justify-center"
      style={{ width: "400px", height: "242px" }}
    >
      <DividerWithLabel label="Payments to Connect" color={"#83EDA8"} />
      <div
        className="flex flex-col space-y-2 items-start justify-center"
        style={{ width: "400px", height: "96px" }}
      >
        <DetailItem
          iconSrc={<CalendarBlank size={15} color="#FF91EE" />}
          label="Monthly instalment amount"
          value="₹13,416"
        />
        <DetailItem
          iconSrc={<Money size={15} color="#FF91EE" />}
          label="No. of instalments to be deducted"
          value="6"
        />
        <DetailItem
          iconSrc={<Receipt size={15} color="gray" />}
          label="Total amount to be paid"
          value="₹80,498"
          labelWidth="w-64"
        />
      </div>
      <Notice text="Monthly payments are subject to change based on the agreed payment cycle with Connect, without altering the final payable amount" />
    </div>
  </div>
);

// Main component
const ClaimDetails = () => {
  return (
    <div
      className="inline-flex flex-col space-y-9 items-start justify-start overflow-auto"
      style={{ width: "432px", height: "1062px" }}
    >
      {/* Employee Section */}
      <EmployeeSection />

      {/* ABB Section */}
      <ABBSection />
      <ApproveClaim />
    </div>
  );
};

export default ClaimDetails;
