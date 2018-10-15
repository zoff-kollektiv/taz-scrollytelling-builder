import React from 'react';

import Icon from './chalkboard-teacher.svg';
import Input from '../../../editor/components/form/input';
import InputImage from '../../../editor/components/form/image';

import { find } from '../../../editor/lib/ast';
import styles from './styles';

const containsIntro = ast => !!find(ast, 'type', 'intro-container');

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember'
];

const today = () => {
  const date = new Date();
  let dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  return `${dd}. ${months[mm]} ${yyyy}`;
};

const BLOCK_DEFINITION = {
  object: 'block',
  type: 'intro-container',
  nodes: [
    {
      object: 'block',
      type: 'header'
    },

    {
      object: 'block',
      type: 'intro',
      nodes: [
        {
          object: 'block',
          type: 'publication-date',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: today()
                }
              ]
            }
          ]
        },

        {
          object: 'block',
          type: 'title',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Title'
                }
              ]
            }
          ]
        },

        {
          object: 'block',
          type: 'standfirst',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'Standfirst'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      object: 'block',
      type: 'authors',
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              text: 'Authors'
            }
          ]
        }
      ]
    }
  ]
};

const IntroContainer = ({ attributes = {}, children }) => (
  <section className="intro" {...attributes}>
    <style jsx>{styles}</style>
    {children}
  </section>
);

export default {
  name: 'intro-container',

  label: 'Header',

  Icon,

  styles,

  Component: ({ node, ...rest }) => (
    <IntroContainer data={node.data} {...rest} />
  ),

  onSelect() {
    return {
      fields: [
        <InputImage name="background-image" />,
        <Input name="title" label="Title" />,
        <Input
          name="publisher"
          label="Publisher name"
          value="taz.de"
          readOnly
        />,
        <Input
          type="hidden"
          name="header-title"
          label="Main title"
          value="Europe's Far Right."
          readOnly
        />,
        <Input
          type="hidden"
          name="header-research-type"
          label="Research Type"
          value="Research Network"
          readOnly
        />
      ]
    };
  },

  extract({ data }) {
    const file = data.get('background-image');
    const name = data.get('background-image_name');

    return Promise.resolve([
      {
        name,
        file,
        type: 'image'
      }
    ]);
  },

  serialize: (node, children) => (
    <IntroContainer data={node.data}>{children}</IntroContainer>
  ),

  insert(change, data) {
    BLOCK_DEFINITION.data = data;

    // pass data to all nodes
    BLOCK_DEFINITION.nodes.forEach(node => {
      // eslint-disable-next-line no-param-reassign
      node.data = data;
    });

    // set title text
    const titleNode = BLOCK_DEFINITION.nodes[1].nodes.find(
      _ => _.type === 'title'
    );

    if (data.title && titleNode) {
      titleNode.nodes[0].leaves[0].text = data.title;
    }

    // Always add the intro of the beginning of the document
    change.moveStartToStartOfDocument();
    change.insertBlock(BLOCK_DEFINITION);
  },

  disabled(ast) {
    // if there is already an intro present, do not allow to add a second one
    return containsIntro(ast);
  }
};
