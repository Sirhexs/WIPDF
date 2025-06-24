# WIPDF

支持 Windsurf 和 Cursor Invoice模板的随机Invoice生成Web应用程序，可以生成随机的Invoice数据并支持PDF导出。

## 功能特性

- 🎲 **随机数据生成**: 自动生成Invoice号码、收据号码、支付方式、收票人信息和账单日期
- 📄 **PDF导出**: 支持将生成的Invoice保存为PDF文件
- 🎨 **多种模板**: 支持 Windsurf 和 Cursor 两种Invoice模板，完全保持原始样式和布局
- 📱 **响应式设计**: 适配不同屏幕尺寸的设备
- ⚡ **快速部署**: 支持一键部署到Vercel
- 🔄 **类型切换**: 可以在界面上轻松切换不同的Invoice类型

## 随机生成的数据字段

1. **Invoice number（Invoice号码）**: 8位字符-4位数字格式
2. **Receipt number（收据号码）**: 4位数字-4位数字格式
3. **Payment method（支付方式）**: 随机选择信用卡类型和后四位数字
4. **收票人信息**: 包括姓名、地址、城市、州/省、国家（邮箱地址使用用户输入的邮箱）
5. **账单日期**: 在2025年4月17日至2025年6月16日之间随机生成

## 技术栈

- **框架**: Next.js 15 with App Router
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义CSS
- **部署**: Vercel
- **包管理**: npm

## 快速开始

### 本地开发

1. **克隆项目**
   ```bash
   git clone <your-repo-url>
   cd WIPDF
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 🚀 部署指南

### 快速部署到Vercel

#### 步骤1：Fork项目

1. **访问项目仓库**
   - 打开 [WIPDF项目页面](https://github.com/Sirhexs/WIPDF)
   - 点击右上角的 "Fork" 按钮

#### 步骤2：部署到Vercel

1. **登录Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择你Fork的 `WIPDF` 仓库
   - 点击 "Import"

3. **开始部署**
   - 点击 "Deploy" 按钮
   - 等待1-3分钟完成构建
   - 获得项目访问链接


## 使用说明

### 生成新Invoice

1. **选择Invoice类型**: 在页面顶部选择要生成的Invoice类型
   - **Windsurf Invoice**: 金额为 $6.90 的 Windsurf Pro 订阅
   - **Cursor Invoice**: 金额为 $20.00 的 Cursor Pro 订阅
2. 在邮箱输入框中输入收票人的邮箱地址（必填）
3. 点击"生成新Invoice"按钮
4. 系统会自动生成包含随机数据和指定邮箱的新Invoice
5. Invoice会立即显示在页面中，样式会根据选择的类型自动调整

**注意**: 邮箱地址为必填字段，如果未输入或格式不正确，系统会显示错误提示并阻止Invoice生成。

### 导出PDF

1. 生成Invoice后，点击"打印/保存PDF"按钮
2. 在打印对话框中选择"保存为PDF"
3. 选择保存位置即可下载PDF文件


## 项目结构

```
WIPDF/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主页面
│   │   ├── layout.tsx        # 布局组件
│   │   └── globals.css       # 全局样式
│   ├── components/
│   │   ├── WindsurfInvoice.tsx  # Windsurf发票组件
│   │   └── CursorInvoice.tsx    # Cursor发票组件
│   ├── types/
│   │   └── invoice.ts        # 类型定义
│   └── utils/
│       └── invoiceGenerator.ts # Invoice数据生成器
├── public/
│   ├── windsurf-logo.png     # Windsurf Logo
│   └── cursor-logo.png       # Cursor Logo
├── package.json
├── next.config.js
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 自定义配置

### 修改日期范围

在 `src/utils/invoiceGenerator.ts` 中修改 `generateRandomDate` 函数：

```typescript
function generateRandomDate(): string {
  const startDate = new Date('2025-04-17'); // 修改开始日期
  const endDate = new Date('2025-06-16');   // 修改结束日期
  // ...
}
```

### 添加新的支付方式

在 `src/utils/invoiceGenerator.ts` 中修改 `generatePaymentMethod` 函数：

```typescript
function generatePaymentMethod(): string {
  const methods = [
    'American Express - 1116',
    'Visa - 4532',
    // 添加新的支付方式
    'PayPal - account@email.com',
  ];
  // ...
}
```

### 修改Invoice金额

在 `src/utils/invoiceGenerator.ts` 中修改 `generateProductInfo` 函数：

```typescript
function generateProductInfo(type: InvoiceType): { amount: string; description: string } {
  if (type === InvoiceType.WINDSURF) {
    return {
      amount: '$9.90', // 修改 Windsurf 金额
      description: 'Windsurf Pro'
    };
  } else {
    return {
      amount: '$25.00', // 修改 Cursor 金额
      description: 'Cursor Pro'
    };
  }
}
```

## 环境变量

项目目前不需要任何环境变量，所有配置都是静态的。

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 支持

如果你在使用过程中遇到问题，请：

1. 查看本README文档
2. 检查[Next.js文档](https://nextjs.org/docs)
3. 提交Issue到GitHub仓库
