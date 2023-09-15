import create from "zustand";

type MobileMenuState = {
  mobileMenuProps: {
    open: boolean;
  };
  setMobileMenuProps: (open: boolean) => void;
};
export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  mobileMenuProps: { open: false },
  setMobileMenuProps: (open) => {
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
      mobileMenuProps: {
        open,
      },
    }));
  },
}));

export const catsLinks = {
  categories: [
    {
      name: "Elektronica",
      slug: "elektronica",
    },
    {
      name: "Computer",
      slug: "computer",
    },
    {
      name: "Kantoor",
      slug: "kantoor",
    },
    {
      name: "Klussen",
      slug: "klussen",
    },
    {
      name: "Outdoor",
      slug: "outdoor",
    },
    {
      name: "Keuken",
      slug: "keuken",
    },
    {
      name: "Tuin",
      slug: "tuin",
    },
    {
      name: "Auto",
      slug: "auto",
    },
    {
      name: "Kinderen",
      slug: "kinderen",
    },
    {
      name: "Dieren",
      slug: "dieren",
    },
  ],
};
