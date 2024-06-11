import { defineMessages } from 'react-intl';

const messages = defineMessages({
  ButtonBlock: {
    id: 'Button Block',
    defaultMessage: 'Button Block',
  },
  ButtonTitle: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  ButtonLink: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  innerAlign: {
    id: ' Inner Alignment',
    defaultMessage: 'Inner Alignment',
  },
  Emphasis: {
    id: 'Emphasis',
    defaultMessage: 'Emphasis',
  },
  Size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
});

export const ButtonSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'inneralign', 'emphasis', 'size'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.ButtonTitle),
      },
      href: {
        title: props.intl.formatMessage(messages.ButtonLink),
        required: true,
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
        allowExternals: true,
      },
      inneralign: {
        title: props.intl.formatMessage(messages.innerAlign),
        widget: 'inner_align',
        default: 'left',
      },
      emphasis: {
        title: props.intl.formatMessage(messages.Emphasis),
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
          ['positive', 'Positive'],
          ['negative', 'Negative'],
        ],
      },
      size: {
        title: props.intl.formatMessage(messages.Size),
        default: 'medium',
        choices: [
          ['tiny', 'Tiny'],
          ['medium', 'Medium'],
          ['large', 'Large'],
          ['huge', 'Huge'],
        ],
      },
    },
    required: [],
  };
};
