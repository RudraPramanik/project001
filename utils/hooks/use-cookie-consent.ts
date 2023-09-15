import React from "react";

function useCookieConsent() {
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).initCookieConsent !== "undefined"
    ) {
      const cookieConsent = (window as any).initCookieConsent();
      cookieConsent.run({
        autorun: true,
        delay: 0,
        auto_language: true,
        autoclear_cookies: true,
        cookie_expiration: 365,
        force_consent: false,
        page_scripts: true,
        gui_options: {
          consent_modal: {
            layout: "cloud", // box(default),cloud,bar
            position: "top center", // bottom(default),top + left,right,center:=> examples: 'bottom' or 'top right'
            transition: "slide", // zoom(default),slide
          },
          settings_modal: {
            layout: "box", // box(default),bar
            // position: 'left',            // right(default),left (available only if bar layout selected)
            transition: "slide", // zoom(default),slide
          },
        },

        /* End new options added in v2.4 */

        onAccept: function (cookie: any) {
          // console.log("onAccept fired ...");
        },

        onChange: function (cookie: any) {
          // console.log("onChange fired ...");
          // do something ...
        },

        languages: {
          nl: {
            consent_modal: {
              title: "Zin in een cookie? 🍪",
              description: `<a class="cc-link" href="https://tbeste.nl/">tbeste.nl</a>. gebruikt functionele, analytische en YouTube cookies. Functionele, analytische plaatsen we altijd zodat onze website correct functioneert en we op een privacy vriendelijke manier kunnen zien hoeveel lezers we hebben. Wanneer je alle cookies accepteert worden er ook YouTube video's geladen in sommige artikelen, en daarbij YouTube cookies geplaatst. <button type="button" id="show_settings" data-cc="c-settings" class="">Bekijk cookies.</button>`,
              primary_btn: {
                text: "Accepteer alle cookies",
                role: "accept_all", //'accept_selected' or 'accept_all'
              },

              secondary_btn: {
                //text : 'Manage preferences',
                // role : 'settings'

                text: "Alleen functioneel",
                role: "accept_necessary",
                //'settings' or 'accept_necessary'
              },
            },
            settings_modal: {
              title:
                '<div>Cookie voorkeuren</div><div aria-hidden="true" style="font-size: .8em; font-weight: 200; color: #ff00ff; margin-top: 5px;"></div>',
              save_settings_btn: "Sla op",
              accept_all_btn: "Accepteer alles",
              close_btn_label: "Alleen functioneel",
              cookie_table_headers: [
                { col1: "Naam" },
                { col2: "Aanbieder" },
                { col3: "Lifetime" },
                { col4: "Omschrijving" },
              ],
              blocks: [
                {
                  title: "Cookie gebruik",
                  description:
                    "tbeste.nl plaatst alleen functionele en analytische cookies, deze plaatsen we altijd. Deze zijn noodzakelijk om de website goed te laten werken en het gebruik te kunnen meten.",
                },
                {
                  title: "Functionele cookies",
                  description:
                    "Deze cookies zijn strikt noodzakelijk voor de goede werking van de website. Zoals het plaatsen van feedback van een artikel.",
                  toggle: {
                    value: "Functionele cookies",
                    enabled: true,
                    readonly: false,
                  },
                  cookie_table: [
                    {
                      col1: "cc_cookie",
                      col2: "tbeste.nl",
                      col3: "12 maanden",
                      col4: "Deze cookie is voor deze cookie pop-up. Zonder deze cookie krijg op elke paginaweergave een nieuwe pop-up.",
                    },
                  ],
                },
                {
                  title: "Analytische cookies",
                  description:
                    "Analytische cookies stellen ons in staat het websiteverkeer te meten: bijvoorbeeld hoe vaak onze site wordt bezocht en naar welke informatie bezoekers zoeken. Zo weten we welke onderdelen van de site populair zijn en hoe we onze website kunnen verbeteren. De statistieken die wij verzamelen zijn niet te herleiden tot individuen. De gegevens worden na verzameling geanonimiseerd.",
                  toggle: {
                    value: "analytics",
                    enabled: true,
                    readonly: true,
                  },
                  cookie_table: [
                    {
                      col1: "_ga",
                      col2: "Google Analytics",
                      col3: "24 maanden",
                      col4: "Wordt gebruikt om gebruikers te kunnen onderscheiden. Alle gegevens om jou te kunnen indentificeren worden geanonimiseerd.",
                    },
                    {
                      col1: "_gid",
                      col2: "Google Analytics",
                      col3: "24 uur",
                      col4: "Wordt gebruikt om gebruikers te kunnen onderscheiden. Alle gegevens om jou te kunnen indentificeren worden geanonimiseerd.",
                    },
                    {
                      col1: "_gat_gtag_UA_XXXXXX_1",
                      col2: "Google Analytics",
                      col3: "24 maanden",
                      col4: "Wordt gebruikt om de sessiestatus te bewaren. Alle gegevens om jou te kunnen indentificeren worden geanonimiseerd.",
                    },
                  ],
                },
                {
                  title: "Meer informatie",
                  description:
                    "Vragen over onze cookies, of zien we iets over het hoofd? Laat het ons weten!" +
                    ' <a class="cc-link" href="https://tbeste.nl/contact/">Contact opnemen</a>.',
                },
              ],
            },
          },
        },
      });
    }
  }, []);
}

export default useCookieConsent;
