import React from 'react';

import Form from '../form';
import Input from '../form/input';
import InputImage from '../form/image';
import styles from './styles';
import Textarea from '../form/textarea';

const updateField = (event, callback) => {
  event.preventDefault();

  const { target } = event;
  const { name, value } = target;

  callback(name, value);
};

const fileToDataURL = file =>
  new Promise(resolve => {
    const reader = new window.FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve(reader.result);
    };
  });

export default ({ metadata, updateMetadataField }) => (
  <main className="metadata">
    <style jsx>{styles}</style>

    <div className="constraint">
      <h1 className="title">Metadata</h1>

      <p className="intro">
        These properties are being used to show proper previews on google,
        facebook and twitter.
      </p>

      <Form
        fields={[
          <Input
            name="url"
            label="URL"
            defaultValue={metadata.url}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="title"
            label="Title"
            defaultValue={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Textarea
            name="description"
            label="Description"
            defaultValue={metadata.description}
            onChange={event => updateField(event, updateMetadataField)}
          />,

          <h2 className="section-title">Facebook</h2>,

          <Input
            name="og:title"
            label="Title"
            defaultValue={metadata['og:title']}
            placeholder={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Textarea
            name="og:description"
            defaultValue={metadata['og:description']}
            label="Description"
            placeholder={metadata.description}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="og:site_name"
            label="Site Name"
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <InputImage
            name="og:image"
            label="Image"
            helpText={`
              According to facebook: "Use images that are at least 1200 x 630
              pixels for the best display on high resolution devices. At the
              minimum, you should use images that are 600 x 315 pixels to
              display link page posts with larger images. Images can be up to
              8MB in size.
            `}
            onDropAccepted={files => {
              const file = files[0];

              fileToDataURL(file).then(data => {
                updateMetadataField('og:image', data);
                updateMetadataField('_og:image-name', file.name);
              });
            }}
          />,

          <h2 className="section-title">Twitter</h2>,

          <Input
            name="twitter:title"
            label="Title"
            defaultValue={metadata['twitter:title']}
            placeholder={metadata.title}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Textarea
            name="twitter:description"
            defaultValue={metadata['twitter:description']}
            label="Description"
            placeholder={metadata.description}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <Input
            name="twitter:site"
            label="Site Name"
            defaultValue={metadata['twitter:site']}
            onChange={event => updateField(event, updateMetadataField)}
          />,
          <InputImage
            name="twitter:image"
            label="Image"
            helpText="
              According to twitter: You should not use a generic image such as
              your website logo, author photo, or other image that spans
              multiple pages. Images for this Card support an aspect ratio of
              2:1 with minimum dimensions of 300x157 or maximum of 4096x4096
              pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and
              GIF formats are supported. Only the first frame of an animated
              GIF will be used. SVG is not supported.
            "
            onDropAccepted={files => {
              const file = files[0];

              fileToDataURL(file).then(data => {
                updateMetadataField('twitter:image', data);
                updateMetadataField('_twitter:image-name', file.name);
              });
            }}
          />
        ]}
      />
    </div>
  </main>
);
