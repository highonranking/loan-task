import React, { useState } from "react";
import { Table, Input, Button, Select } from "antd";
import {
  MobileOutlined,
  RightOutlined,
  FilterOutlined,
  PlusOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

import moment from "moment";
import SideModal from "./SideModal";
import { data as initialData } from "../constants/Claims";
import iPhoneImage from "../assets/iphone.png";
import { CaretDown, NewspaperClipping } from "@phosphor-icons/react";

const Claims = () => {
  const [data, setData] = useState(initialData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showSideModal, setShowSideModal] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [editingStatusKey, setEditingStatusKey] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowSideModal(true);
  };

  const handleCloseModal = () => {
    setShowSideModal(false);
  };

  const handleFilterChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (record, newStatus) => {
    const updatedData = data.map((item) =>
      item.key === record.key ? { ...item, status: newStatus } : item
    );
    setData(updatedData);
    setEditingStatusKey(null);
  };

  const filteredData = filteredInfo.employeeName
    ? data.filter((item) =>
        item.employeeName
          .toLowerCase()
          .includes(filteredInfo.employeeName.toLowerCase())
      )
    : data;

  const columns = [
    {
      title: "Employee",
      dataIndex: "employeeName",
      key: "employeeName",
      sorter: (a, b) => a.employeeName.localeCompare(b.employeeName),
      sortOrder:
        sortedInfo.columnKey === "employeeName" ? sortedInfo.order : null,
      render: (text, record) => (
        <div className="flex space-x-3 items-center justify-start w-48">
          <img
            className="w-9 h-9 rounded-full"
            src={record.employeePhoto || "https://via.placeholder.com/36"}
            alt="Employee"
          />
          <div className="flex flex-col items-start justify-center">
            <p className="text-sm font-semibold leading-tight text-gray-700">
              {text}
            </p>
            <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
              {record.designation}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Device",
      dataIndex: "device",
      key: "device",
      sorter: (a, b) => a.device.localeCompare(b.device),
      sortOrder: sortedInfo.columnKey === "device" ? sortedInfo.order : null,
      render: (text, record) => (
        <div className="flex space-x-3 items-center justify-start w-52">
          <div
            className="relative bg-gray-100 rounded-md"
            style={{ width: 36, height: 36 }}
          >
            <MobileOutlined className="absolute left-0 top-0 shadow" />
            <div className="w-9 h-9"></div>
            <img
              className="w-20 h-11 absolute left-0 top-0"
              src={iPhoneImage}
              alt="Device"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-sm font-medium leading-tight text-gray-700">
              {text}
            </p>
            <p className="opacity-60 text-xs font-medium leading-none text-gray-700">
              {record.addson > 0 ? `${record.addson} add-on(s)` : "No add-ons"}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Requested on",
      dataIndex: "requestedOn",
      key: "requestedOn",
      sorter: (a, b) => new Date(a.requestedOn) - new Date(b.requestedOn),
      sortOrder:
        sortedInfo.columnKey === "requestedOn" ? sortedInfo.order : null,
      render: (text) => (
        <div className="flex flex-col items-start justify-center w-1/6">
          <p
            className="text-sm font-medium leading-tight text-gray-700"
            style={{ whiteSpace: "nowrap" }}
          >
            {moment(text).fromNow()}
          </p>
          <p
            className="opacity-60 text-xs font-medium leading-none text-gray-700"
            style={{ whiteSpace: "nowrap" }}
          >
            {text}
          </p>
        </div>
      ),
    },
    {
      title: "Amount payable",
      dataIndex: "amountPayable",
      key: "amountPayable",
      render: (text, record) => (
        <div className="flex flex-col items-start justify-center w-1/6">
          <p
            className="text-sm font-medium leading-tight text-gray-700"
            style={{ whiteSpace: "nowrap" }}
          >
            ₹ {text} / month
          </p>
          <p
            className="opacity-60 text-xs font-medium leading-none text-gray-700"
            style={{ whiteSpace: "nowrap" }}
          >
            For {record.amountDurationInMonths} months
          </p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div
          className="flex space-x-2.5 items-center justify-between w-1/6 py-0.5"
          onClick={() => setEditingStatusKey(record.key)}
        >
          {editingStatusKey === record.key ? (
            <Select
              value={text}
              onChange={(value) => handleStatusChange(record, value)}
              style={{ width: 120 }}
            >
              <Select.Option value="approved">Approved</Select.Option>
              <Select.Option value="rejected">Rejected</Select.Option>
            </Select>
          ) : (
            <div className="flex space-x-2 items-center justify-center px-2 py-1.5 bg-white shadow border rounded-lg border-gray-100 cursor-pointer">
              <div className="flex space-x-1.5 items-center justify-center">
                {text === "approved" ? (
                  <CheckCircleFilled style={{ color: "#52c41a" }} />
                ) : (
                  <CloseCircleFilled style={{ color: "#f5222d" }} />
                )}
                <p className="text-xs font-semibold leading-tight text-gray-700">
                  {text === "approved" ? "Approved" : "Rejected"}
                </p>
              </div>
              <CaretDown style={{ marginLeft: "8px" }} />
            </div>
          )}
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center justify-center cursor-pointer text-gray-600">
          <RightOutlined onClick={() => handleRowClick(record)} />
        </div>
      ),
    },
  ];

  const Header = () => (
    <div className="inline-flex space-x-2.5 items-start justify-between">
      <div className="flex space-x-3 items-center justify-start">
        <NewspaperClipping size={25} color="#167E62" />
        <p className="w-28 text-2xl font-semibold text-gray-700">Claims</p>
      </div>
      <div className="flex space-x-2 items-start justify-start">
        <div className="flex items-start justify-start px-3 py-1.5 bg-gray-100 rounded-lg">
          <p className="text-xs font-semibold leading-tight text-gray-900">
            Open
          </p>
        </div>
        <div className="flex items-start justify-start px-3 py-1.5 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold leading-tight text-gray-400">
            Approved
          </p>
        </div>
        <div className="flex items-start justify-start px-3 py-1.5 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold leading-tight text-gray-400">
            Rejected
          </p>
        </div>
      </div>
    </div>
  );

  const ClaimNotification = () => (
    <div
      className="inline-flex space-x-8 items-start justify-start px-8 py-4 bg-gray-50"
      style={{ height: "73px" }}
    >
      <div
        className="inline-flex flex-col space-y-0.5 items-start justify-center pl-24"
        style={{ height: "41px" }}
      >
        <p className="text-base font-semibold leading-tight text-gray-800">
          17 employees want to claim their device allowances
        </p>
        <p className="text-sm leading-tight text-gray-800">
          Review their requests at the earliest to ensure a great benefit claim
          experience
        </p>
      </div>
      <div className="flex items-center justify-center w-16 h-40"></div>
    </div>
  );

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setFilteredInfo({ ...filteredInfo, employeeName: value });
  };

  return (
    <div className="flex flex-col gap-4 text-gray-400">
      <Header />
      <ClaimNotification />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Input
            placeholder={"⌕ Search by name"}
            onChange={handleSearchChange}
            value={filteredInfo.employeeName}
          />
        </div>
        <div className="flex gap-4">
          <Button type="dashed" onClick={() => console.log("Filters")}>
            <FilterOutlined />
            Filters
          </Button>
          <Button type="dashed" onClick={() => console.log("Bulk actions")}>
            <PlusOutlined />
            Bulk actions
          </Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        onChange={handleFilterChange}
        pagination={{
          current: currentPage,
          onChange: handlePageChange,
          pageSize: 8,
          total: data.length,
        }}
        rowClassName={() => "bg-white"}
        size="middle"
        bordered
      />
      <div className="flex justify-between items-center !mt-[-56px]">
        <p className="text-sm text-gray-600">
          Showing {currentPage * 8 - 7} to{" "}
          {Math.min(currentPage * 8, data.length)} of {data.length} entries
        </p>
      </div>
      {showSideModal && (
        <SideModal rowData={selectedRow} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Claims;
