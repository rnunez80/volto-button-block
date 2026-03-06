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
  ButtonDescription: {
    id: 'Description',
    defaultMessage: 'Description',
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
    id: ' Button Alignment',
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
  textposition: {
    id: 'textposition',
    defaultMessage: 'Text Alignment',
  }
});

export const ButtonSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'description', 'href', 'inneralign', 'textPosition', 'emphasis', 'size'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.ButtonTitle),
        required: true,
      },
      description: {
        title: props.intl.formatMessage(messages.ButtonDescription),
      },
      href: {
        title: props.intl.formatMessage(messages.ButtonLink),
        required: true,
        widget: 'url',
      },
      inneralign: {
        title: props.intl.formatMessage(messages.innerAlign),
        widget: 'inner_align',
        default: 'left',
      },
      textPosition: {
        title: props.intl.formatMessage(messages.textposition),
        widget: 'align',
        actions: ['center', 'left', 'right'],
        default: 'left',
      },
      emphasis: {
        title: props.intl.formatMessage(messages.Emphasis),
        default: 'primary',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
          ['positive', 'Positive'],
          ['white', 'White'],
          ['gray', 'Gray'],
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
