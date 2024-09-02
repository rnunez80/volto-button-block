import React from 'react';
import { Button } from 'semantic-ui-react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  ButtonText: {
    id: 'Button text',
    defaultMessage: 'Button text',
  },
});

const View = ({ data, isEditMode, className }) => {
  const intl = useIntl();

  // Determine if there is a link
  const hasLink = data.href && data.href.length > 0;

  // Determine if the link is internal or external
  const isInternal = hasLink && isInternalURL(data.href[0]['@id']);

  // Flatten the URL if present
  const url = hasLink ? flattenToAppURL(data.href[0]['@id']) : '';

  // Determine the link element
  const linkElement = isEditMode ? (
    <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
      {data.title || intl.formatMessage(messages.ButtonText)}
    </Button>
  ) : isInternal ? (
    <Link to={url} target='_self'>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
      </Button>
    </Link>
  ) : (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
      </Button>
    </a>
  );

  return (
    <div className={cx('block __button', className)}>
      <div className="button container">
        <div className={cx(`align ${data?.inneralign}`)}>{linkElement}</div>
      </div>
    </div>
  );
};

export default View;
