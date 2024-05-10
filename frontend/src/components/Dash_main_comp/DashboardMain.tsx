import React from "react";
import {
  MainWrapper,
  DashboardHeader,
  DashboardTitle,
  CardsWrapper,
  WalletMoney,
  Card,
  IconWrapper,
  IconSpan,
  CardTitle,
  CardAmount,
  LastUpdated,
  InfoWrapper,
  DataVisualsWrapper,
  BarchartCard,
  BarChartWrapper,
  BarChartTitle,
  DoughnutChartCard,
  DoughnutChartWrapper,
  DoughnutChartTitle,
  FinancialGoalsWrapper,
  StyledTextMuted,
} from "./DashmainStyles";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Barchart from "../Barchart";
import DoughnutChart from "../Doughnut";
import FinancialGoalsCard from "../FinancialGoalsCard";
import { useTheme } from "../contexts/ThemeContext";

const Main: React.FC = () => {
  const { mode } = useTheme();
  return (
    <MainWrapper>
      <div className="mywalletSummary">
        <DashboardHeader>
          <DashboardTitle>Dashboard</DashboardTitle>
        </DashboardHeader>
        <CardsWrapper>
          <WalletMoney>
            <Card
              theme={{
                textcolor: mode === "dark" ? "#7d8da1" : "#46484a",
                background: mode === "dark" ? "#181a1e" : "#f6f6f9",
              }}
            >
              <IconWrapper>
                <IconSpan bgColor="#7380ec">
                  <AccountBalanceWalletOutlinedIcon />
                </IconSpan>
              </IconWrapper>
              <InfoWrapper>
                <CardTitle>My Wallet</CardTitle>
                <CardAmount>$1000.000</CardAmount>
              </InfoWrapper>
              <LastUpdated>
                <StyledTextMuted>Last 24 Hours</StyledTextMuted>
              </LastUpdated>
            </Card>
            <Card>
              <IconWrapper>
                <IconSpan bgColor="#41f1b6">
                  <TrendingUpOutlinedIcon />
                </IconSpan>
              </IconWrapper>
              <InfoWrapper>
                <CardTitle>Income</CardTitle>
                <CardAmount>$500.000</CardAmount>
              </InfoWrapper>
              <LastUpdated>
                <StyledTextMuted>Last 24 Hours</StyledTextMuted>
              </LastUpdated>
            </Card>
            <Card>
              <IconWrapper>
                <IconSpan bgColor="#ff7782">
                  <TrendingDownOutlinedIcon />
                </IconSpan>
              </IconWrapper>
              <InfoWrapper>
                <CardTitle>Expenses</CardTitle>
                <CardAmount>$300.000</CardAmount>
              </InfoWrapper>
              <LastUpdated>
                <StyledTextMuted>Last 24 Hours</StyledTextMuted>
              </LastUpdated>
            </Card>
          </WalletMoney>
        </CardsWrapper>
      </div>

      {/* Data Visuals section */}
      <DataVisualsWrapper>
        <BarchartCard
          theme={{
            textcolor: mode === "dark" ? "#7d8da1" : "#46484a",
            background: mode === "dark" ? "#181a1e" : "#f6f6f9",
          }}
        >
          <BarChartWrapper>
            <BarChartTitle
              theme={{
                textcolor: mode === "dark" ? "#7d8da1" : "#46484a",
              }}
            >
              Budgets Overview
            </BarChartTitle>
            <Barchart />
          </BarChartWrapper>
        </BarchartCard>
        <DoughnutChartCard
          theme={{
            textcolor: mode === "dark" ? "#7d8da1" : "#46484a",
            background: mode === "dark" ? "#181a1e" : "#f6f6f9",
          }}
        >
          <DoughnutChartWrapper>
            <DoughnutChartTitle>Financial Overview</DoughnutChartTitle>
            <DoughnutChart />
          </DoughnutChartWrapper>
        </DoughnutChartCard>
        <FinancialGoalsWrapper
          theme={{
            textcolor: mode === "dark" ? "#7d8da1" : "#46484a",
            background: mode === "dark" ? "#181a1e" : "#f6f6f9",
          }}
        >
          <FinancialGoalsCard />
        </FinancialGoalsWrapper>
      </DataVisualsWrapper>
    </MainWrapper>
  );
};

export default Main;
