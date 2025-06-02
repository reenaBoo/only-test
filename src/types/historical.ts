export interface HistoricalEvent {
  id: string;
  year: number;
  description: string;
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  events: HistoricalEvent[];
  color: string;
}

export interface HistoricalData {
  periods: HistoricalPeriod[];
}

export interface CircularPoint {
  id: string;
  angle: number;
  x: number;
  y: number;
  label: string;
  isActive: boolean;
}
