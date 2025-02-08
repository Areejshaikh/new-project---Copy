export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token= assertValue(
  "skC4zmAXVWEMy51lpiBoYk0wzrHHtcBkMtGZasOZFHqxeOBhYZcnaz1Enc7z5T7VLSiVKtbib6B87n9BTMdBuPzvtf27DdBlJC98wUzJDPHj7j9A5pobfRsyHiUgS9vfn8ZbgyGvWv8vBcro4s6Fo2WPelo5aC4G48BI0SyUxBU4qCNEfgjz",
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}


