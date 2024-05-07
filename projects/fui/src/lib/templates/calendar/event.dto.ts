export interface EventDTO {
  date: number;
  year: string;
  month: string;
  event: {
    title: string;
    subTitle: string;
    start: string;
    end: string;
    place: string;
    description: string;
  };
}
