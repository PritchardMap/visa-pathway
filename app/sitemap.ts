import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{ path: string; priority: number }> = [
    { path: '', priority: 1.0 },
    { path: '/guide', priority: 0.9 },
    { path: '/checklist', priority: 0.7 },
    { path: '/apply', priority: 0.7 },
    { path: '/critical-skills/guide', priority: 0.9 },
    { path: '/critical-skills/checklist', priority: 0.7 },
    { path: '/general-work/guide', priority: 0.9 },
    { path: '/general-work/checklist', priority: 0.7 },
    { path: '/business-visa/guide', priority: 0.85 },
    { path: '/business-visa/checklist', priority: 0.7 },
    { path: '/study-visa/guide', priority: 0.85 },
    { path: '/study-visa/checklist', priority: 0.7 },
    { path: '/permanent-residence/guide', priority: 0.9 },
    { path: '/permanent-residence/checklist', priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority,
  }));
}
