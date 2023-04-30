const express = require('express');
const route = express.Router();

// import controller
var AuthController = require('./../controllers/AuthController');

// Auth Pages
route.get('/login', (req, res, next) => {
    res.render('Auth/login', { title: 'Login', layout: false })
})
route.post('/login', AuthController.signin);

// Dashboard Pages
route.get('/', (req, res, next) => {
    res.render('index', { title: 'Dashboard', layout: 'layout/layout-without-nav' });
})
route.get('/index', (req, res, next) => {
    res.render('index', { title: 'Dashboard', layout: 'layout/layout-without-nav' });
})

// Bootstrap Ui
route.get('/ui-alerts', (req, res, next) => {
    res.render('ui-alerts', { title: 'Alerts', page_title: 'Alerts', folder: 'Base UI' });
})
route.get('/ui-badges', (req, res, next) => {
    res.render('ui-badges', { title: 'Badges', page_title: 'Badges', folder: 'Base UI' });
})
route.get('/ui-buttons', (req, res, next) => {
    res.render('ui-buttons', { title: 'Buttons', page_title: 'Buttons', folder: 'Base UI' });
})
route.get('/ui-colors', (req, res, next) => {
    res.render('ui-colors', { title: 'Colors', page_title: 'Colors', folder: 'Base UI' });
})
route.get('/ui-cards', (req, res, next) => {
    res.render('ui-cards', { title: 'Cards', page_title: 'Cards', folder: 'Base UI' });
})
route.get('/ui-carousel', (req, res, next) => {
    res.render('ui-carousel', { title: 'Carousel', page_title: 'Carousel', folder: 'Base UI' });
})
route.get('/ui-dropdowns', (req, res, next) => {
    res.render('ui-dropdowns', { title: 'Dropdowns', page_title: 'Dropdowns', folder: 'Base UI' });
})
route.get('/ui-grid', (req, res, next) => {
    res.render('ui-grid', { title: 'Grid', page_title: 'Grid', folder: 'Base UI' });
})
route.get('/ui-images', (req, res, next) => {
    res.render('ui-images', { title: 'Images', page_title: 'Images', folder: 'Base UI' });
})
route.get('/ui-tabs', (req, res, next) => {
    res.render('ui-tabs', { title: 'Tabs', page_title: 'Tabs', folder: 'Base UI' });
})
route.get('/ui-accordions', (req, res, next) => {
    res.render('ui-accordions', { title: 'Accordions', page_title: 'Accordions', folder: 'Base UI' });
})
route.get('/ui-modals', (req, res, next) => {
    res.render('ui-modals', { title: 'Modals', page_title: 'Modals', folder: 'Base UI' });
})
route.get('/ui-offcanvas', (req, res, next) => {
    res.render('ui-offcanvas', { title: 'Offcanvas', page_title: 'Offcanvas', folder: 'Base UI' });
})
route.get('/ui-placeholders', (req, res, next) => {
    res.render('ui-placeholders', { title: 'Placeholders', page_title: 'Placeholders', folder: 'Base UI' });
})
route.get('/ui-progress', (req, res, next) => {
    res.render('ui-progress', { title: 'Progress', page_title: 'Progress', folder: 'Base UI' });
})
route.get('/ui-notifications', (req, res, next) => {
    res.render('ui-notifications', { title: 'Notifications', page_title: 'Notifications', folder: 'Base UI' });
})
route.get('/ui-media', (req, res, next) => {
    res.render('ui-media', { title: 'Media Object', page_title: 'Media Object', folder: 'Base UI' });
})
route.get('/ui-embed-video', (req, res, next) => {
    res.render('ui-embed-video', { title: 'Embed Video', page_title: 'Embed Video', folder: 'Base UI' });
})
route.get('/ui-typography', (req, res, next) => {
    res.render('ui-typography', { title: 'Typography', page_title: 'Typography', folder: 'Base UI' });
})
route.get('/ui-lists', (req, res, next) => {
    res.render('ui-lists', { title: 'Lists', page_title: 'Lists', folder: 'Base UI' });
})
route.get('/ui-general', (req, res, next) => {
    res.render('ui-general', { title: 'General', page_title: 'General', folder: 'Base UI' });
})
route.get('/ui-utilities', (req, res, next) => {
    res.render('ui-utilities', { title: 'Utilities', page_title: 'Utilities', folder: 'Base UI' });
})

// Advance Ui
route.get('/advance-ui-sweetalerts', (req, res, next) => {
    res.render('advance-ui-sweetalerts', { title: 'Sweet Alerts', page_title: 'Sweet Alerts', folder: 'Advance UI' });
})
route.get('/advance-ui-nestable', (req, res, next) => {
    res.render('advance-ui-nestable', { title: 'Nestable List', page_title: 'Nestable List', folder: 'Advance UI' });
})
route.get('/advance-ui-scrollbar', (req, res, next) => {
    res.render('advance-ui-scrollbar', { title: 'Scrollbar', page_title: 'Scrollbar', folder: 'Advance UI' });
})
route.get('/advance-ui-swiper', (req, res, next) => {
    res.render('advance-ui-swiper', { title: 'Swiper Slider', page_title: 'Swiper Slider', folder: 'Advance UI' });
})
route.get('/advance-ui-ratings', (req, res, next) => {
    res.render('advance-ui-ratings', { title: 'Ratings', page_title: 'Ratings', folder: 'Advance UI' });
})
route.get('/advance-ui-highlight', (req, res, next) => {
    res.render('advance-ui-highlight', { title: 'Highlight', page_title: 'Highlight', folder: 'Advance UI' });
})
route.get('/advance-ui-scrollspy', (req, res, next) => {
    res.render('advance-ui-scrollspy', { title: 'ScrollSpy', page_title: 'ScrollSpy', folder: 'Advance UI' });
})

// Custom Ui
route.get('/ui-ribbons', (req, res, next) => {
    res.render('ui-ribbons', { title: 'Ribbons', page_title: 'Ribbons', folder: 'Custom UI' });
})
route.get('/ui-profile', (req, res, next) => {
    res.render('ui-profile', { title: 'Profile', page_title: 'Profile', folder: 'Custom UI' });
})
route.get('/ui-counter', (req, res, next) => {
    res.render('ui-counter', { title: 'Counter', page_title: 'Counter', folder: 'Custom UI' });
})

// Form
route.get('/forms-elements', (req, res, next) => {
    res.render('forms-elements', { title: 'Basic Elements', page_title: 'Basic Elements', folder: 'Forms' });
})
route.get('/forms-select', (req, res, next) => {
    res.render('forms-select', { title: 'Form Select', page_title: 'Form Select', folder: 'Forms' });
})
route.get('/forms-checkboxs-radios', (req, res, next) => {
    res.render('forms-checkboxs-radios', { title: 'Checkboxs & Radios', page_title: 'Checkboxs & Radios', folder: 'Forms' });
})
route.get('/forms-pickers', (req, res, next) => {
    res.render('forms-pickers', { title: 'Pickers', page_title: 'Pickers', folder: 'Forms' });
})
route.get('/forms-masks', (req, res, next) => {
    res.render('forms-masks', { title: 'Input Masks', page_title: 'Input Masks', folder: 'Forms' });
})
route.get('/forms-advanced', (req, res, next) => {
    res.render('forms-advanced', { title: 'Form Advanced', page_title: 'Form Advanced', folder: 'Forms' });
})
route.get('/forms-range-sliders', (req, res, next) => {
    res.render('forms-range-sliders', { title: 'Range Slider', page_title: 'Range Slider', folder: 'Forms' });
})
route.get('/forms-validation', (req, res, next) => {
    res.render('forms-validation', { title: 'Forms Validation', page_title: 'Forms Validation', folder: 'Forms' });
})
route.get('/forms-wizard', (req, res, next) => {
    res.render('forms-wizard', { title: 'Wizard', page_title: 'Wizard', folder: 'Forms' });
})
route.get('/forms-editors', (req, res, next) => {
    res.render('forms-editors', { title: 'Editors', page_title: 'Editors', folder: 'Forms' });
})
route.get('/forms-file-uploads', (req, res, next) => {
    res.render('forms-file-uploads', { title: 'File Upload', page_title: 'File Upload', folder: 'Forms' });
})
route.get('/forms-layouts', (req, res, next) => {
    res.render('forms-layouts', { title: 'Form Layout', page_title: 'Form Layout', folder: 'Forms' });
})
route.get('/forms-tom-select', (req, res, next) => {
    res.render('forms-tom-select', { title: 'Tom Select', page_title: 'Tom Select', folder: 'Forms' });
})

// Tables
route.get('/tables-basic', (req, res, next) => {
    res.render('tables-basic', { title: 'Basic Tables', page_title: 'Basic Tables', folder: 'Tables' });
})
route.get('/tables-gridjs', (req, res, next) => {
    res.render('tables-gridjs', { title: 'Grid Js', page_title: 'Grid Js', folder: 'Tables' });
})
route.get('/tables-listjs', (req, res, next) => {
    res.render('tables-listjs', { title: 'Listjs', page_title: 'Listjs', folder: 'Tables' });
})
route.get('/tables-datatables', (req, res, next) => {
    res.render('tables-datatables', { title: 'Datatables', page_title: 'Datatables', folder: 'Tables' });
})

// Apex Charts
route.get('/charts-apex-line', (req, res, next) => {
    res.render('charts-apex-line', { title: 'Line Charts', page_title: 'Line Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-area', (req, res, next) => {
    res.render('charts-apex-area', { title: 'Area Charts', page_title: 'Area Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-column', (req, res, next) => {
    res.render('charts-apex-column', { title: 'Column Charts', page_title: 'Column Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-bar', (req, res, next) => {
    res.render('charts-apex-bar', { title: 'Bar Charts', page_title: 'Bar Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-mixed', (req, res, next) => {
    res.render('charts-apex-mixed', { title: 'Mixed Charts', page_title: 'Mixed Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-timeline', (req, res, next) => {
    res.render('charts-apex-timeline', { title: 'Timeline Charts', page_title: 'Timeline Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-candlestick', (req, res, next) => {
    res.render('charts-apex-candlestick', { title: 'Candlestick Charts', page_title: 'Candlestick Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-boxplot', (req, res, next) => {
    res.render('charts-apex-boxplot', { title: 'Boxplot Charts', page_title: 'Boxplot Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-bubble', (req, res, next) => {
    res.render('charts-apex-bubble', { title: 'Bubble Charts', page_title: 'Bubble Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-scatter', (req, res, next) => {
    res.render('charts-apex-scatter', { title: 'Scatter Charts', page_title: 'Scatter Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-heatmap', (req, res, next) => {
    res.render('charts-apex-heatmap', { title: 'Heatmap Charts', page_title: 'Heatmap Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-treemap', (req, res, next) => {
    res.render('charts-apex-treemap', { title: 'Treemap Charts', page_title: 'Treemap Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-pie', (req, res, next) => {
    res.render('charts-apex-pie', { title: 'Pie Charts', page_title: 'Pie Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-radialbar', (req, res, next) => {
    res.render('charts-apex-radialbar', { title: 'Radialbar Charts', page_title: 'Radialbar Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-radar', (req, res, next) => {
    res.render('charts-apex-radar', { title: 'Radar Charts', page_title: 'Radar Charts', folder: 'Apexcharts' });
})
route.get('/charts-apex-polar', (req, res, next) => {
    res.render('charts-apex-polar', { title: 'Polararea Charts', page_title: 'Polararea Charts', folder: 'Apexcharts' });
})

// Icons
route.get('/icons-remix', (req, res, next) => {
    res.render('icons-remix', { title: 'Remix', page_title: 'Remix', folder: 'Apexcharts' });
})
route.get('/icons-boxicons', (req, res, next) => {
    res.render('icons-boxicons', { title: 'Boxicons', page_title: 'Boxicons', folder: 'Apexcharts' });
})
route.get('/icons-materialdesign', (req, res, next) => {
    res.render('icons-materialdesign', { title: 'Material Design', page_title: 'Material Design', folder: 'Apexcharts' });
})
route.get('/icons-bootstrap', (req, res, next) => {
    res.render('icons-bootstrap', { title: 'Bootstrap', page_title: 'Bootstrap', folder: 'Apexcharts' });
})
route.get('/icons-phosphor', (req, res, next) => {
    res.render('icons-phosphor', { title: 'Phosphor', page_title: 'Phosphor', folder: 'Apexcharts' });
})

// Maps
route.get('/maps-google', (req, res, next) => {
    res.render('maps-google', { title: 'Google Maps', page_title: 'Google Maps', folder: 'Maps' });
})
route.get('/maps-vector', (req, res, next) => {
    res.render('maps-vector', { title: 'Vector', page_title: 'Vector', folder: 'Maps' });
})
route.get('/maps-leaflet', (req, res, next) => {
    res.render('maps-leaflet', { title: 'Leaflet', page_title: 'Leaflet', folder: 'Maps' });
})


module.exports = route;