export interface ClientResult {
  value: string;
  label: string;
}

export interface ClientStory {
  id: number;
  name: string;
  logo: string;
  challenge: string;
  solution: string;
  results: ClientResult[];
  url: string;
}