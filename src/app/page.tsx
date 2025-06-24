'use client';

import { useState } from 'react';
import WindsurfInvoice from '@/components/WindsurfInvoice';
import CursorInvoice from '@/components/CursorInvoice';
import { generateRandomInvoice } from '@/utils/invoiceGenerator';
import { InvoiceData, InvoiceType } from '@/types/invoice';

export default function Home() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [invoiceType, setInvoiceType] = useState<InvoiceType>(InvoiceType.WINDSURF);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGenerateInvoice = () => {
    // 清除之前的错误
    setEmailError('');

    // 验证邮箱
    if (!email.trim()) {
      setEmailError('请输入邮箱地址');
      return;
    }

    if (!validateEmail(email.trim())) {
      setEmailError('请输入有效的邮箱地址');
      return;
    }

    const newInvoice = generateRandomInvoice(email.trim(), invoiceType);
    setInvoiceData(newInvoice);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 控制面板 */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4 print:hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">随机Invoice生成器</h1>
              <p className="text-gray-600">支持生成 Windsurf 和 Cursor Invoice模板的随机Invoice数据</p>
            </div>
            {invoiceData && (
              <button
                onClick={handlePrint}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                打印/保存PDF
              </button>
            )}
          </div>

          {/* Invoice类型选择器 */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Invoice类型
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="invoiceType"
                  value={InvoiceType.WINDSURF}
                  checked={invoiceType === InvoiceType.WINDSURF}
                  onChange={(e) => setInvoiceType(e.target.value as InvoiceType)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">Windsurf Invoice ($6.90)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="invoiceType"
                  value={InvoiceType.CURSOR}
                  checked={invoiceType === InvoiceType.CURSOR}
                  onChange={(e) => setInvoiceType(e.target.value as InvoiceType)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-sm text-gray-700">Cursor Invoice ($20.00)</span>
              </label>
            </div>
          </div>

          {/* 邮箱输入区域 */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
            <div className="flex-1 max-w-md">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                收票人邮箱地址 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱地址"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>
            <button
              onClick={handleGenerateInvoice}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              生成新Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Invoice显示区域 */}
      <div className="py-2">
        {invoiceData ? (
          invoiceData.type === InvoiceType.CURSOR ? (
            <CursorInvoice data={invoiceData} />
          ) : (
            <WindsurfInvoice data={invoiceData} />
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center max-w-md">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">暂无Invoice</h3>
              <p className="mt-1 text-sm text-gray-500">
                请在上方输入邮箱地址，然后点击&quot;生成新Invoice&quot;按钮开始创建随机Invoice
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 功能说明 */}
      <div className="bg-white border-t border-gray-200 p-6 print:hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">功能说明</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">随机数据生成</h3>
              <p className="text-sm text-gray-600">
                自动生成Invoice号码、收据号码、支付方式、收票人信息和账单日期
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">PDF导出</h3>
              <p className="text-sm text-gray-600">
                点击&quot;打印/保存PDF&quot;按钮可以将Invoice保存为PDF文件
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">多种模板</h3>
              <p className="text-sm text-gray-600">
                支持 Windsurf 和 Cursor 两种Invoice模板，完全保持原始样式和布局
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
