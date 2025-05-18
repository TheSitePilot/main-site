import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderSlot, d as renderComponent } from './astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CN2FcIee.mjs';
import 'clsx';
import { $ as $$Card } from './Card_CK7K5rH-.mjs';
/* empty css                         */

const s1 = new Proxy({"src":"/_astro/company-logo1.syO998vd.svg","width":111,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo1.svg";
							}
							
							return target[name];
						}
					});

const s2 = new Proxy({"src":"/_astro/company-logo2.CREQfids.svg","width":126,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo2.svg";
							}
							
							return target[name];
						}
					});

const s3 = new Proxy({"src":"/_astro/company-logo3.c2biK_9v.svg","width":147,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo3.svg";
							}
							
							return target[name];
						}
					});

const s4 = new Proxy({"src":"/_astro/company-logo4.COtkDUvM.svg","width":129,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo4.svg";
							}
							
							return target[name];
						}
					});

const s5 = new Proxy({"src":"/_astro/company-logo5.BbmFav3z.svg","width":127,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo5.svg";
							}
							
							return target[name];
						}
					});

const s6 = new Proxy({"src":"/_astro/company-logo6.BTRoJjnx.svg","width":125,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/company/company-logo6.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://positivustheme.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "D:/Projects/TheSitePilot/main-site/src/components/sections/Section.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const sponsors = [
    { logo: s6, alt: "Amazon logo" },
    { logo: s5, alt: "Dribble logo" },
    { logo: s4, alt: "HubSpot logo" },
    { logo: s3, alt: "Notion logo" },
    { logo: s2, alt: "Netflix logo" },
    { logo: s1, alt: "Zoom logo" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-row items-center"> <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6"> ${sponsors.map((sponsor) => {
    return renderTemplate`<div class="p-4 grayscale transition duration-200 hover:grayscale-0"> ${renderComponent($$result2, "Image", $$Image, { "src": sponsor.logo, "class": "h-12 w-auto mx-auto", "alt": sponsor.alt, "loading": "lazy" })} </div>`;
  })} </div> </div> ` })}`;
}, "D:/Projects/TheSitePilot/main-site/src/components/sections/Sponsors.astro", void 0);

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "D:/Projects/TheSitePilot/main-site/src/components/ui/SectionTitle.astro", void 0);

const gob = new Proxy({"src":"/_astro/icon6.gU4U-Esm.svg","width":41,"height":41,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/icon6.svg";
							}
							
							return target[name];
						}
					});

const wob = new Proxy({"src":"/_astro/icon7._oy4oYgP.svg","width":41,"height":41,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/icon7.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, titleTop, titleBottom, img, alt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "data-astro-cid-qzn24t3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${index === 1 ? "bg-gray" : index === 2 ? "bg-green" : "bg-dark text-gray"}`, "class")} data-astro-cid-qzn24t3o> <h3${addAttribute(`flex flex-col col-span-2 lg:col-span-1`, "class")} data-astro-cid-qzn24t3o> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleTop}</span> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleBottom}</span> </h3> <picture class="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": alt, "class": "h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover", "data-astro-cid-qzn24t3o": true })} </picture> <div class="flex items-end" data-astro-cid-qzn24t3o> <a${addAttribute(link, "href")} class="flex items-center gap-3.5" data-astro-cid-qzn24t3o>${renderComponent($$result2, "Image", $$Image, { "src": index === 1 || index === 2 ? gob : wob, "alt": alt, "data-astro-cid-qzn24t3o": true })} <span class="hidden sm:block" data-astro-cid-qzn24t3o>Service Info</span></a> </div> </div> ` })} `;
}, "D:/Projects/TheSitePilot/main-site/src/components/ui/ServiceCard.astro", void 0);

const c1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const c5 = new Proxy({"src":"/_astro/card-pic5.CqK5dBMJ.png","width":210,"height":196,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic5.png";
							}
							
							return target[name];
						}
					});

const c6 = new Proxy({"src":"/_astro/card-pic6.CXJkFMY0.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/TheSitePilot/main-site/src/assets/pics/card-pic6.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      img: c1,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 2,
      titleTop: "Pay-per-click",
      titleBottom: "advertising",
      img: c2,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 3,
      titleTop: "Social Media",
      titleBottom: "Marketing",
      img: c3,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 1,
      titleTop: "Email",
      titleBottom: "Marketing",
      img: c4,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 2,
      titleTop: "Content",
      titleBottom: "Creation",
      img: c5,
      alt: "SEO",
      link: "https://google.com"
    },
    {
      index: 3,
      titleTop: "Analytics and",
      titleBottom: "Tracking",
      img: c6,
      alt: "SEO",
      link: "https://google.com"
    }
  ];
  const description = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-5"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Services", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-3 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "D:/Projects/TheSitePilot/main-site/src/components/sections/Services.astro", void 0);

export { $$Sponsors as $, $$Services as a, $$SectionTitle as b, $$Section as c };
