import { InvoiceData, BillToInfo, InvoiceType, CompanyInfo } from '@/types/invoice';

// 随机生成Invoice号码 (格式: 8位十六进制数字-000+1位随机数字)
function generateInvoiceNumber(): string {
  const hexChars = '0123456789ABCDEF';
  let hexResult = '';
  for (let i = 0; i < 8; i++) {
    hexResult += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
  }
  const lastDigit = Math.floor(Math.random() * 10);
  return `${hexResult}-000${lastDigit}`;
}

// 随机生成收据号码 (格式: 4位数字-4位数字)
function generateReceiptNumber(): string {
  const part1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const part2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${part1}-${part2}`;
}

// 随机生成支付方式
function generatePaymentMethod(): string {
  const cardTypes = ['Visa', 'MasterCard', 'American Express', 'Discover'];
  const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
  const lastFourDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${randomCardType} - ${lastFourDigits}`;
}

// 随机生成日期 (2025年4月17日至2025年6月16日)
function generateRandomDate(): string {
  const startDate = new Date('2025-04-17');
  const endDate = new Date('2025-06-16');
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  
  return randomDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 随机生成收票人信息
function generateBillToInfo(email: string): BillToInfo {
  const names = [
    'ZHANG WEI', 'WANG MING', 'LI XIAOLI', 'CHEN ZHANGQI', 'ZHAO YIFAN',
    'JOHN SMITH', 'JANE DOE', 'MICHAEL BROWN', 'SARAH WILSON', 'DAVID JONES',
    'MARIA GARCIA', 'ROBERT TAYLOR', 'JENNIFER DAVIS', 'WILLIAM MILLER', 'ELIZABETH MOORE',
    'LIU YANG', 'HUANG LEI', 'WU JING', 'ZHOU MING', 'XU FANG',
    'CHRISTOPHER JOHNSON', 'AMANDA ANDERSON', 'MATTHEW THOMAS', 'JESSICA JACKSON', 'ANDREW WHITE',
    'LISA HARRIS', 'DANIEL MARTIN', 'MICHELLE THOMPSON', 'KEVIN GARCIA', 'STEPHANIE MARTINEZ',
    'YAMADA TARO', 'SUZUKI HANAKO', 'TANAKA ICHIRO', 'WATANABE YUKI', 'SATO AKIRA',
    'PIERRE MARTIN', 'MARIE DUBOIS', 'JEAN BERNARD', 'SOPHIE MOREAU', 'NICOLAS PETIT',
    'HANS MUELLER', 'ANNA SCHMIDT', 'PETER WEBER', 'MARIA WAGNER', 'THOMAS BECKER'
  ];

  const addresses1 = [
    '100000', '200000', '300000', '400000', '500000',
    '123 Main Street', '456 Oak Avenue', '789 Pine Road', '321 Elm Street', '654 Maple Drive',
    '600000', '700000', '800000', '900000', '110000',
    '987 Broadway', '246 Fifth Avenue', '135 Park Avenue', '579 Wall Street', '864 Madison Avenue',
    '111 First Street', '222 Second Avenue', '333 Third Boulevard', '444 Fourth Lane', '555 Fifth Circle',
    '12 Downing Street', '34 Baker Street', '56 Oxford Street', '78 Regent Street', '90 Bond Street',
    '15 Champs-Élysées', '27 Rue de Rivoli', '39 Boulevard Saint-Germain', '51 Rue du Faubourg', '63 Avenue Montaigne'
  ];

  const addresses2 = [
    '北京市北京', '上海市上海', '广州市广东', '深圳市广东', '杭州市浙江',
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
    '成都市四川', '武汉市湖北', '南京市江苏', '天津市天津', '重庆市重庆',
    'Miami, FL', 'Seattle, WA', 'Boston, MA', 'Denver, CO', 'Atlanta, GA',
    'Toronto, ON', 'Vancouver, BC', 'Montreal, QC', 'Calgary, AB', 'Ottawa, ON',
    'London, England', 'Manchester, England', 'Birmingham, England', 'Liverpool, England', 'Leeds, England',
    'Tokyo, Japan', 'Osaka, Japan', 'Kyoto, Japan', 'Yokohama, Japan', 'Nagoya, Japan',
    'Paris, France', 'Lyon, France', 'Marseille, France', 'Toulouse, France', 'Nice, France',
    'Berlin, Germany', 'Munich, Germany', 'Hamburg, Germany', 'Cologne, Germany', 'Frankfurt, Germany'
  ];

  const cities = [
    '通州玉桥', '浦东新区', '天河区', '南山区', '西湖区',
    'Manhattan', 'Hollywood', 'Downtown', 'Midtown', 'Uptown',
    '朝阳区', '海淀区', '丰台区', '石景山区', '东城区',
    'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Long Island',
    'Scarborough', 'North York', 'Etobicoke', 'York', 'East York',
    'Westminster', 'Camden', 'Islington', 'Hackney', 'Tower Hamlets',
    'Shibuya', 'Shinjuku', 'Harajuku', 'Ginza', 'Akihabara',
    'Montmartre', 'Marais', 'Saint-Germain', 'Champs-Élysées', 'Louvre',
    'Mitte', 'Kreuzberg', 'Prenzlauer Berg', 'Charlottenburg', 'Friedrichshain'
  ];

  const states = [
    '北京', '上海', '广东', '浙江', '江苏',
    'New York', 'California', 'Illinois', 'Texas', 'Arizona',
    '四川', '湖北', '天津', '重庆', '福建',
    'Florida', 'Washington', 'Massachusetts', 'Colorado', 'Georgia',
    'Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Manitoba',
    'England', 'Scotland', 'Wales', 'Northern Ireland', 'Cornwall',
    'Tokyo', 'Osaka', 'Kyoto', 'Kanagawa', 'Aichi',
    'Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Occitanie', 'Nouvelle-Aquitaine',
    'Bavaria', 'North Rhine-Westphalia', 'Baden-Württemberg', 'Lower Saxony', 'Hesse'
  ];

  const countries = [
    'China', 'United States', 'Canada', 'United Kingdom', 'Australia',
    'Germany', 'France', 'Japan', 'South Korea', 'Singapore',
    'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Switzerland', 'Austria', 'Belgium', 'Italy', 'Spain',
    'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia',
    'India', 'Thailand', 'Malaysia', 'Indonesia', 'Philippines',
    'New Zealand', 'Ireland', 'Portugal', 'Greece', 'Poland'
  ];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    address1: addresses1[Math.floor(Math.random() * addresses1.length)],
    address2: addresses2[Math.floor(Math.random() * addresses2.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    state: states[Math.floor(Math.random() * states.length)],
    country: countries[Math.floor(Math.random() * countries.length)],
    email: email
  };
}

// 生成日期范围 (基于支付日期)
function generateDateRange(datePaid: string): string {
  const paidDate = new Date(datePaid);
  const startDate = new Date(paidDate);
  const endDate = new Date(paidDate);
  endDate.setMonth(endDate.getMonth() + 1);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}, ${paidDate.getFullYear()}`;
}

// 生成公司信息
function generateCompanyInfo(type: InvoiceType): CompanyInfo {
  if (type === InvoiceType.WINDSURF) {
    return {
      name: 'Windsurf',
      address1: '900 Villa Street',
      address2: 'Mountain View, California 94041',
      city: 'Mountain View',
      state: 'California',
      country: 'United States',
      email: 'noreply@windsurf.com',
      taxInfo: 'EU OSS VAT EU372077851'
    };
  } else {
    return {
      name: 'Cursor',
      address1: '801 West End Avenue',
      address2: 'New York, New York 10025',
      city: 'New York',
      state: 'New York',
      country: 'United States',
      phone: '+1 831-425-9504',
      email: 'hi@cursor.com',
      taxInfo: 'Anysphere, Inc.\nUS EIN 87-4436547'
    };
  }
}

// 根据发票类型生成产品信息
function generateProductInfo(type: InvoiceType): { amount: string; description: string } {
  if (type === InvoiceType.WINDSURF) {
    return {
      amount: '$6.90',
      description: 'Windsurf Pro'
    };
  } else {
    return {
      amount: '$20.00',
      description: 'Cursor Pro'
    };
  }
}

// 主要的Invoice生成函数
export function generateRandomInvoice(email: string, type: InvoiceType = InvoiceType.WINDSURF): InvoiceData {
  const invoiceNumber = generateInvoiceNumber();
  const receiptNumber = generateReceiptNumber();
  const datePaid = generateRandomDate();
  const paymentMethod = generatePaymentMethod();
  const billTo = generateBillToInfo(email);
  const productInfo = generateProductInfo(type);
  const companyInfo = generateCompanyInfo(type);
  const dateRange = generateDateRange(datePaid);

  return {
    type,
    invoiceNumber,
    receiptNumber,
    datePaid,
    paymentMethod,
    billTo,
    amount: productInfo.amount,
    description: productInfo.description,
    dateRange,
    companyInfo
  };
}
