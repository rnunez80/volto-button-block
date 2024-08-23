import loadable from '@loadable/component';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';
import './theme/main.less';

// Use loadable to dynamically import the components
const Edit = loadable(() => import('./components/Edit'));
const View = loadable(() => import('./components/View'));
const AlignWidget = loadable(() => import('./components/Widgets/AlignWidget'));

const applyConfig = (config) => {
  // Assign the dynamically imported AlignWidget directly to the config
  config.widgets.widget.inner_align = AlignWidget;

  // Assign the dynamically imported view and edit components to the config
  config.blocks.blocksConfig.__button = {
    id: '__button',
    title: 'Button',
    icon: circleMenuSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
