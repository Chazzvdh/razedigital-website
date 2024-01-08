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