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
  const urlRaw = hasLink ? data.href[0]['@id'] : '';

  // Check the type of link
  const isMailto = hasLink && urlRaw.startsWith('mailto:');
  const isDownload = hasLink && urlRaw.includes('@@download');
  const isInternal = hasLink && isInternalURL(urlRaw);
  const isExternal = hasLink && (/^(http|https):/.test(urlRaw) && !isDownload);

  // Flatten the URL if present
  const url = hasLink ? flattenToAppURL(urlRaw) : '';

  // Description span with line break
  const descriptionSpan = data.description ? (
    <>
      <br />
      <span className='button-desc'>{data.description}</span>
    </>
  ) : null;

  // Determine the link element
  const linkElement = isEditMode ? (
    <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
      {data.title || intl.formatMessage(messages.ButtonText)}
      {descriptionSpan}
    </Button>
  ) : isMailto ? (
    <a href={url}>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
        {descriptionSpan}
      </Button>
    </a>
  ) : isDownload ? (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
        {descriptionSpan}
      </Button>
    </a>
  ) : isInternal ? (
    <Link to={url}>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
        {descriptionSpan}
      </Button>
    </Link>
  ) : isExternal ? (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Button className={cx('button', data.align, data.emphasis)} size={data.size}>
        {data.title || intl.formatMessage(messages.ButtonText)}
        {descriptionSpan}
      </Button>
    </a>
  ) : null;

  return (
    <div className={cx('block __button', className)}>
      <div className="button container">
        <div className={cx(`align ${data?.inneralign}`)}>{linkElement}</div>
      </div>
    </div>
  );
};

export default View;
