import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Calendar, Clock, TrendingUp, TrendingDown, AlertTriangle, Target } from "lucide-react";

export function TradingPlan() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ICT 週股票交易計畫 / ICT Weekly Stock Trading Plan
        </h1>
        <p className="text-muted-foreground">
          September 23-27, 2024 | 基於Inner Circle Trader理念的交易策略
        </p>
      </div>

      {/* Market Bias */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            市場偏向分析 / Market Bias Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">短期偏向 / Short-term Bias</h3>
              <Badge variant="destructive" className="mb-2">看跌 Bearish</Badge>
              <p className="text-sm text-muted-foreground">
                主要阻力位被拒絕，等待回撤至需求區域
                <br />
                Major resistance rejection, awaiting pullback to demand zone
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">中期偏向 / Medium-term Bias</h3>
              <Badge variant="secondary" className="mb-2">中性 Neutral</Badge>
              <p className="text-sm text-muted-foreground">
                區間震盪，等待突破確認
                <br />
                Range-bound, awaiting breakout confirmation
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">長期偏向 / Long-term Bias</h3>
              <Badge className="mb-2 bg-green-600">看漲 Bullish</Badge>
              <p className="text-sm text-muted-foreground">
                主要趨勢仍然向上，尋找買入機會
                <br />
                Major trend remains up, looking for buy opportunities
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trading Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            交易時段重點 / Key Trading Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <h3 className="font-semibold mb-2">亞洲時段 / Asian Session</h3>
              <p className="text-sm mb-2">20:00-00:00 (紐約時間)</p>
              <p className="text-sm text-muted-foreground">
                關注隔夜期貨動向，為美股開盤做準備
                <br />
                Monitor overnight futures, prepare for US market open
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
              <h3 className="font-semibold mb-2">倫敦時段 / London Session</h3>
              <p className="text-sm mb-2">02:00-05:00 (紐約時間)</p>
              <p className="text-sm text-muted-foreground">
                歐洲開盤動向，影響美股盤前走勢
                <br />
                European market opens, affects US pre-market movement
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <h3 className="font-semibold mb-2">紐約盤前 / New York Pre-Market</h3>
              <p className="text-sm mb-2">08:30-11:30 (紐約時間)</p>
              <p className="text-sm text-muted-foreground">
                主要Day Trade時段，最高流動性和波動
                <br />
                Primary day trading session, highest liquidity and volatility
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}