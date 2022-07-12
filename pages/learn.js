import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import LabTag from '@/components/Labs'
import siteMetadata from '@/data/siteMetadata'
import { getAllCategories } from '@/lib/labcategories'
import kebabCase from '@/lib/utils/kebabCase'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import LabListLayout from '@/layouts/LabListLayout'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const tags = await getAllCategories('labs')
  const posts = await getAllFilesFrontMatter('labs')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { tags, posts, initialDisplayPosts, pagination } }
}

export default function Tags({ tags, posts, pagination, initialDisplayPosts }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-0 md:space-y-5">
          <h1 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:border-r-2 md:px-6 md:text-3xl md:leading-10">
            Categories
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <LabTag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {` (${tags[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <LabListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Recent Learning"
      />
    </>
  )
}
