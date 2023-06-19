import {
  createClient,
  MicroCMSListResponse,
  MicroCMSQueries,
} from "microcms-js-sdk";
import type { Blog } from "@lib/microcms.d";

const microCmsClient = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await microCmsClient.get<MicroCMSListResponse<Blog>>({
    endpoint: "blogs",
    queries,
  });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await microCmsClient.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
