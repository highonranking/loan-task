import React from "react";
import { Layout, Menu } from "antd";

import {
  Building,
  CalendarDots,
  DeviceMobile,
  Lifebuoy,
  NewspaperClipping,
  Notepad,
  UsersThree,
} from "@phosphor-icons/react";

import Logo from "../assets/logo.png";

const { Sider } = Layout;

const SideNavBar = () => {
  return (
    <div
      className="relative bg-yellow-50"
      style={{ width: "244px", height: "832px" }}
    >
      <div
        className="inline-flex flex-col space-y-4 items-center justify-start w-48 absolute"
        style={{ left: "22px", top: "40px" }}
      >
        <div className="w-5/6">
          <img
            className="w-full flex-1 shadow-inner rounded-lg"
            src={Logo}
            alt="Placeholder"
          />
        </div>
        <div className="flex flex-col space-y-0.5 items-start justify-start w-full">
          <div className="w-full flex-1 border-black border-opacity-10"></div>
          <div className="w-full flex-1 border-white"></div>
        </div>
        <div className="flex flex-col space-y-1 items-start justify-start w-full">
          <div className="inline-flex space-x-2.5 items-start justify-between w-full p-4 bg-[#16AF8E] shadow border-2 rounded-lg border-green-700">
            <div className="inline-flex flex-col space-y-1 items-start justify-center">
              <NewspaperClipping size={20} color="white" />
              <p className="text-sm font-semibold leading-tight text-white">
                Claims
              </p>
            </div>
            <p className="text-2xl text-white">17</p>
          </div>
          <div className="inline-flex space-x-2.5 items-start justify-between w-full p-4 bg-gray-900 bg-opacity-5 rounded-lg">
            <div className="inline-flex flex-col space-y-1 items-start justify-center">
              <UsersThree size={20} color="#114036" />
              <p className="text-sm font-semibold leading-tight text-green-900">
                Employees
              </p>
            </div>
            <p className="text-2xl text-green-900">3,456</p>
          </div>
          <div className="inline-flex space-x-2.5 items-start justify-between w-full p-4 bg-gray-900 bg-opacity-5 rounded-lg">
            <div className="inline-flex flex-col space-y-1 items-start justify-center">
              <DeviceMobile size={20} color="#114036" />
              <p className="text-sm font-semibold leading-tight text-green-900">
                Devices
              </p>
            </div>
            <p className="text-2xl text-green-900">128</p>
          </div>
        </div>
        <div className="flex flex-col space-y-0.5 items-start justify-start w-full">
          <div className="w-full flex-1 border-black border-opacity-10"></div>
          <div className="w-full flex-1 border-white"></div>
        </div>
      
        <div className="flex flex-col items-start justify-start">
          <div className="inline-flex space-x-3 items-center justify-start w-full px-3 py-2">
            <CalendarDots size={20} color="#114036" />
            <p className="text-sm font-semibold leading-tight text-green-900">
              Rental schedules
            </p>
          </div>
          <div className="inline-flex space-x-3 items-center justify-start w-full px-3 py-2">
            <Notepad size={20} color="#114036" />
            <p className="text-sm font-semibold leading-tight text-green-900">
              Billing
            </p>
          </div>
          <div className="inline-flex space-x-3 items-center justify-start w-full px-3 py-2">
            <Building size={20} color="#114036" />
            <p className="text-sm font-semibold leading-tight text-green-900">
              Organization
            </p>
          </div>
          <div className="inline-flex space-x-3 items-center justify-start w-full px-3 py-2">
            <Lifebuoy size={20} color="#114036" />
            <p className="text-sm font-semibold leading-tight text-green-900">
              Support
            </p>
          </div>
        </div>
      </div>
      <div
        className="inline-flex space-x-2 items-center justify-start w-48 px-3 py-2 absolute"
        style={{ left: "22px", top: "690px" }}
      >
        <div className="flex items-center justify-center w-6 h-full px-1 py-0.5 bg-green-500 rounded-md">
          <p className="text-xs font-semibold leading-tight text-white">VK</p>
        </div>
        <p className="text-xs font-semibold leading-tight text-green-900">
          Vardhan Koshal
        </p>
      </div>
    </div>
  );
};

export default SideNavBar;
