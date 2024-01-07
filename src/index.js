import "/src/components/ButtonContainerComponent.js";
import "/src/components/WelcomeComponent.js";
import "/src/components/HeaderComponent.js";
import "/src/components/HeaderButtonComponent.js";
import "/src/components/ButtonComponent.js";
import "/src/components/FooterComponent.js";
import "/src/components/MenuComponent.js";
import "/src/components/SideComponent.js";
import "/src/components/DienstComponent.js";
import "/src/components/DienstenListComponent.js";
import "/src/components/TarievenComponent.js";
import "/src/components/ContactFormComponent.js";
import "/src/components/OverMijComponent.js";

import { Router } from '@vaadin/router';

// Define routes
const routes = [
    { path: '/', component: 'welcome-element' },
    { path: '/diensten', component: 'diensten-lijst-element' },
    { path: '/over-mij', component: 'over-mij-element' },
    { path: '/afspraak-maken', component: 'afspraak-maken-element' },
    { path: '/tarieven', component: 'tarieven-element' },
    { path: '/contact', component: 'contact-form-element' },
    { path: '/factuur-generator', component: 'invoice-element' }
];

// Initialize the router
const router = new Router(document.querySelector('#main-container'));

// Set up the routes
router.setRoutes(routes);
