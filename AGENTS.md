<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Image assets

When replacing or adding raster images under `public/`, always follow `.cursor/rules/image-assets.mdc`:

- Convert PNG/JPG sources to **WebP** with `sharp-cli` before committing
- Reference only the `.webp` path in components
- Use originals from Desktop/Downloads (not chat attachments — they are downscaled)
- Set `<Image quality>` to `90` (sections) or `95` (heroes)
