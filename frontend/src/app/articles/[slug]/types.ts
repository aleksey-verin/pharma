export interface Article {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  Title: string
  Description: string
  Subtitle: string
  ImageBlock: ImageBlock
  Content: Content[]
}

export interface ImageBlock {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Content {
  id: number
  __component: string
  content?: string
  image?: Image
  image1?: Image1
  image2?: Image2
  Title?: string
  Content?: string
}

export interface Image {
  data: Data3
}

export interface Data3 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats2
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats2 {
  thumbnail: Thumbnail2
  small: Small
  medium: Medium
  large: Large
}

export interface Thumbnail2 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Image1 {
  data: Data4
}

export interface Data4 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats3
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats3 {
  thumbnail: Thumbnail3
}

export interface Thumbnail3 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Image2 {
  data: Data5
}

export interface Data5 {
  id: number
  attributes: Attributes5
}

export interface Attributes5 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats4
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats4 {
  thumbnail: Thumbnail4
}

export interface Thumbnail4 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Meta {}
