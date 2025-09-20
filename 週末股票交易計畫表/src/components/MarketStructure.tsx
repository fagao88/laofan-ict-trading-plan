import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { BarChart3, TrendingUp, TrendingDown, Target, Layers } from "lucide-react";

export function MarketStructure() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          市場結構分析 / Market Structure Analysis
        </CardTitle>
        <CardDescription>
          ICT市場結構概念：訂單塊、公允價值缺口、流動性池 / ICT Market Structure: Order Blocks, FVGs, Liquidity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Higher Timeframe Structure */}
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Layers className="h-4 w-4" />
            高時間框架結構 / Higher Timeframe Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">TSLA 日線結構 / TSLA Daily Structure</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">趨勢方向 / Trend Direction:</span>
                  <Badge variant="destructive">
                    看跌 Bearish
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">主要阻力 / Key Resistance:</span>
                  <span className="font-mono text-sm">$252.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">主要支撐 / Key Support:</span>
                  <span className="font-mono text-sm">$240.20</span>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">MNQ 15分鐘結構 / MNQ 15min Structure</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">短期偏向 / Short-term Bias:</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    看漲 Bullish
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">最後突破 / Last Break:</span>
                  <span className="font-mono text-sm">20125.0 ↑</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">下一目標 / Next Target:</span>
                  <span className="font-mono text-sm">20200.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Order Blocks */}
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Target className="h-4 w-4" />
            訂單塊分析 / Order Block Analysis
          </h3>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-950/20">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">TSLA 看跌訂單塊 / TSLA Bearish Order Block</h4>
                <Badge variant="destructive">高優先級</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">價格範圍:</span>
                  <p className="font-mono">$248.20 - $252.50</p>
                </div>
                <div>
                  <span className="text-muted-foreground">時間框架:</span>
                  <p>15m / 1H</p>
                </div>
                <div>
                  <span className="text-muted-foreground">狀態:</span>
                  <p className="text-orange-600">未測試</p>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">MNQ 看漲訂單塊 / MNQ Bullish Order Block</h4>
                <Badge className="bg-green-600">中優先級</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">價格範圍:</span>
                  <p className="font-mono">20120.0 - 20140.0</p>
                </div>
                <div>
                  <span className="text-muted-foreground">時間框架:</span>
                  <p>5m / 15m</p>
                </div>
                <div>
                  <span className="text-muted-foreground">狀態:</span>
                  <p className="text-blue-600">已測試</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Fair Value Gaps */}
        <div className="space-y-4">
          <h3 className="font-semibold">公允價值缺口 / Fair Value Gaps (FVG)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">TSLA 看跌FVG / TSLA Bearish FVG</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>價格範圍:</span>
                  <span className="font-mono">$245.50 - $247.20</span>
                </div>
                <div className="flex justify-between">
                  <span>形成時間:</span>
                  <span>9/20 09:45</span>
                </div>
                <div className="flex justify-between">
                  <span>回補狀態:</span>
                  <Badge variant="outline" className="text-xs">部分回補</Badge>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">MNQ 看漲FVG / MNQ Bullish FVG</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>價格範圍:</span>
                  <span className="font-mono">20145.0 - 20155.0</span>
                </div>
                <div className="flex justify-between">
                  <span>形成時間:</span>
                  <span>9/20 08:35</span>
                </div>
                <div className="flex justify-between">
                  <span>回補狀態:</span>
                  <Badge className="bg-green-600 text-xs">已回補</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Liquidity Zones */}
        <div className="space-y-4">
          <h3 className="font-semibold">流動性區域 / Liquidity Zones</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">TSLA 買方流動性 / TSLA Buy-side Liquidity</h4>
                <span className="font-mono text-sm">$254.80</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                前期高點上方的止損單集中區域 / Stop losses above previous highs
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">MNQ 賣方流動性 / MNQ Sell-side Liquidity</h4>
                <span className="font-mono text-sm">20095.0</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                前期低點下方的止損單集中區域 / Stop losses below previous lows
              </p>
            </div>
          </div>
        </div>

        {/* Key Levels Summary */}
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-3">關鍵水平總結 / Key Levels Summary</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">TSLA 關鍵水平</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">主要阻力:</span>
                  <p className="font-mono font-medium">$252.50</p>
                </div>
                <div>
                  <span className="text-muted-foreground">次要阻力:</span>
                  <p className="font-mono">$247.20</p>
                </div>
                <div>
                  <span className="text-muted-foreground">次要支撐:</span>
                  <p className="font-mono">$242.30</p>
                </div>
                <div>
                  <span className="text-muted-foreground">主要支撐:</span>
                  <p className="font-mono font-medium">$240.20</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">MNQ 關鍵水平</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">主要阻力:</span>
                  <p className="font-mono font-medium">20200.0</p>
                </div>
                <div>
                  <span className="text-muted-foreground">次要阻力:</span>
                  <p className="font-mono">20170.0</p>
                </div>
                <div>
                  <span className="text-muted-foreground">次要支撐:</span>
                  <p className="font-mono">20120.0</p>
                </div>
                <div>
                  <span className="text-muted-foreground">主要支撐:</span>
                  <p className="font-mono font-medium">20095.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}