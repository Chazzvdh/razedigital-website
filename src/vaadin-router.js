import { Router } from '@vaadin/router';

// Initialize the router
const router = new Router(document.querySelector('#outlet'));

// Define routes
router.setRoutes([
{ path: '/', component: 'welcome-element' },
    { path: '/diensten', component: 'diensten-lijst-element' },
    { path: '/over-mij', component: 'over-mij-element' },
    { path: '/afspraak-maken', component: 'afspraak-maken-element' },
    { path: '/tarieven', component: 'tarieven-element' },
    { path: '/contact', component: 'contact-form-element' },
    { path: '/factuur-generator', component: 'invoice-element' }
]);