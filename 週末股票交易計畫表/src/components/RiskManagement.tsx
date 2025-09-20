import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { AlertTriangle, Shield, DollarSign, Percent } from "lucide-react";

export function RiskManagement() {
  const accountBalance = 50000; // 假設帳戶餘額
  const maxRiskPerTrade = 0.01; // 1% per trade
  const maxDailyRisk = 0.03; // 3% per day
  const currentOpenRisk = 0.00; // 0% currently at risk (day trading)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          風險管理 / Risk Management
        </CardTitle>
        <CardDescription>
          ICT風險控制原則與資金管理 / ICT risk control principles and money management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <h3 className="font-semibold">帳戶餘額 / Account Balance</h3>
            </div>
            <p className="text-2xl font-bold">${accountBalance.toLocaleString()}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="h-4 w-4 text-blue-600" />
              <h3 className="font-semibold">單筆風險 / Risk Per Trade</h3>
            </div>
            <p className="text-2xl font-bold">{(maxRiskPerTrade * 100).toFixed(1)}%</p>
            <p className="text-sm text-muted-foreground">
              ${(accountBalance * maxRiskPerTrade).toLocaleString()}
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <h3 className="font-semibold">當前風險 / Current Risk</h3>
            </div>
            <p className="text-2xl font-bold">{(currentOpenRisk * 100).toFixed(1)}%</p>
            <p className="text-sm text-muted-foreground">
              ${(accountBalance * currentOpenRisk).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Risk Utilization */}
        <div className="space-y-4">
          <h3 className="font-semibold">風險使用率 / Risk Utilization</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>每日風險限額 / Daily Risk Limit</span>
                <span>{(currentOpenRisk / maxDailyRisk * 100).toFixed(1)}% / 100%</span>
              </div>
              <Progress value={(currentOpenRisk / maxDailyRisk) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>可用交易次數 / Available Trades</span>
                <span>{Math.floor((maxDailyRisk - currentOpenRisk) / maxRiskPerTrade)} 筆交易</span>
              </div>
              <Progress 
                value={((maxDailyRisk - currentOpenRisk) / maxDailyRisk) * 100} 
                className="h-2" 
              />
            </div>
          </div>
        </div>

        {/* ICT Risk Rules */}
        <div className="space-y-4">
          <h3 className="font-semibold">ICT 風險管理原則 / ICT Risk Management Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">1. 固定風險百分比 / Fixed Risk Percentage</h4>
                <p className="text-sm text-muted-foreground">
                  每筆交易風險不超過帳戶餘額1%（Day Trading）
                  <br />
                  Never risk more than 1% per trade (Day Trading)
                </p>
                <Badge variant="secondary" className="mt-2">核心原則</Badge>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">2. 最小風險回報比 / Minimum Risk:Reward</h4>
                <p className="text-sm text-muted-foreground">
                  至少1:2的風險回報比，優選1:3以上
                  <br />
                  Minimum 1:2 R:R, prefer 1:3 or higher
                </p>
                <Badge variant="secondary" className="mt-2">執行標準</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">3. 連續虧損限制 / Consecutive Loss Limit</h4>
                <p className="text-sm text-muted-foreground">
                  連續3筆虧損後暫停交易一天
                  <br />
                  Stop trading for a day after 3 consecutive losses
                </p>
                <Badge variant="destructive" className="mt-2">保護機制</Badge>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium mb-2">4. 情緒管理 / Emotional Control</h4>
                <p className="text-sm text-muted-foreground">
                  避免報復性交易和過度自信
                  <br />
                  Avoid revenge trading and overconfidence
                </p>
                <Badge variant="outline" className="mt-2">心理紀律</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Position Sizing Calculator */}
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-3">倉位計算器 / Position Size Calculator</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">帳戶餘額:</span>
              <p className="font-mono">${accountBalance.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-muted-foreground">風險金額:</span>
              <p className="font-mono">${(accountBalance * maxRiskPerTrade).toLocaleString()}</p>
            </div>
            <div>
              <span className="text-muted-foreground">止損距離:</span>
              <p className="font-mono">$5.00 (TSLA範例)</p>
            </div>
            <div>
              <span className="text-muted-foreground">建議倉位:</span>
              <p className="font-mono font-bold">100 股</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}