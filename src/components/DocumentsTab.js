import { Signature } from "@phosphor-icons/react/dist/ssr";
import ApproveClaim from "./ApproveClaim";

// Document Component
const Document = ({ title, subtitle, imageUrl, status, buttonText }) => (
  <div
    className="flex flex-col space-y-4 items-start justify-start p-4 bg-white shadow border rounded-xl border-gray-100"
    style={{ width: "433px", height: "136px" }}
  >
    <div className="inline-flex space-x-2.5 items-center justify-start">
      <img className="w-7 h-full rounded-lg" src={imageUrl} alt="Document" />
      <div className="inline-flex flex-col space-y-0.5 items-start justify-start">
        <p className="text-sm font-semibold leading-tight text-gray-900">
          {title}
        </p>
        <p className="text-xs leading-none text-gray-500">{subtitle}</p>
      </div>
    </div>
    <div
      className="border-gray-100"
      style={{ width: "401px", height: "1px" }}
    ></div>
    <div
      className="inline-flex space-x-2.5 items-center justify-between"
      style={{ width: "401px", height: "32px" }}
    >
      <div className="flex space-x-3 items-center justify-start">
        <Signature color="red" size={20} />
        <p className="text-sm font-medium leading-none text-gray-500">
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center px-2 py-1.5 bg-white shadow border rounded-lg border-gray-100">
        <p className="flex-1 text-xs font-semibold leading-tight text-gray-700">
          {buttonText}
        </p>
      </div>
    </div>
  </div>
);

// DocumentsTab Component
const DocumentsTab = () => (
  <div
    className="inline-flex flex-col space-y-6 items-center justify-start overflow-auto"
    style={{ width: "498px" }}
  >
    <div
      className="flex pt-12 flex-col space-y-9 items-start justify-start"
      style={{ width: "433px", height: "388px" }}
    >
      {/* Document 1 */}
      <Document
        title="Signed by Aditya"
        subtitle="Between Ninjacart and Aditya"
        imageUrl="https://www.adobe.com/content/dam/cc/en/legal/images/badges/PDF_32.png"
        status="Signed on 12th April"
        buttonText="View document"
      />
      {/* Document 2 */}
      <Document
        title="Yet to be signed by you"
        subtitle="Sign the documents only when you’re sure about claim approval"
        imageUrl="https://www.adobe.com/content/dam/cc/en/legal/images/badges/PDF_32.png"
        status="Pending"
        buttonText="View and sign document"
      />
    </div>

    <ApproveClaim />
  </div>
);

export default DocumentsTab;
