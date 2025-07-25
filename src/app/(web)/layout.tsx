import { PropsWithChildren } from "react";
import Header from "@/components/header/header";
import Navigation from "@/components/navigation/navigation";
import AppSidebar from "@/components/sidebar/app-sidebar";
import { serverApi } from "@/apis/fetcher";
import { TGetCategoriesResponse } from "@/libraries/pg/categories/categories.type";
import { CATEGORY_TAG } from "@/constants";

import "@/styles/cropper.scss";
import css from "./layout.module.scss";

export default async function Layout({ children }: PropsWithChildren) {
  const categoriesJson = await serverApi
    .get<TGetCategoriesResponse>("categories", {
      next: { revalidate: 300, tags: [CATEGORY_TAG] },
    })
    .json();

  return (
    <div className={css.shell}>
      <AppSidebar categories={categoriesJson.data} />
      <div className={css.app}>
        <Header />
        <div className={css.expand}>{children}</div>
        {/* <Navigation /> */}
      </div>
    </div>
  );
}
