# 部署指南

## 快速部署到Vercel

### 方法一：GitHub + Vercel 自动部署（推荐）

1. **将代码推送到GitHub**
   ```bash
   # 初始化git仓库（如果还没有）
   git init
   git add .
   git commit -m "Initial commit: Random Invoice Generator"
   
   # 添加远程仓库并推送
   git remote add origin https://github.com/your-username/invoice-generator.git
   git branch -M main
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择你的 `invoice-generator` 仓库
   - 点击 "Deploy"

3. **自动部署完成**
   - Vercel会自动检测Next.js项目
   - 构建和部署过程大约需要1-2分钟
   - 部署完成后会提供一个公开的URL

### 方法二：Vercel CLI 部署

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

4. **跟随提示完成配置**
   - 选择项目设置
   - 确认部署配置
   - 等待部署完成

## 本地测试

在部署之前，建议先在本地测试：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 环境变量

此项目不需要任何环境变量配置。

## 自定义域名

部署完成后，你可以在Vercel Dashboard中：
1. 进入项目设置
2. 点击 "Domains"
3. 添加你的自定义域名

## 更新部署

每次推送到main分支时，Vercel会自动重新部署应用程序。

## 故障排除

如果部署失败，请检查：
1. package.json中的依赖是否正确
2. 构建命令是否成功执行
3. 查看Vercel的构建日志获取详细错误信息
