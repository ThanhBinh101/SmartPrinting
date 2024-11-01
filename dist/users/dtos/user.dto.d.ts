declare class PrintHistoryDTO {
    printerID: string;
    date: Date;
    pages: number;
}
declare class PaymentHistoryDTO {
    date: Date;
    amount: number;
}
export declare class StudentDTO {
    username: string;
    password: string;
    stud_id: string;
    email: string;
    fullname: string;
    faculty: string;
    printHistory: PrintHistoryDTO[];
    paymentHistory: PaymentHistoryDTO[];
}
export {};
