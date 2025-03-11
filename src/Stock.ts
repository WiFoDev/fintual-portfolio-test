class Stock {
  private symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  public getPrice(_: Date): number {
    // @TODO: Implement price retrieval from API or datasource
    return Math.random() * 100;
  }
}

export default Stock;
