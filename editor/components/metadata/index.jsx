import React from 'react';

import styles from './styles';

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

    <form
      className="constraint"
      onSubmit={event => onSubmit(event, updateMetadata)}
    >
      <h1 className="title">Metadata</h1>

      <section className="section">
        <h2 className="section-title">Google</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input type="text" name="title" defaultValue={metadata.title} />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Description</span>
            <textarea name="description">{metadata.description}</textarea>
          </label>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Facebook Open-Graph</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input
              type="text"
              name="og:title"
              placeholder={metadata.title}
              defaultValue={metadata['og:title']}
            />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Site Name</span>
            <input type="text" name="og:site_name" />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">URL</span>
            <input type="text" name="og:url" />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Locale</span>
            <input
              type="text"
              name="og:locale"
              defaultValue={metadata['og:locale']}
            />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Description</span>
            <textarea name="og:description" placeholder={metadata.description}>
              {metadata['og:description']}
            </textarea>
          </label>
        </div>

        <input type="hidden" name="og:type" value="website" />
      </section>

      <section className="section">
        <h2 className="section-title">Twitter Card</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input
              type="text"
              name="twitter:title"
              placeholder={metadata.title}
              defaultValue={metadata['twitter:title']}
            />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Text</span>
            <textarea
              name="witter:description"
              placeholder={metadata.description}
            >
              {metadata['twitter:description']}
            </textarea>
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">URL</span>
            {/* TODO: this can be equal to the facebook url */}
            <input type="text" name="twitter:url" />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Site</span>
            <input type="text" name="twitter:site" />
          </label>
        </div>

        <input type="hidden" name="twitter:card" value="summary_large_image" />
        {/* TODO: this has to be equal to the site */}
        <input type="hidden" name="twitter:creator" />
      </section>

      <button type="submit">Save</button>
    </form>
  </main>
);
