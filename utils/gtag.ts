export const pageview = (url: string) => {
  window.gtag("config", "UA-143758916-1", {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
