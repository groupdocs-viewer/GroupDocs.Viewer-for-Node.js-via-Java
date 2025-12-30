import { Viewer, HtmlViewOptions } from '@groupdocs/groupdocs.viewer';

   // Path to the file you want to render
   const filePath = 'sample.pdf';

   // Initialize viewer
   const viewer = new Viewer(filePath);

   // Render the file to HTML
   viewer.view(HtmlViewOptions.forEmbeddedResources());

   // Exit with a success code
   process.exit(0);