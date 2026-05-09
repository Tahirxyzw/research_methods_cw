var title = 'Federated Learning for Alzheimers Disease Literature Review';

var dataDir = 'data/';

var jsDir = 'js/';

var stylesDir = 'styles/';

var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'series',
    title: 'Series',
    minTagFrequency: 1
}];

var editable = false;

var paper = null;

var extraPages = {
    'about': 'about.html'
};

var customStyle = '';

var citations = null;

var defaultGroupSelectors = [
    'category:privacy_preserving_fl',
    'category:non_iid_heterogeneity',
    'category:multimodal_ehr_fl',
    'category:novel_optimisation'
];