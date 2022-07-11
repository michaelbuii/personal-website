import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Card from '@/components/Card'
import LabListLayout from '@/layouts/LabListLayout'
import NavCard from '@/components/NavCard'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const labs = await getAllFilesFrontMatter('labs')

  return { props: { posts, labs } }
}

export default function Home({ labs }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <h1>test</h1>
      <div className="mx-8 grid grid-flow-row grid-cols-1 grid-rows-2 justify-between gap-10 py-8 sm:grid-cols-2 sm:grid-rows-1">
        <NavCard href="/lab" title="Labs" description="See the things I'm working on"></NavCard>
        <NavCard
          href="/projects"
          title="Projects"
          description="See the things I'm working on"
        ></NavCard>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-1 pt-6 pb-3 md:space-y-1">
          <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Latest Labs
          </h1>
          <p className="text-md leading-4 text-gray-500 dark:text-primary-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!labs.length && 'No posts found.'}
          {labs.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-2">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="font-sm text-base leading-4 text-gray-500 dark:text-white">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-1 xl:col-span-3">
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-xl font-bold leading-8 tracking-tight ">
                            <Link href={`/lab/${slug}`} className="text-gray-900 dark:text-white ">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-200">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/lab/${slug}`}
                          className="py-0 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {labs.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/lab"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
