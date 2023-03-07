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
});

export const ButtonSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'inneralign','emphasis'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.ButtonTitle),
      },
      href: {
        title: props.intl.formatMessage(messages.ButtonLink),
        widget: 'url',
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
    },
    required: [],
  };
};
