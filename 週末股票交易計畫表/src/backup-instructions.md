# ICT 交易計畫表 - 備份指南

## 快速備份步驟

### 1. 複製所有代碼文件
將以下文件保存到您的電腦：

#### 主要組件文件：
- `/App.tsx` - 主應用程序
- `/components/TradingPlan.tsx` - 交易計畫
- `/components/EconomicCalendar.tsx` - 經濟日曆
- `/components/TradingSetups.tsx` - 交易設定
- `/components/RiskManagement.tsx` - 風險管理
- `/components/MarketStructure.tsx` - 市場結構
- `/styles/globals.css` - 樣式文件

#### UI組件（shadcn/ui）：
複製整個 `/components/ui/` 目錄

### 2. 創建新的React項目
```bash
npx create-react-app ict-trading-plan --template typescript
cd ict-trading-plan
npm install lucide-react @radix-ui/react-tabs @radix-ui/react-badge class-variance-authority clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. 替換文件
將備份的文件放入對應目錄

### 4. 部署到雲端平台

#### Vercel部署（推薦）：
1. 推送代碼到GitHub
2. 訪問 vercel.com
3. 連接GitHub倉庫
4. 自動部署完成

#### Netlify部署：
1. 建構應用：`npm run build`
2. 訪問 netlify.com
3. 拖拽 `build` 文件夾到Netlify

## 手機使用指南

### 部署後的手機使用：
1. 獲得部署網址（如：https://your-app.vercel.app）
2. 在手機瀏覽器中打開
3. 添加到主屏幕（類似原生app體驗）

### 添加到iOS主屏幕：
1. Safari中打開網站
2. 點擊分享按鈕
3. 選擇"加入主畫面"
4. 自定義名稱：如"ICT交易計畫"

### 添加到Android主屏幕：
1. Chrome中打開網站
2. 點擊菜單（三個點）
3. 選擇"添加到主屏幕"

## 數據更新建議

### 每週更新：
- 經濟事件（EconomicCalendar.tsx）
- 交易設定（TradingSetups.tsx）
- 市場結構分析（MarketStructure.tsx）

### 實時調整：
- 風險參數（RiskManagement.tsx）
- 關鍵價格水平

## 擴展功能建議

### 可以添加的功能：
1. **交易日誌記錄**
2. **績效追蹤圖表**
3. **推送通知提醒**
4. **暗色模式切換**
5. **數據同步到雲端**

### 技術棧升級：
- 添加後端API (Supabase/Firebase)
- 實時數據更新
- 用戶認證系統
- 多設備同步

## 安全提醒

⚠️ **重要**：
- 不要在代碼中硬編碼真實的API密鑰
- 使用環境變量存儲敏感信息
- 定期備份您的交易數據
- 考慮使用版本控制（Git）

## 支持和維護

- 保持依賴包更新
- 定期檢查安全漏洞
- 監控部署狀態
- 備份重要配置文件