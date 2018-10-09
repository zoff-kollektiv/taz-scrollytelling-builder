import React from 'react';

import styles from './styles';

const onSubmit = event => {
  event.preventDefault();

  const data = new FormData(event.target);
  console.log('form data', [...data.entries()]);
};

export default ({ title, og }) => (
  <main className="metadata">
    <style jsx>{styles}</style>

    <form className="constraint" onSubmit={event => onSubmit(event)}>
      <h1 className="title">Metadata</h1>

      <section className="section">
        <h2 className="section-title">Google</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input type="text" name="meta-title" defaultValue={title} />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Description</span>
            <textarea name="meta-description" />
          </label>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Facebook Open-Graph</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input type="text" name="og:title" defaultValue={title} />
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
            <input type="text" name="og:locale" defaultValue={og.locale} />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Description</span>
            <textarea name="og:description" />
          </label>
        </div>

        <input type="hidden" name="og:type" value="website" />
      </section>

      <section className="section">
        <h2 className="section-title">Twitter Card</h2>

        <div className="section-block">
          <label>
            <span className="label-text">Title</span>
            <input type="text" name="twitter:title" />
          </label>
        </div>

        <div className="section-block">
          <label>
            <span className="label-text">Text</span>
            <textarea name="witter:description" />
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
