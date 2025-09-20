import { TradingPlan } from "./components/TradingPlan";
import { EconomicCalendar } from "./components/EconomicCalendar";
import { TradingSetups } from "./components/TradingSetups";
import { RiskManagement } from "./components/RiskManagement";
import { MarketStructure } from "./components/MarketStructure";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <TradingPlan />
        
        <div className="mt-8">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calendar">經濟日曆 / Calendar</TabsTrigger>
              <TabsTrigger value="structure">市場結構 / Structure</TabsTrigger>
              <TabsTrigger value="setups">交易設定 / Setups</TabsTrigger>
              <TabsTrigger value="risk">風險管理 / Risk</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="mt-6">
              <EconomicCalendar />
            </TabsContent>
            
            <TabsContent value="structure" className="mt-6">
              <MarketStructure />
            </TabsContent>
            
            <TabsContent value="setups" className="mt-6">
              <TradingSetups />
            </TabsContent>
            
            <TabsContent value="risk" className="mt-6">
              <RiskManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}