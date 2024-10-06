export const BUTTON_USER_OVERVIEW = [
  {
    title: "Purchase",
    backgroundColor: "success",
    textColor: "white",
    link: "/purchase",
  },
  {
    title: "Upload file",
    backgroundColor: "primary",
    textColor: "secondary",
    link: "/upload",
  },
  {
    title: "History",
    backgroundColor: "secondary",
    textColor: "white",
    link: "/history",
  },
];

export const WAITING_PRINTING_DOCUMENTS = [
  {
    id: 1,
    title: "Assignment Database",
    room: "306B1",
    status: "success",
  },
  {
    id: 2,
    title: "Deadline Software",
    room: "207C6",
    status: "fail",
  },
  {
    id: 3,
    title: "Minna no nihongo",
    room: "301A4",
    status: "pending",
  },
];

export const PRINT_HISTORY_TABLE_TITLE = [
  "Uploaded Date",
  "Finish Date",
  "File",
  "Printer",
  "Number of Papers",
];

export const PURCHASE_HISTORY_TITLE = ["Date", "Number of Papers", "Total"];

export const ALLOWED_FILE_TYPE = [
  {
    title: "Images",
    fileExtension: ".png, .jpg, ...",
  },
  {
    title: "PDF",
    fileExtension: ".pdf",
  },
  {
    title: "DOCS",
    fileExtension: ".docs, .docx, .doc",
  },
];

export const AVAILABLE_PRINTER_OPTION = [
  {
    value: "306B1",
    content: "306-B1",
  },
  {
    value: "406B9",
    content: "406-B9",
  },
];

export const AVAILABLE_PAPER_SIZE = [
  {
    value: "A3",
    content: "A3",
  },
  {
    value: "A4",
    content: "A4",
  },
];

export const PRICE_AMOUNT = [
  5000, 10000, 15000, 20000, 30000, 40000, 50000, 80000, 100000,
];

export const WARNING_PAPER = "NOT ENOUGH PAPER";
export const WARNING_FILE = "FILE IS NOT AVAILABLE";
export const WARNING_TYPE_ERROR = "error";
export const WARNING_TYPE_PRINT = "purchase";
