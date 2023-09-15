import create from "zustand";

type FilterMenuState = {
  filterMenuProps: {
    open: boolean;
  };
  setFilterMenuProps: (open: boolean) => void;
};
export const useFilterMenuStore = create<FilterMenuState>((set) => ({
  filterMenuProps: { open: false },
  setFilterMenuProps: (open) => {
    if (open === true) {
      document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
      // document.body.style.filter = "blur(8px)";
    } else {
      document.body.style.overflowY = "unset";
      document.body.style.position = "unset";
      // document.body.style.filter = "unset";
    }
    set(() => ({
      filterMenuProps: {
        open,
      },
    }));
  },
}));
