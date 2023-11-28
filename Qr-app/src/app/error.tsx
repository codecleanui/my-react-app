import { useEffect } from 'react'
import { NotFoundPage } from './(main)/_components/not-found/not-found'
 
export default function RootErrorBoundary({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  // reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <NotFoundPage baseUrl="/" />
    // <div>
    //   <h2>Something went wrong!</h2>
    //   <button
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    // </div>
  )
}