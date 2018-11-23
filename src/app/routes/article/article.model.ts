export class Article {
  serialNumber: number;
  name: string;
  title: string;
  content: string;
  area: string;
  tag: string[];

  redener_content (): string {
    return this.content;
  }
}
