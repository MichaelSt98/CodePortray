export interface Post {
  file: string;
  title: string;
  slug?: string;
  description: string;
  date: Date;
}

export const entries: Post[] = [
  {
    file: 'this-is-a-test',
    title: 'Title: This is a test',
    date: new Date('2021-01-01'),
    description: 'This is a rather longer description of what this is about ... This is a rather longer description of what this is about ... This is a rather longer description of what this is about ... This is a rather longer description of what this is about ... This is a rather longer description of what this is about ... This is a rather longer description of what this is about ... This is a rather longer description of what this is about ...',
  },
  {
    file: 'this-is-another-test',
    title: 'Title: This is another test',
    date: new Date('2021-02-03'),
    description: 'This is another rather longer description of what this is about ...',
  }
  ];
