declare class PrintHistoryItemDTO {
    studentID: string;
    date: Date;
    pages: number;
}
declare class PaperChangeHistoryItemDTO {
    date: Date;
    spsoID: string;
    description: string;
}
declare class MaintenanceHistoryItemDTO {
    date: Date;
    spsoID: string;
    description: string;
}
export declare class PrinterDTO {
    printerID: string;
    printHistory: PrintHistoryItemDTO[];
    paperChangeHistory: PaperChangeHistoryItemDTO[];
    maintenanceHistory: MaintenanceHistoryItemDTO[];
}
export {};
