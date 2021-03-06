import Link from '@/components/Link'
import LabTagSmall from '@/components/LabSmallTags'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="mt-6 divide-y px-2 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search Labs"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-background-color focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="dark:border-gray-700">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/lab/${slug}`}
                key={slug}
                className="text-gray-900 group-hover:text-primary-500 dark:text-gray-100"
              >
                <div className="group transform border-b border-gray-200 py-3 transition-all hover:scale-[1.02] dark:border-gray-700">
                  <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold group-hover:font-bold group-hover:text-primary-500">
                        {title}
                      </h3>
                    </div>

                    <div className="mt-1 flex items-center justify-between sm:mt-0">
                      <p className="mb-1">
                        {tags.map((tag) => (
                          <LabTagSmall key={tag} text={tag} />
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="text-med prose max-w-none text-gray-500 dark:text-gray-400">
                    {summary}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
