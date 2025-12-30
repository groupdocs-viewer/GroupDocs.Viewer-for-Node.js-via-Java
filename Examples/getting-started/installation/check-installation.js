import { Viewer } from '@groupdocs/groupdocs.viewer';

try {
  console.log('GroupDocs.Viewer loaded:', typeof Viewer === 'function');
  console.log('Java bridge initialized successfully.');
  process.exit(0);
} catch (e) {
  console.error('Failed to load GroupDocs.Viewer:', e);
  process.exit(1);
}