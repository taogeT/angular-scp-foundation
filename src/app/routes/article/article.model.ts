export class Article {
  code: string;
  title: string;
  content: string;
  tag: string[];

  redener_content (): string {
    return this.content;
  }
}
