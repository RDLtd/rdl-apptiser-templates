console.log(`env = ${process.env.NODE_ENV}`);
if(process.env.NODE_ENV === 'production') {
    console.log = () => {}
}

import scroll from './modules/lenis-scroll';
import map from './modules/google-advanced-map';
import formatting from "./modules/formatting";
import nav from './modules/nav';
import gallery from './modules/glightbox-gallery';
import eventsWidget from './modules/events-widget'
import about from "./modules/about";
import events from './modules/events';
import logo from "./modules/logo";
import claim from "./modules/claim";
import gtags from "./modules/gtags";

nav();
logo();
formatting();
gallery();
about();
events();
eventsWidget();
map();
claim();
scroll();
gtags();








