import { Link, useRouteError } from 'react-router-dom'
import { Button } from '../ui/button'
import { SEO } from '../seo'

interface RouteError {
  status?: number
  statusText?: string
  message?: string
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError

  return (
    <>
      <SEO title="Error - Nova Stack" description="An error occurred while loading this page" noindex={true} />
      <main className="flex h-screen w-full flex-col items-center justify-center gap-4 text-left">
        <article>
          <h1 className="mb-4 text-2xl font-bold">Oops! Something went wrong</h1>
          <p className="mb-4">We encountered an error while loading this page.</p>
          <p className="mb-6 font-mono">
            <span className="mr-2">{error?.status}</span>
            <i>{error?.statusText || error?.message}</i>
          </p>
          <Button asChild>
            <Link to="/">Back to Homepage</Link>
          </Button>
        </article>
      </main>
    </>
  )
}
