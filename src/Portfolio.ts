import Stock from "./Stock";

class Portfolio {
  private stocks: Map<Stock, number>;
  constructor() {
    this.stocks = new Map();
  }

  public addStock(stock: Stock, quantity: number): void {
    const currentQuantity = this.stocks.get(stock) || 0;
    this.stocks.set(stock, currentQuantity + quantity);
  }

  public getProfit(
    startDate: Date,
    endDate: Date,
    annualized: boolean = false
  ): number {
    if (endDate < startDate) {
      throw new Error("End date must be after start date");
    }

    let initialValue = 0;
    let finalValue = 0;

    for (const [stock, quantity] of this.stocks) {
      initialValue += stock.getPrice(startDate) * quantity;
      finalValue += stock.getPrice(endDate) * quantity;
    }

    const absoluteReturn = finalValue - initialValue;

    if (!annualized) {
      return absoluteReturn;
    }

    const numberOfDays =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    const totalReturn = finalValue / initialValue - 1;
    const annualizedReturn = Math.pow(1 + totalReturn, 365 / numberOfDays) - 1;

    return annualizedReturn;
  }
}

export default Portfolio;
