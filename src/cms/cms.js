import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import AboutUsPreview from './preview-templates/AboutUsPreview'

CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('aboutUs', AboutUsPreview)
