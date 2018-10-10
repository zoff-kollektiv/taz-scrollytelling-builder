import React from 'react';

import filename from '../../../editor/lib/filename';
import Header from './header';
import Input from '../../../editor/components/form/input';
import InputImage from '../../../editor/components/form/image';

import { find } from '../../../editor/lib/ast';
import styles from './styles';

const containsIntro = ast => !!find(ast, 'type', 'intro');

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
  let dd = date.getDate() + 1;
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }

  return `${dd}. ${months[mm]} ${yyyy}`;
};

const BLOCK_DEFINITION = {
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
};

const Intro = ({ data, attributes = {}, children, serialize = false }) => {
  const imageAttrs = {
    className: 'background-image'
  };

  if (!serialize) {
    imageAttrs.src = data.get('background-image');
  } else {
    const name = data.get('background-image_name');
    imageAttrs.src = `./assets/images/${filename(name)}`;
  }

  return (
    <section className="intro" {...attributes}>
      <style jsx>{styles}</style>

      <div className="image-container">
        <Header />

        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...imageAttrs} />

        <div className="content">{children}</div>
      </div>

      <p className="authors">
        Von Marlene Jürgen, Christian Jakob und Sabine am Orde
      </p>
    </section>
  );
};

export default {
  name: 'intro',
  styles,
  Component: ({ node, ...rest }) => <Intro data={node.data} {...rest} />,

  onSelect() {
    return {
      fields: [
        <Input name="title" label="Titel" />,
        <InputImage name="background-image" />
      ]
    };
  },

  insert(change, data) {
    BLOCK_DEFINITION.data = data;

    // if a title was set, alreadt prefill it
    if (data.title) {
      BLOCK_DEFINITION.nodes[1].nodes[0].text = data.title;
    }

    // Always add the intro of the beginning of the document
    change.moveStartToStartOfDocument();
    change.insertBlock(BLOCK_DEFINITION);
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

  serialize(node, children) {
    return <Intro data={node.data}>{children}</Intro>;
  },

  disabled(ast) {
    // if there is already an intro present, do not allow to add a second one
    return containsIntro(ast);
  }
};
