export interface InvoiceData {
  invoiceNumber: string;
  receiptNumber: string;
  datePaid: string;
  paymentMethod: string;
  billTo: {
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    email: string;
  };
  amount: string;
  description: string;
  dateRange: string;
}

export interface BillToInfo {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  email: string;
}
