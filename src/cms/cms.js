import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import AboutUsPreview from './preview-templates/AboutUsPreview'
import ImageCarouselPreview from './preview-templates/ImageCarouselPreview'

CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('aboutUs', AboutUsPreview)
CMS.registerPreviewTemplate('imageCarousel', ImageCarouselPreview)
