import React from 'react';

import Form from '../form';
import Input from '../form/input';
import styles from './styles';
import Textarea from '../form/textarea';

const onSubmit = (event, callback) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formDataEntries = formData.entries();

  const metadata = [...formDataEntries].reduce((acc, [name, value]) => {
    acc[name] = value;
    return acc;
  }, {});

  callback(metadata);
};

export default ({ metadata, updateMetadata }) => (
  <main className="metadata">
    <style jsx>{styles}</style>

    <h1 className="title">Metadata</h1>

    <Form
      fields={[
        <Input name="title" label="Title" defaultValue={metadata.title} />,
        <Textarea
          name="description"
          label="Description"
          defaultValue={metadata.description}
        />,

        <Input
          name="og:title"
          label="Title"
          defaultValue={metadata['og:title']}
          placeholder={metadata.title}
        />,
        <Textarea
          name="og:description"
          defaultValue={metadata['og:description']}
          label="Description"
        />,
        <Input name="og:site_name" label="Site Name" />,
        <Input name="og:url" label="URL" />,
        <Input
          name="og:locale"
          label="Locale"
          defaultValue={metadata['og:locale']}
        />,

        <Input
          name="twitter:title"
          label="Title"
          defaultValue={metadata['twitter:title']}
          placeholder={metadata.title}
        />,
        <Input
          name="twitter:site"
          label="Site Name"
          defaultValue={metadata['twitter:site']}
        />,
        <Input
          name="twitter:url"
          label="URL"
          defaultValue={metadata['twitter:url']}
        />,
        <Input
          name="og:locale"
          label="Locale"
          defaultValue={metadata['og:locale']}
        />
      ]}
    />
  </main>
);
