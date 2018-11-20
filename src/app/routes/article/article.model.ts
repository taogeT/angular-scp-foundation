export class Article {
  name: string;
  title: string;
  content: string;
  tag: string[];

  redener_content (): string {
    return this.content;
  }
}
