/**
 *  Class to implment the JSON Feed format.
 *
 * @see https://jsonfeed.org/version/1.1
 */
interface Item {
  id: string;
  url?: string;
  external_url?: string;
  title?: string;
  content_html?: string;
  content_text?: string;
  summary?: string;
  image?: string;
  banner_image?: string;
  date_published?: string;
  date_modified?: string;
  authors: Author[];
  tags: string[];
  language?: string;
}

interface Author {
  name?: string;
  url?: string;
  avatar?: string;
}

export class Feed {
  version = "https://jsonfeed.org/version/1.1";
  title: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  user_comment?: string;
  next_url?: string;
  icon?: string;
  favicon?: string;
  authors: Author[] = [];
  language?: string;
  expired?: boolean;
  items: Item[] = [];

  constructor(title: string) {
    this.title = title;
  }

  public addItem = (item: Item) => {
    this.items.push(item);
  };

  public toString = (): string => {
    return JSON.stringify(this);
  };

  static fromString = (str: string): Feed => {
    const feed = JSON.parse(str);
    return new Feed(feed);
  };
}