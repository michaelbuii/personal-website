import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import LabTagSmall from '@/components/LabSmallTags'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NavCard from '@/components/NavCard'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const labs = await getAllFilesFrontMatter('labs')

  return { props: { labs } }
}

export default function Home({ labs }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="mb-12 flex flex-col-reverse items-center gap-x-12 sm:flex-row xl:flex-row">
        <div className="pt-6">
          <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm <span className="text-primary-500 dark:text-primary-500">Michael</span>
          </h1>
          <h2 className="prose pt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {`${siteMetadata.description}. I love learning new skills and this site is a place where I share what I've learned `}
            <p></p>
            <p>
              By documenting my labs and projects, I hope to create a knowledge base of information
              people can refer to.
            </p>
          </h2>
        </div>
        <Image
          src={'/static/images/avatar.webp'}
          width={250}
          height={250}
          alt="avatar"
          className="w-5/12 rounded-full md:w-4/12 xl:w-3/12"
        />
      </div>

      <div className="mx-8 grid grid-flow-row grid-cols-1 grid-rows-2 justify-between gap-10 py-8 sm:grid-cols-2 sm:grid-rows-1">
        <NavCard
          href="/learn"
          title="Learn"
          description="Browse the catalog of labs I've documented"
        ></NavCard>
        <NavCard
          href="/projects"
          title="Projects"
          description="See the things I've worked on"
        ></NavCard>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-1 pt-6 pb-3 md:space-y-1">
          <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Latest Labs
          </h1>
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
                          <h2 className="text-lg font-semibold leading-8 tracking-tight ">
                            <Link href={`/lab/${slug}`} className="text-gray-900 dark:text-white ">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <LabTagSmall key={tag} text={tag} />
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
            href="/learn"
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
