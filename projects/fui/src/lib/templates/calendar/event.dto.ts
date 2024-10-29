export interface EventDTO {
  date: number;
  year: string;
  month: string;
  color: 'primary' | 'success' | 'warning' | 'danger';
  event: {
    title: string;
    subTitle: string;
    start: string;
    end: string;
    place: string;
    description: string;
  };
}

export interface EventPerdateDTO {
  event: EventDTO;
  total: number;
}
