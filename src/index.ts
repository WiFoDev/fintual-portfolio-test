import Stock from "./Stock";
import Portfolio from "./Portfolio";

const portfolio = new Portfolio();

const apple = new Stock("AAPL");
const microsoft = new Stock("MSFT");

portfolio.addStock(apple, 100);
portfolio.addStock(microsoft, 50);

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");

const profit = portfolio.getProfit(startDate, endDate);
console.log(`Absolute profit: $${profit.toFixed(2)}`);

const annualizedReturn = portfolio.getProfit(startDate, endDate, true);
console.log(`Annualized return: ${(annualizedReturn * 100).toFixed(2)}%`);
