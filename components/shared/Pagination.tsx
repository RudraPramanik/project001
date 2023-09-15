import { Button } from "@design-system";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { paginate } from "@utils";
import clsx from "clsx";
import React from "react";

export interface PaginationProps {
  isLoading: boolean;
  paginator: ReturnType<typeof paginate>;
  goNext: () => void;
  goPrev: () => void;
  goPage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  goNext,
  goPrev,
  isLoading,
  paginator,
  goPage,
}) => {
  const handleNext = () => {
    goNext();
  };
  const handlePrev = () => {
    goPrev();
  };

  return (
    <div className="flex items-center justify-center px-6 space-x-6 text-sm dark:text-gray-300">
      <div className="flex items-center space-x-4">
        <button
          disabled={!paginator.hasPrev}
          className={clsx(
            "disabled:opacity-50 disabled:cursor-not-allowed ringify w-5",
          )}
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        {isLoading ? null : (
          <>
            {paginator.pages.map((page) => {
              if (paginator.currentPage === page) {
                return <Button key={page} className="text-sm text-white" />;
              } else {
                return (
                  <button
                    onClick={() => goPage(page)}
                    key={page}
                    className="w-5 p-2"
                  >
                    {page}
                  </button>
                );
              }
            })}
          </>
        )}
        <button
          disabled={!paginator.hasNext}
          className={clsx(
            "disabled:opacity-50 disabled:cursor-not-allowed ringify w-5",
          )}
          onClick={handleNext}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
