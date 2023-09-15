import { GetErrorPageQuery } from "@adapters";
import { Button } from "@design-system";
import { DefaultLayout } from "@layouts";
import { usePageContent } from "@utils/contexts/page-content.context";

export interface DefaultErrorProps {}
const DefaultError: React.FC<DefaultErrorProps> = () => {
  const { content } = usePageContent();
  const errorPageContent = content as GetErrorPageQuery;

  return (
    <DefaultLayout hero={null} heroclassname={""}>
      {/* TODO: Add content */}
    </DefaultLayout>
  );
};

export default DefaultError;
