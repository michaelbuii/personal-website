import Link from './Link'

const NavCard = ({ title, description, href }) => (
  <Link
    href={href}
    title={title}
    description={description}
    className="group row-span-1 flex h-full w-11/12 flex-col 
      justify-between rounded-lg bg-gradient-to-r from-blue-700 via-indigo-500 to-violet-500 p-4 py-8 
      "
  >
    <h3 className="text-xl font-bold leading-4 tracking-tight text-gray-200">{title}</h3>
    <div className="prose flex max-w-none items-center gap-1 pt-4 text-sm text-gray-200">
      {description}
    </div>
  </Link>
)

export default NavCard
