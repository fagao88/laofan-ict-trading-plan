# 📊 ICT交易計畫表 / ICT Trading Plan

基於Inner Circle Trader (ICT)方法論的週股票交易計畫工具，專為Day Trading設計，主要交易TSLA和MNQ(納斯達克微型期貨)。

## ✨ 主要功能

### 🎯 核心模塊
- **交易計畫概覽** - 市場偏向分析和關鍵交易時段
- **經濟日曆** - 紐約時間重要經濟事件
- **市場結構分析** - ICT訂單塊、FVG、流動性分析
- **交易設定** - 具體的TSLA和MNQ交易機會
- **風險管理** - 1%風險控制和Day Trading資金管理

### 📱 移動端優化
- 響應式設計，完美適配手機
- 可添加到手機主屏幕，類似原生app體驗
- 觸摸友好的用戶界面

## 🚀 快速開始

### 在線使用
最簡單的方式是部署到Vercel：
1. 點擊 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
2. 獲得永久網址
3. 在手機瀏覽器中添加到主屏幕

### 本地安裝
```bash
# 1. 創建React項目
npx create-react-app ict-trading-plan --template typescript
cd ict-trading-plan

# 2. 安裝依賴
npm install lucide-react @radix-ui/react-tabs @radix-ui/react-badge @radix-ui/react-progress class-variance-authority clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer

# 3. 初始化Tailwind
npx tailwindcss init -p

# 4. 替換文件內容（見下載指南）
# 5. 啟動應用
npm start
```

## 🏗️ 項目結構

```
ict-trading-plan/
├── src/
│   ├── App.tsx                 # 主應用組件
│   ├── components/             # 功能組件
│   │   ├── TradingPlan.tsx     # 交易計畫概覽
│   │   ├── EconomicCalendar.tsx # 經濟日曆
│   │   ├── TradingSetups.tsx   # 交易設定
│   │   ├── RiskManagement.tsx  # 風險管理
│   │   ├── MarketStructure.tsx # 市場結構
│   │   └── ui/                 # UI組件庫
│   └── styles/
│       └── globals.css         # 全局樣式
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 技術棧

- **React 18** + TypeScript
- **Tailwind CSS** - 樣式框架
- **Radix UI** - 無障礙UI組件
- **Lucide React** - 圖標庫
- **Vercel** - 部署平台（推薦）

## 📊 ICT交易方法論

### 核心概念
- **訂單塊 (Order Blocks)** - 機構訂單集中區域
- **公允價值缺口 (FVG)** - 價格不平衡區域
- **流動性掃蕩** - 止損單觸發機制
- **市場結構** - 高低點突破分析

### 風險管理原則
- 單筆交易風險：1%（Day Trading）
- 最小風險回報比：1:2
- 連續虧損限制：3筆後暫停
- 情緒控制和紀律執行

## 📱 手機使用指南

### iOS設備
1. Safari瀏覽器打開部署網址
2. 點擊分享按鈕 → "加入主畫面"
3. 自定義名稱："ICT交易計畫"

### Android設備
1. Chrome瀏覽器打開部署網址
2. 點擊菜單（三個點）→ "添加到主屏幕"

## 🔄 日常使用流程

### 週末準備
- [ ] 更新下週經濟事件
- [ ] 分析週線市場結構
- [ ] 設定關鍵價格水平
- [ ] 準備交易設定

### 交易日早晨
- [ ] 檢查當日重要事件
- [ ] 確認市場偏向
- [ ] 設定風險參數
- [ ] 標記關鍵時段

### 盤中執行
- [ ] 監控訂單塊測試
- [ ] 等待FVG回補機會
- [ ] 執行流動性掃蕩策略
- [ ] 嚴格遵守止損紀律

## 🛠️ 自定義指南

### 更新交易數據
```typescript
// 在 TradingSetups.tsx 中添加新的交易機會
const newSetup = {
  symbol: "NVDA",
  symbolCn: "英偉達",
  direction: "Long",
  setup: "Fair Value Gap Fill",
  entry: "$450.20",
  stopLoss: "$445.00",
  takeProfit: "$460.00",
  // ... 其他屬性
};
```

### 修改風險參數
```typescript
// 在 RiskManagement.tsx 中調整
const maxRiskPerTrade = 0.015; // 1.5%
const accountBalance = 25000;   // $25,000
```

## 📈 性能優化

- 響應式圖片加載
- 組件延遲加載
- CSS變量優化
- 移動端觸摸優化

## 🔒 安全注意事項

- 不要在代碼中存儲真實的API密鑰
- 使用環境變量管理敏感信息
- 定期備份交易數據
- 啟用雙因素認證（部署平台）

## 📞 支持與維護

### 技術要求
- Node.js 18+
- npm 8+
- 現代瀏覽器支持

### 更新日程
- 經濟事件：每週更新
- 交易設定：根據市況調整
- 技術指標：月度回顧
- 依賴包：季度更新

## 📄 許可證

MIT License - 可自由使用和修改

## 🙏 致謝

- **Inner Circle Trader (ICT)** - 交易方法論
- **Radix UI** - 無障礙組件庫
- **Tailwind CSS** - 樣式框架
- **Vercel** - 部署平台

---

**⚠️ 風險提示：** 交易涉及重大風險，可能導致資金損失。本工具僅供教育目的，不構成投資建議。請在充分了解風險的情況下進行交易。