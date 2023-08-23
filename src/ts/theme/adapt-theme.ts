export function adaptTheme(theme: string) {
  const sw_ths: NodeListOf<Element> =
    document.querySelectorAll(".switch-theme");

  sw_ths.forEach((e: Element) => {
    const darkThemeClass = e.getAttribute("data-dark-theme") || "dark-theme";
    const lightThemeClass = e.getAttribute("data-light-theme") || "light-theme";
    switch (theme) {
      case "dark":
        e.classList.add(darkThemeClass);
        e.classList.remove(lightThemeClass);
        break;
      case "light":
        e.classList.add(lightThemeClass);
        e.classList.remove(darkThemeClass);
        break;
    }
  });
}
