import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Target, TrendingUp, TrendingDown, Shield, DollarSign } from "lucide-react";

interface TradingSetup {
  id: string;
  symbol: string;
  symbolCn: string;
  direction: "Long" | "Short";
  directionCn: string;
  setup: string;
  setupCn: string;
  entry: string;
  stopLoss: string;
  takeProfit: string;
  riskReward: string;
  probability: "High" | "Medium" | "Low";
  timeframe: string;
  notes: string;
  notesCn: string;
}

const tradingSetups: TradingSetup[] = [
  {
    id: "1",
    symbol: "TSLA",
    symbolCn: "特斯拉",
    direction: "Short",
    directionCn: "做空",
    setup: "Order Block Rejection",
    setupCn: "訂單塊拒絕",
    entry: "$248.50",
    stopLoss: "$253.50",
    takeProfit: "$238.50",
    riskReward: "1:2",
    probability: "High",
    timeframe: "15m",
    notes: "Wait for rejection at previous session high during NY open, enter on retest",
    notesCn: "等待紐約開盤時在前日高點被拒絕，回測時進場"
  },
  {
    id: "2",
    symbol: "MNQ",
    symbolCn: "納斯達克微型期貨",
    direction: "Long",
    directionCn: "做多",
    setup: "Fair Value Gap Fill",
    setupCn: "公允價值缺口回補",
    entry: "20150.0",
    stopLoss: "20120.0",
    takeProfit: "20210.0",
    riskReward: "1:2",
    probability: "Medium",
    timeframe: "5m",
    notes: "Looking for bounce from overnight FVG during NY session opening",
    notesCn: "尋找紐約時段開盤時從隔夜FVG區域反彈"
  },
  {
    id: "3",
    symbol: "TSLA",
    symbolCn: "特斯拉",
    direction: "Long",
    directionCn: "做多",
    setup: "Liquidity Sweep + Reversal",
    setupCn: "流動性掃蕩+反轉",
    entry: "$242.20",
    stopLoss: "$237.20",
    takeProfit: "$252.20",
    riskReward: "1:2",
    probability: "High",
    timeframe: "15m",
    notes: "Expecting sweep of pre-market lows before reversal higher during NY session",
    notesCn: "預期紐約時段先掃蕩盤前低點再反轉走高"
  },
  {
    id: "4",
    symbol: "MNQ",
    symbolCn: "納斯達克微型期貨",
    direction: "Short",
    directionCn: "做空",
    setup: "Break of Structure",
    setupCn: "結構突破",
    entry: "20088.0",
    stopLoss: "20118.0",
    takeProfit: "20028.0",
    riskReward: "1:2",
    probability: "Medium",
    timeframe: "5m",
    notes: "Short on break below previous 15min low with volume confirmation",
    notesCn: "突破前15分鐘低點並有成交量確認時做空"
  }
];

export function TradingSetups() {
  const getDirectionIcon = (direction: string) => {
    return direction === "Long" ? <TrendingUp className="h-4 w-4 text-green-600" /> : <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case "High":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Low":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          ICT 交易設定 / ICT Trading Setups
        </CardTitle>
        <CardDescription>
          基於ICT方法論的高概率交易機會 / High probability trading opportunities based on ICT methodology
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {tradingSetups.map((setup) => (
            <div key={setup.id} className="border rounded-lg p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{setup.symbol}</h3>
                  <span className="text-sm text-muted-foreground">{setup.symbolCn}</span>
                  <div className="flex items-center gap-1">
                    {getDirectionIcon(setup.direction)}
                    <span className="font-medium">{setup.direction}</span>
                    <span className="text-sm text-muted-foreground">({setup.directionCn})</span>
                  </div>
                </div>
                <Badge className={getProbabilityColor(setup.probability)}>
                  {setup.probability} Probability
                </Badge>
              </div>

              {/* Setup Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">設定類型 / Setup Type</h4>
                  <p className="text-sm">
                    <span className="font-medium">{setup.setup}</span>
                    <br />
                    <span className="text-muted-foreground">{setup.setupCn}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">時間框架 / Timeframe</h4>
                  <Badge variant="outline">{setup.timeframe}</Badge>
                </div>
              </div>

              <Separator />

              {/* Trade Parameters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">進場價 / Entry</h4>
                  <p className="font-mono">{setup.entry}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">止損 / Stop Loss</h4>
                  <p className="font-mono text-red-600">{setup.stopLoss}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">止盈 / Take Profit</h4>
                  <p className="font-mono text-green-600">{setup.takeProfit}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-muted-foreground">風險回報比 / R:R</h4>
                  <Badge variant="secondary">{setup.riskReward}</Badge>
                </div>
              </div>

              <Separator />

              {/* Notes */}
              <div className="space-y-2">
                <h4 className="font-medium">交易備註 / Trading Notes</h4>
                <div className="bg-muted p-3 rounded-lg space-y-1">
                  <p className="text-sm">{setup.notes}</p>
                  <p className="text-sm text-muted-foreground">{setup.notesCn}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="default">
                  設置提醒 / Set Alert
                </Button>
                <Button size="sm" variant="outline">
                  查看圖表 / View Chart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}