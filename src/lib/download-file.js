export default (filename, content, options = { type: 'text/html' }) => {
  const link = window.document.createElement('a');
  const blob = new Blob([content], options);

  link.href = window.URL.createObjectURL(blob);
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
