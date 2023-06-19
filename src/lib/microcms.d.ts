import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Blog = {
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;
