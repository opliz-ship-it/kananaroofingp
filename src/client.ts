import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'jvy33o8t',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-12-24',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}