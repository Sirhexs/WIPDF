// 发票类型枚举
export enum InvoiceType {
  WINDSURF = 'windsurf',
  CURSOR = 'cursor'
}

// 公司信息接口
export interface CompanyInfo {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  email?: string;
  phone?: string;
  taxInfo?: string;
}

// 基础发票数据接口
export interface InvoiceData {
  type: InvoiceType;
  invoiceNumber: string;
  receiptNumber: string;
  datePaid: string;
  paymentMethod: string;
  billTo: BillToInfo;
  amount: string;
  description: string;
  dateRange: string;
  companyInfo: CompanyInfo;
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
