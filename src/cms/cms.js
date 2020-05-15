import CMS from 'netlify-cms-app'
import { Widget as IdWidget } from '@ncwidgets/id'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import AboutUsPreview from './preview-templates/AboutUsPreview'
import ImageCarouselPreview from './preview-templates/ImageCarouselPreview'
import LegalPreview from './preview-templates/LegalPreview'
import ContactUsPreview from './preview-templates/ContactUsPreview'
import FooterPreview from './preview-templates/FooterPreview'

CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('aboutUs', AboutUsPreview)
CMS.registerPreviewTemplate('contactUs', ContactUsPreview)
CMS.registerPreviewTemplate('imageCarousel', ImageCarouselPreview)
CMS.registerPreviewTemplate('legal', LegalPreview)
CMS.registerPreviewTemplate('footerLinks', FooterPreview)

CMS.registerWidget(IdWidget)
CMS.init()
