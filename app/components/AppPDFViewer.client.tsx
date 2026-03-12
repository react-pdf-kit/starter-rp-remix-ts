import {
  RPProvider,
  RPPages,
  RPProviderProps,
  RPLayoutProps,
  RPLayout,
} from "@react-pdf-kit/viewer";

interface Props {
  showToolbar?: boolean;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

export const AppPdfViewer = (props: Props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      <RPLayout toolbar={showToolbar} {...defaultLayoutProps}>
        <RPPages />
      </RPLayout>
    </RPProvider>
  );
};
