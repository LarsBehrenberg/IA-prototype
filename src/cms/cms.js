import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import AboutUsPreview from './preview-templates/AboutUsPreview'
import ImageCarouselPreview from './preview-templates/ImageCarouselPreview'
import LegalPreview from './preview-templates/LegalPreview'
import ContactUsPreview from './preview-templates/ContactUsPreview'

CMS.registerPreviewStyle('./preview-styles/contact-preview.css')

CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('aboutUs', AboutUsPreview)
CMS.registerPreviewTemplate('contactUs', ContactUsPreview)
CMS.registerPreviewTemplate('imageCarousel', ImageCarouselPreview)
CMS.registerPreviewTemplate('legal', LegalPreview)
