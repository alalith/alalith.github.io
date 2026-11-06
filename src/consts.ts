import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Arjun\'s Website',
  description:
    'my website',
  href: 'https://www.arjunlalith.com',
  author: 'alalith',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/alalith',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/arjunlalith',
    label: 'Twitter',
  },
  {
    href: 'mailto:arjunlalith@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
