import React, { Suspense } from 'react';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';
import './theme/main.less';

// Use React.lazy to dynamically import the components
const Edit = React.lazy(() => import('./components/Edit'));
const View = React.lazy(() => import('./components/View'));
const AlignWidget = React.lazy(() => import('./components/Widgets/AlignWidget'));

const applyConfig = (config) => {
  // Use Suspense with fallback to wrap the dynamically imported AlignWidget
  config.widgets.widget.inner_align = (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <AlignWidget {...props} />
    </Suspense>
  );

  // Use Suspense with fallback to wrap the dynamically imported view and edit components
  config.blocks.blocksConfig.__button = {
    id: '__button',
    title: 'Button',
    icon: circleMenuSVG,
    group: 'common',
    view: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <View {...props} />
      </Suspense>
    ),
    edit: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Edit {...props} />
      </Suspense>
    ),
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
