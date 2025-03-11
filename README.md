# Portfolio Value Calculator

A TypeScript implementation of a simple portfolio value calculator that can compute both absolute and annualized returns for a collection of stocks over a specified time period.

## Features

- Add stocks to portfolio with specified quantities
- Calculate absolute profit between two dates
- Calculate annualized returns
- Type-safe implementation using TypeScript

## Project Structure

```
src/
├── Stock.ts        # Stock class with price retrieval functionality
├── Portfolio.ts    # Portfolio management and profit calculation
└── example.ts      # Usage examples
```

## Usage

```typescript
import Stock from "./Stock";
import Portfolio from "./Portfolio";

// Create a portfolio
const portfolio = new Portfolio();

// Create and add stocks
const apple = new Stock("AAPL");
portfolio.addStock(apple, 100); // Add 100 shares of Apple

// Calculate profits
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");

// Get absolute profit
const profit = portfolio.getProfit(startDate, endDate);
console.log(`Absolute profit: $${profit.toFixed(2)}`);

// Get annualized return
const annualizedReturn = portfolio.getProfit(startDate, endDate, true);
console.log(`Annualized return: ${(annualizedReturn * 100).toFixed(2)}%`);
```

## API Reference

### Stock Class

```typescript
class Stock {
  constructor(symbol: string);
  getPrice(date: Date): number;
}
```

### Portfolio Class

```typescript
class Portfolio {
  constructor();
  addStock(stock: Stock, quantity: number): void;
  getProfit(startDate: Date, endDate: Date, annualized?: boolean): number;
}
```

## Implementation Details

### Profit Calculation

The portfolio calculates profits in two ways:

1. **Absolute Profit**: Simple difference between final and initial values
2. **Annualized Return**: Uses the formula `(1 + totalReturn)^(365/numberOfDays) - 1`

### Time Calculation

The number of days between dates is calculated precisely, including partial days:

```typescript
const numberOfDays =
  (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
```

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/WiFoDev/fintual-portfolio-test
```

2. Install dependencies

```bash
npm install
```

3. Run the example

```bash
npm run dev
```
