import "/src/ButtonContainerComponent.js";
import "/src/WelcomeComponent.js";
import "/src/HeaderComponent.js";
import "/src/ButtonComponent.js";
import "/src/FooterComponent.js";
import "/src/MenuComponent.js";
import "/src/SideComponent.js";
import "/src/DienstComponent.js";
import "/src/DienstenListComponent.js";
import "/src/TarievenComponent.js";

import { Router } from '@vaadin/router';

// Define routes
const routes = [
    { path: '/', component: 'welcome-element' },
    { path: '/diensten', component: 'diensten-lijst-element' },
    { path: '/over-mij', component: 'over-mij-element' },
    { path: '/afspraak-maken', component: 'afspraak-maken-element' },
    { path: '/tarieven', component: 'tarieven-element' },
    { path: '/contact', component: 'contact-element' },
];

// Initialize the router
const router = new Router(document.querySelector('#main-container'));

// Set up the routes
router.setRoutes(routes);
