import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const LabTagSmall = ({ text }) => {
  return (
    <Link href={`/learn/${kebabCase(text)}`}>
      <a className="mr-3 cursor-pointer text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default LabTagSmall
