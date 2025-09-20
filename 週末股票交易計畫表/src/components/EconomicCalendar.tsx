import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, AlertCircle } from "lucide-react";

interface EconomicEvent {
  date: string;
  time: string;
  event: string;
  eventEn: string;
  impact: "High" | "Medium" | "Low";
  currency: string;
  forecast?: string;
  previous?: string;
}

const economicEvents: EconomicEvent[] = [
  {
    date: "2024-09-23",
    time: "08:30",
    event: "美國初請失業金人數",
    eventEn: "US Initial Jobless Claims",
    impact: "Medium",
    currency: "USD",
    forecast: "220K",
    previous: "219K"
  },
  {
    date: "2024-09-24",
    time: "10:00",
    event: "美國新屋銷售",
    eventEn: "US New Home Sales",
    impact: "Medium",
    currency: "USD",
    forecast: "720K",
    previous: "739K"
  },
  {
    date: "2024-09-25",
    time: "08:30",
    event: "美國耐久財訂單",
    eventEn: "US Durable Goods Orders",
    impact: "High",
    currency: "USD",
    forecast: "0.5%",
    previous: "-0.8%"
  },
  {
    date: "2024-09-26",
    time: "08:30",
    event: "美國核心PCE物價指數月率",
    eventEn: "US Core PCE Price Index MoM",
    impact: "High",
    currency: "USD",
    forecast: "0.2%",
    previous: "0.1%"
  },
  {
    date: "2024-09-27",
    time: "10:00",
    event: "美國密西根大學消費者信心指數終值",
    eventEn: "US Michigan Consumer Sentiment Final",
    impact: "Medium",
    currency: "USD",
    forecast: "69.3",
    previous: "69.3"
  },
  {
    date: "2024-09-26",
    time: "10:30",
    event: "美國EIA原油庫存",
    eventEn: "US EIA Crude Oil Inventories",
    impact: "Medium",
    currency: "USD",
    forecast: "-1.5M",
    previous: "-6.9M"
  },
  {
    date: "2024-09-27",
    time: "08:30",
    event: "美國GDP年化季率終值",
    eventEn: "US GDP Annualized QoQ Final",
    impact: "High",
    currency: "USD",
    forecast: "3.0%",
    previous: "3.0%"
  }
];

export function EconomicCalendar() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      case "Low":
        return "outline";
      default:
        return "outline";
    }
  };

  const getImpactIcon = (impact: string) => {
    if (impact === "High") {
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          本週重要經濟事件 / Key Economic Events This Week
        </CardTitle>
        <CardDescription>
          關注高影響事件對市場的潛在影響 / Monitor high-impact events for potential market moves
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {economicEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  {getImpactIcon(event.impact)}
                  <h3 className="font-semibold">{event.event}</h3>
                  <Badge variant={getImpactColor(event.impact) as any} className="text-xs">
                    {event.impact}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{event.eventEn}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">
                    {new Date(event.date).toLocaleDateString('zh-TW', { 
                      month: 'long', 
                      day: 'numeric' 
                    })} {event.time}
                  </span>
                  <span className="font-mono bg-muted px-2 py-1 rounded text-xs">
                    {event.currency}
                  </span>
                </div>
              </div>
              <div className="text-right space-y-1">
                {event.forecast && (
                  <div className="text-sm">
                    <span className="text-muted-foreground">預測 Forecast:</span>
                    <span className="ml-1 font-mono">{event.forecast}</span>
                  </div>
                )}
                {event.previous && (
                  <div className="text-sm">
                    <span className="text-muted-foreground">前值 Previous:</span>
                    <span className="ml-1 font-mono">{event.previous}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}