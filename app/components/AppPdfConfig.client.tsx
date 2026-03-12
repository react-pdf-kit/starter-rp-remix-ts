import { RPConfig } from "@react-pdf-kit/viewer";
import { FC, PropsWithChildren } from "react";

export const AppPdfConfig: FC<PropsWithChildren> = ({ children }) => {
  return <RPConfig licenseKey="">{children}</RPConfig>;
};
