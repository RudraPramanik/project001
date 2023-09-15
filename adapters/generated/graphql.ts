import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, useMutation, UseMutationOptions, QueryFunctionContext } from 'react-query';
import { rqClient } from '../gql-client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BuyingGuideBuyingGuideComponentsDynamicZoneInput: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AllCategoriesPage = {
  __typename?: 'AllCategoriesPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AllCategoriesPageEntity = {
  __typename?: 'AllCategoriesPageEntity';
  attributes?: Maybe<AllCategoriesPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AllCategoriesPageEntityResponse = {
  __typename?: 'AllCategoriesPageEntityResponse';
  data?: Maybe<AllCategoriesPageEntity>;
};

export type AllCategoriesPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<WriterEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  image?: Maybe<UploadFileEntityResponse>;
  product_group?: Maybe<ProductGroupEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Long']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<WriterFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  featured?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  product_group?: InputMaybe<ProductGroupFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<LongFilterInput>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['ID']>;
  product_group?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['Long']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type AuthorBlogPage = {
  __typename?: 'AuthorBlogPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorBlogPageEntity = {
  __typename?: 'AuthorBlogPageEntity';
  attributes?: Maybe<AuthorBlogPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthorBlogPageEntityResponse = {
  __typename?: 'AuthorBlogPageEntityResponse';
  data?: Maybe<AuthorBlogPageEntity>;
};

export type AuthorBlogPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type BlogPage = {
  __typename?: 'BlogPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  hero_title: Scalars['String'];
  new_posts_text: Scalars['String'];
  popular_posts_text: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogPageEntity = {
  __typename?: 'BlogPageEntity';
  attributes?: Maybe<BlogPage>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogPageEntityResponse = {
  __typename?: 'BlogPageEntityResponse';
  data?: Maybe<BlogPageEntity>;
};

export type BlogPageInput = {
  hero_title?: InputMaybe<Scalars['String']>;
  new_posts_text?: InputMaybe<Scalars['String']>;
  popular_posts_text?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type BuyingGuide = {
  __typename?: 'BuyingGuide';
  buying_guide_components: Array<Maybe<BuyingGuideBuyingGuideComponentsDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  product_group_slug: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  writer?: Maybe<WriterEntityResponse>;
};

export type BuyingGuideBuyingGuideComponentsDynamicZone = ComponentSharedBuyingGuide | Error;

export type BuyingGuideEntity = {
  __typename?: 'BuyingGuideEntity';
  attributes?: Maybe<BuyingGuide>;
  id?: Maybe<Scalars['ID']>;
};

export type BuyingGuideEntityResponse = {
  __typename?: 'BuyingGuideEntityResponse';
  data?: Maybe<BuyingGuideEntity>;
};

export type BuyingGuideEntityResponseCollection = {
  __typename?: 'BuyingGuideEntityResponseCollection';
  data: Array<BuyingGuideEntity>;
  meta: ResponseCollectionMeta;
};

export type BuyingGuideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BuyingGuideFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BuyingGuideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BuyingGuideFiltersInput>>>;
  product_group_slug?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  writer?: InputMaybe<WriterFiltersInput>;
};

export type BuyingGuideInput = {
  buying_guide_components?: InputMaybe<Array<Scalars['BuyingGuideBuyingGuideComponentsDynamicZoneInput']>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  product_group_slug?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  writer?: InputMaybe<Scalars['ID']>;
};

export type BuyingGuideRelationResponseCollection = {
  __typename?: 'BuyingGuideRelationResponseCollection';
  data: Array<BuyingGuideEntity>;
};

export type Category = {
  __typename?: 'Category';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedBuyingGuide = {
  __typename?: 'ComponentSharedBuyingGuide';
  content: Scalars['String'];
  cover?: Maybe<UploadFileEntityResponse>;
  faq: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  id: Scalars['ID'];
  name: Scalars['String'];
  original_name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

export type ComponentSharedLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedLinkFiltersInput>>>;
  original_name?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork?: Maybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<ComponentSharedMetaSocial>;
  metaTitle?: Maybe<Scalars['String']>;
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialInput>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSharedSocialMediaLink = {
  __typename?: 'ComponentSharedSocialMediaLink';
  id: Scalars['ID'];
  link: Scalars['String'];
  social_media: Enum_Componentsharedsocialmedialink_Social_Media;
};

export type ComponentSharedSocialMediaLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSocialMediaLinkFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSocialMediaLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSocialMediaLinkFiltersInput>>>;
  social_media?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSocialMediaLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  social_media?: InputMaybe<Enum_Componentsharedsocialmedialink_Social_Media>;
};

export type ComponentSharedSubcat = {
  __typename?: 'ComponentSharedSubcat';
  cat_name: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  subsubcat: Array<Maybe<ComponentSharedLink>>;
};


export type ComponentSharedSubcatSubsubcatArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSubcatFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSubcatFiltersInput>>>;
  cat_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSubcatFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSubcatFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSubcatInput = {
  cat_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  subsubcat?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  content_description: Scalars['String'];
  content_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  form_email_placeholder: Scalars['String'];
  form_message_placeholder: Scalars['String'];
  form_name_placeholder: Scalars['String'];
  hero_title: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  send_button_text: Scalars['String'];
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactPageEntity = {
  __typename?: 'ContactPageEntity';
  attributes?: Maybe<ContactPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactPageEntityResponse = {
  __typename?: 'ContactPageEntityResponse';
  data?: Maybe<ContactPageEntity>;
};

export type ContactPageInput = {
  content_description?: InputMaybe<Scalars['String']>;
  content_title?: InputMaybe<Scalars['String']>;
  form_email_placeholder?: InputMaybe<Scalars['String']>;
  form_message_placeholder?: InputMaybe<Scalars['String']>;
  form_name_placeholder?: InputMaybe<Scalars['String']>;
  hero_title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  send_button_text?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type CookiePolicy = {
  __typename?: 'CookiePolicy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CookiePolicyEntity = {
  __typename?: 'CookiePolicyEntity';
  attributes?: Maybe<CookiePolicy>;
  id?: Maybe<Scalars['ID']>;
};

export type CookiePolicyEntityResponse = {
  __typename?: 'CookiePolicyEntityResponse';
  data?: Maybe<CookiePolicyEntity>;
};

export type CookiePolicyInput = {
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Componentsharedsocialmedialink_Social_Media {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Pinterest = 'pinterest',
  Twitter = 'twitter'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ErrorPage = {
  __typename?: 'ErrorPage';
  button_text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ErrorPageEntity = {
  __typename?: 'ErrorPageEntity';
  attributes?: Maybe<ErrorPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ErrorPageEntityResponse = {
  __typename?: 'ErrorPageEntityResponse';
  data?: Maybe<ErrorPageEntity>;
};

export type ErrorPageInput = {
  button_text?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  Categories: Array<Maybe<ComponentSharedLink>>;
  Pages_Links: Array<Maybe<ComponentSharedLink>>;
  adress: Scalars['String'];
  adress_title: Scalars['String'];
  categories_title: Scalars['String'];
  contact_title: Scalars['String'];
  copyright_text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  email_title: Scalars['String'];
  footer_description: Scalars['String'];
  pages_title?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterCategoriesArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterPages_LinksArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  Categories?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  Pages_Links?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  adress?: InputMaybe<Scalars['String']>;
  adress_title?: InputMaybe<Scalars['String']>;
  categories_title?: InputMaybe<Scalars['String']>;
  contact_title?: InputMaybe<Scalars['String']>;
  copyright_text?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_title?: InputMaybe<Scalars['String']>;
  footer_description?: InputMaybe<Scalars['String']>;
  pages_title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph = AllCategoriesPage | Article | AuthorBlogPage | BlogPage | BuyingGuide | Category | ComponentSharedBuyingGuide | ComponentSharedLink | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentSharedSocialMediaLink | ComponentSharedSubcat | ContactPage | CookiePolicy | ErrorPage | Footer | Header | HomePage | I18NLocale | OverOnsPage | PrivacyPolicy | ProductCategory | ProductGroup | ProductGroupCategory | ProductGroupPage | Setting | SingleBlogPage | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Writer;

export type Header = {
  __typename?: 'Header';
  Categories: Array<Maybe<ComponentSharedLink>>;
  Nav_Links: Array<Maybe<ComponentSharedLink>>;
  blog_title: Scalars['String'];
  categories_title: Scalars['String'];
  contact_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  mobile_nav_title: Scalars['String'];
  over_title: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HeaderCategoriesArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HeaderNav_LinksArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeaderEntity = {
  __typename?: 'HeaderEntity';
  attributes?: Maybe<Header>;
  id?: Maybe<Scalars['ID']>;
};

export type HeaderEntityResponse = {
  __typename?: 'HeaderEntityResponse';
  data?: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  Categories?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  Nav_Links?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  blog_title?: InputMaybe<Scalars['String']>;
  categories_title?: InputMaybe<Scalars['String']>;
  contact_title?: InputMaybe<Scalars['String']>;
  mobile_nav_title?: InputMaybe<Scalars['String']>;
  over_title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  about_tbeste_button_text: Scalars['String'];
  about_tbeste_description_one: Scalars['String'];
  about_tbeste_description_three: Scalars['String'];
  about_tbeste_description_two: Scalars['String'];
  about_tbeste_title: Scalars['String'];
  all_categories_section_description: Scalars['String'];
  all_categories_section_title: Scalars['String'];
  blog_section_button_text: Scalars['String'];
  blog_section_description: Scalars['String'];
  blog_section_new_posts: Scalars['String'];
  blog_section_popular_posts: Scalars['String'];
  blog_section_title: Scalars['String'];
  categories_section_description: Scalars['String'];
  categories_section_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  subcat: Array<Maybe<ComponentSharedSubcat>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageSubcatArgs = {
  filters?: InputMaybe<ComponentSharedSubcatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  about_tbeste_button_text?: InputMaybe<Scalars['String']>;
  about_tbeste_description_one?: InputMaybe<Scalars['String']>;
  about_tbeste_description_three?: InputMaybe<Scalars['String']>;
  about_tbeste_description_two?: InputMaybe<Scalars['String']>;
  about_tbeste_title?: InputMaybe<Scalars['String']>;
  all_categories_section_description?: InputMaybe<Scalars['String']>;
  all_categories_section_title?: InputMaybe<Scalars['String']>;
  blog_section_button_text?: InputMaybe<Scalars['String']>;
  blog_section_description?: InputMaybe<Scalars['String']>;
  blog_section_new_posts?: InputMaybe<Scalars['String']>;
  blog_section_popular_posts?: InputMaybe<Scalars['String']>;
  blog_section_title?: InputMaybe<Scalars['String']>;
  categories_section_description?: InputMaybe<Scalars['String']>;
  categories_section_title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  subcat?: InputMaybe<Array<InputMaybe<ComponentSharedSubcatInput>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<ArticleEntityResponse>;
  createBuyingGuide?: Maybe<BuyingGuideEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createProductGroup?: Maybe<ProductGroupEntityResponse>;
  createProductGroupCategory?: Maybe<ProductGroupCategoryEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWriter?: Maybe<WriterEntityResponse>;
  deleteAllCategoriesPage?: Maybe<AllCategoriesPageEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteAuthorBlogPage?: Maybe<AuthorBlogPageEntityResponse>;
  deleteBlogPage?: Maybe<BlogPageEntityResponse>;
  deleteBuyingGuide?: Maybe<BuyingGuideEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContactPage?: Maybe<ContactPageEntityResponse>;
  deleteCookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  deleteErrorPage?: Maybe<ErrorPageEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHeader?: Maybe<HeaderEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteOverOnsPage?: Maybe<OverOnsPageEntityResponse>;
  deletePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  deleteProductCategory?: Maybe<ProductCategoryEntityResponse>;
  deleteProductGroup?: Maybe<ProductGroupEntityResponse>;
  deleteProductGroupCategory?: Maybe<ProductGroupCategoryEntityResponse>;
  deleteProductGroupPage?: Maybe<ProductGroupPageEntityResponse>;
  deleteSetting?: Maybe<SettingEntityResponse>;
  deleteSingleBlogPage?: Maybe<SingleBlogPageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWriter?: Maybe<WriterEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAllCategoriesPage?: Maybe<AllCategoriesPageEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateAuthorBlogPage?: Maybe<AuthorBlogPageEntityResponse>;
  updateBlogPage?: Maybe<BlogPageEntityResponse>;
  updateBuyingGuide?: Maybe<BuyingGuideEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContactPage?: Maybe<ContactPageEntityResponse>;
  updateCookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  updateErrorPage?: Maybe<ErrorPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHeader?: Maybe<HeaderEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateOverOnsPage?: Maybe<OverOnsPageEntityResponse>;
  updatePrivacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  updateProductCategory?: Maybe<ProductCategoryEntityResponse>;
  updateProductGroup?: Maybe<ProductGroupEntityResponse>;
  updateProductGroupCategory?: Maybe<ProductGroupCategoryEntityResponse>;
  updateProductGroupPage?: Maybe<ProductGroupPageEntityResponse>;
  updateSetting?: Maybe<SettingEntityResponse>;
  updateSingleBlogPage?: Maybe<SingleBlogPageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWriter?: Maybe<WriterEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateBuyingGuideArgs = {
  data: BuyingGuideInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateProductGroupArgs = {
  data: ProductGroupInput;
};


export type MutationCreateProductGroupCategoryArgs = {
  data: ProductGroupCategoryInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWriterArgs = {
  data: WriterInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBuyingGuideArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductGroupCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWriterArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAllCategoriesPageArgs = {
  data: AllCategoriesPageInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateAuthorBlogPageArgs = {
  data: AuthorBlogPageInput;
};


export type MutationUpdateBlogPageArgs = {
  data: BlogPageInput;
};


export type MutationUpdateBuyingGuideArgs = {
  data: BuyingGuideInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
};


export type MutationUpdateCookiePolicyArgs = {
  data: CookiePolicyInput;
};


export type MutationUpdateErrorPageArgs = {
  data: ErrorPageInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateOverOnsPageArgs = {
  data: OverOnsPageInput;
};


export type MutationUpdatePrivacyPolicyArgs = {
  data: PrivacyPolicyInput;
};


export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryInput;
};


export type MutationUpdateProductGroupArgs = {
  data: ProductGroupInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductGroupCategoryArgs = {
  data: ProductGroupCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductGroupPageArgs = {
  data: ProductGroupPageInput;
};


export type MutationUpdateSettingArgs = {
  data: SettingInput;
};


export type MutationUpdateSingleBlogPageArgs = {
  data: SingleBlogPageInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWriterArgs = {
  data: WriterInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type OverOnsPage = {
  __typename?: 'OverOnsPage';
  Hero_title: Scalars['String'];
  bottom_section_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  first_section_description: Scalars['String'];
  first_section_title: Scalars['String'];
  hero_description: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  second_section_description: Scalars['String'];
  second_section_title: Scalars['String'];
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OverOnsPageEntity = {
  __typename?: 'OverOnsPageEntity';
  attributes?: Maybe<OverOnsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type OverOnsPageEntityResponse = {
  __typename?: 'OverOnsPageEntityResponse';
  data?: Maybe<OverOnsPageEntity>;
};

export type OverOnsPageInput = {
  Hero_title?: InputMaybe<Scalars['String']>;
  bottom_section_title?: InputMaybe<Scalars['String']>;
  first_section_description?: InputMaybe<Scalars['String']>;
  first_section_title?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  second_section_description?: InputMaybe<Scalars['String']>;
  second_section_title?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrivacyPolicyEntity = {
  __typename?: 'PrivacyPolicyEntity';
  attributes?: Maybe<PrivacyPolicy>;
  id?: Maybe<Scalars['ID']>;
};

export type PrivacyPolicyEntityResponse = {
  __typename?: 'PrivacyPolicyEntityResponse';
  data?: Maybe<PrivacyPolicyEntity>;
};

export type PrivacyPolicyInput = {
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryEntity = {
  __typename?: 'ProductCategoryEntity';
  attributes?: Maybe<ProductCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductCategoryEntityResponse = {
  __typename?: 'ProductCategoryEntityResponse';
  data?: Maybe<ProductCategoryEntity>;
};

export type ProductCategoryInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type ProductGroup = {
  __typename?: 'ProductGroup';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featured?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  popular?: Maybe<Scalars['Boolean']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductGroupArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductGroupCategory = {
  __typename?: 'ProductGroupCategory';
  Slug: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductGroupCategoryEntity = {
  __typename?: 'ProductGroupCategoryEntity';
  attributes?: Maybe<ProductGroupCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductGroupCategoryEntityResponse = {
  __typename?: 'ProductGroupCategoryEntityResponse';
  data?: Maybe<ProductGroupCategoryEntity>;
};

export type ProductGroupCategoryEntityResponseCollection = {
  __typename?: 'ProductGroupCategoryEntityResponseCollection';
  data: Array<ProductGroupCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductGroupCategoryFiltersInput = {
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductGroupCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductGroupCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductGroupCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductGroupCategoryInput = {
  Slug?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductGroupEntity = {
  __typename?: 'ProductGroupEntity';
  attributes?: Maybe<ProductGroup>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductGroupEntityResponse = {
  __typename?: 'ProductGroupEntityResponse';
  data?: Maybe<ProductGroupEntity>;
};

export type ProductGroupEntityResponseCollection = {
  __typename?: 'ProductGroupEntityResponseCollection';
  data: Array<ProductGroupEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductGroupFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductGroupFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  featured?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductGroupFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductGroupFiltersInput>>>;
  popular?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductGroupInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  featured?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  popular?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductGroupPage = {
  __typename?: 'ProductGroupPage';
  buying_guides_section_one_description: Scalars['String'];
  buying_guides_section_one_title: Scalars['String'];
  buying_guides_section_two_description: Scalars['String'];
  buying_guides_section_two_title: Scalars['String'];
  buying_guides_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  hero_description: Scalars['String'];
  hero_title: Scalars['String'];
  item_description: Scalars['String'];
  item_offers_button_text: Scalars['String'];
  item_stores_section_title: Scalars['String'];
  item_title: Scalars['String'];
  nav_menu: Array<Maybe<ComponentSharedLink>>;
  product_group_footer_description: Scalars['String'];
  product_group_footer_title: Scalars['String'];
  product_listing_section_company_title: Scalars['String'];
  product_listing_section_offers_button_text: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  related_buying_guides_title: Scalars['String'];
  seo?: Maybe<ComponentSharedSeo>;
  similar_buying_guides_description: Scalars['String'];
  similar_buying_guides_title: Scalars['String'];
  similar_items_section_title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductGroupPageNav_MenuArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductGroupPageEntity = {
  __typename?: 'ProductGroupPageEntity';
  attributes?: Maybe<ProductGroupPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductGroupPageEntityResponse = {
  __typename?: 'ProductGroupPageEntityResponse';
  data?: Maybe<ProductGroupPageEntity>;
};

export type ProductGroupPageInput = {
  buying_guides_section_one_description?: InputMaybe<Scalars['String']>;
  buying_guides_section_one_title?: InputMaybe<Scalars['String']>;
  buying_guides_section_two_description?: InputMaybe<Scalars['String']>;
  buying_guides_section_two_title?: InputMaybe<Scalars['String']>;
  buying_guides_title?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  hero_title?: InputMaybe<Scalars['String']>;
  item_description?: InputMaybe<Scalars['String']>;
  item_offers_button_text?: InputMaybe<Scalars['String']>;
  item_stores_section_title?: InputMaybe<Scalars['String']>;
  item_title?: InputMaybe<Scalars['String']>;
  nav_menu?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  product_group_footer_description?: InputMaybe<Scalars['String']>;
  product_group_footer_title?: InputMaybe<Scalars['String']>;
  product_listing_section_company_title?: InputMaybe<Scalars['String']>;
  product_listing_section_offers_button_text?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  related_buying_guides_title?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  similar_buying_guides_description?: InputMaybe<Scalars['String']>;
  similar_buying_guides_title?: InputMaybe<Scalars['String']>;
  similar_items_section_title?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  allCategoriesPage?: Maybe<AllCategoriesPageEntityResponse>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  authorBlogPage?: Maybe<AuthorBlogPageEntityResponse>;
  blogPage?: Maybe<BlogPageEntityResponse>;
  buyingGuide?: Maybe<BuyingGuideEntityResponse>;
  buyingGuides?: Maybe<BuyingGuideEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contactPage?: Maybe<ContactPageEntityResponse>;
  cookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  errorPage?: Maybe<ErrorPageEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  header?: Maybe<HeaderEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  overOnsPage?: Maybe<OverOnsPageEntityResponse>;
  privacyPolicy?: Maybe<PrivacyPolicyEntityResponse>;
  productCategory?: Maybe<ProductCategoryEntityResponse>;
  productGroup?: Maybe<ProductGroupEntityResponse>;
  productGroupCategories?: Maybe<ProductGroupCategoryEntityResponseCollection>;
  productGroupCategory?: Maybe<ProductGroupCategoryEntityResponse>;
  productGroupPage?: Maybe<ProductGroupPageEntityResponse>;
  productGroups?: Maybe<ProductGroupEntityResponseCollection>;
  setting?: Maybe<SettingEntityResponse>;
  singleBlogPage?: Maybe<SingleBlogPageEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  writer?: Maybe<WriterEntityResponse>;
  writers?: Maybe<WriterEntityResponseCollection>;
};


export type QueryAllCategoriesPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAuthorBlogPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBlogPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBuyingGuideArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBuyingGuidesArgs = {
  filters?: InputMaybe<BuyingGuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCookiePolicyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryErrorPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOverOnsPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPrivacyPolicyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductCategoryArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductGroupCategoriesArgs = {
  filters?: InputMaybe<ProductGroupCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductGroupCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductGroupPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductGroupsArgs = {
  filters?: InputMaybe<ProductGroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySingleBlogPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWriterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWritersArgs = {
  filters?: InputMaybe<WriterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Setting = {
  __typename?: 'Setting';
  Categories_Data: Array<Maybe<ComponentSharedLink>>;
  adress: Scalars['String'];
  adress_title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  email_title: Scalars['String'];
  favicon: UploadFileEntityResponse;
  global_accordions: Array<Maybe<ComponentSharedLink>>;
  global_links: Array<Maybe<ComponentSharedLink>>;
  logo: UploadFileEntityResponse;
  published_date_text: Scalars['String'];
  social_media_links: Array<Maybe<ComponentSharedSocialMediaLink>>;
  social_network_title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SettingCategories_DataArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SettingGlobal_AccordionsArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SettingGlobal_LinksArgs = {
  filters?: InputMaybe<ComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SettingSocial_Media_LinksArgs = {
  filters?: InputMaybe<ComponentSharedSocialMediaLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SettingEntity = {
  __typename?: 'SettingEntity';
  attributes?: Maybe<Setting>;
  id?: Maybe<Scalars['ID']>;
};

export type SettingEntityResponse = {
  __typename?: 'SettingEntityResponse';
  data?: Maybe<SettingEntity>;
};

export type SettingInput = {
  Categories_Data?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  adress?: InputMaybe<Scalars['String']>;
  adress_title?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_title?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<Scalars['ID']>;
  global_accordions?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  global_links?: InputMaybe<Array<InputMaybe<ComponentSharedLinkInput>>>;
  logo?: InputMaybe<Scalars['ID']>;
  published_date_text?: InputMaybe<Scalars['String']>;
  social_media_links?: InputMaybe<Array<InputMaybe<ComponentSharedSocialMediaLinkInput>>>;
  social_network_title?: InputMaybe<Scalars['String']>;
};

export type SingleBlogPage = {
  __typename?: 'SingleBlogPage';
  author_card_button_text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SingleBlogPageEntity = {
  __typename?: 'SingleBlogPageEntity';
  attributes?: Maybe<SingleBlogPage>;
  id?: Maybe<Scalars['ID']>;
};

export type SingleBlogPageEntityResponse = {
  __typename?: 'SingleBlogPageEntityResponse';
  data?: Maybe<SingleBlogPageEntity>;
};

export type SingleBlogPageInput = {
  author_card_button_text?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Writer = {
  __typename?: 'Writer';
  about: Scalars['String'];
  articles?: Maybe<ArticleRelationResponseCollection>;
  buying_guides?: Maybe<BuyingGuideRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  linkedin?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  slug: Scalars['String'];
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WriterArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WriterBuying_GuidesArgs = {
  filters?: InputMaybe<BuyingGuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WriterEntity = {
  __typename?: 'WriterEntity';
  attributes?: Maybe<Writer>;
  id?: Maybe<Scalars['ID']>;
};

export type WriterEntityResponse = {
  __typename?: 'WriterEntityResponse';
  data?: Maybe<WriterEntity>;
};

export type WriterEntityResponseCollection = {
  __typename?: 'WriterEntityResponseCollection';
  data: Array<WriterEntity>;
  meta: ResponseCollectionMeta;
};

export type WriterFiltersInput = {
  about?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  buying_guides?: InputMaybe<BuyingGuideFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  featured?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  linkedin?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WriterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WriterFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WriterInput = {
  about?: InputMaybe<Scalars['String']>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  buying_guides?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  email?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type GetArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, description: string, slug: string, content: string, views?: any | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, product_group?: { __typename?: 'ProductGroupEntityResponse', data?: { __typename?: 'ProductGroupEntity', id?: string | null, attributes?: { __typename?: 'ProductGroup', name: string, slug: string, featured?: boolean | null, popular?: boolean | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', id?: string | null, attributes?: { __typename?: 'Writer', name?: string | null, email?: string | null, linkedin?: string | null, twitter?: string | null, about: string, slug: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null } | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null }> } | null };

export type GetBuyingGuidesQueryVariables = Exact<{
  filters?: InputMaybe<BuyingGuideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type GetBuyingGuidesQuery = { __typename?: 'Query', buyingGuides?: { __typename?: 'BuyingGuideEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'BuyingGuideEntity', id?: string | null, attributes?: { __typename?: 'BuyingGuide', title: string, name: string, description: string, product_group_slug: string, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, buying_guide_components: Array<{ __typename?: 'ComponentSharedBuyingGuide', id: string, title: string, faq: boolean, content: string, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | { __typename?: 'Error' } | null>, writer?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', id?: string | null, attributes?: { __typename?: 'Writer', name?: string | null, email?: string | null, linkedin?: string | null, twitter?: string | null, about: string, slug: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type GetArticleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, description: string, slug: string, content: string, views?: any | null, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, author?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', id?: string | null, attributes?: { __typename?: 'Writer', name?: string | null, email?: string | null, linkedin?: string | null, twitter?: string | null, about: string, slug: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null } | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null } | null } | null };

export type GetOneBuyingGuideQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetOneBuyingGuideQuery = { __typename?: 'Query', buyingGuide?: { __typename?: 'BuyingGuideEntityResponse', data?: { __typename?: 'BuyingGuideEntity', id?: string | null, attributes?: { __typename?: 'BuyingGuide', title: string, name: string, description: string, product_group_slug: string, publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, buying_guide_components: Array<{ __typename?: 'ComponentSharedBuyingGuide', id: string, title: string, faq: boolean, content: string } | { __typename?: 'Error' } | null>, writer?: { __typename?: 'WriterEntityResponse', data?: { __typename?: 'WriterEntity', id?: string | null, attributes?: { __typename?: 'Writer', name?: string | null, email?: string | null, linkedin?: string | null, twitter?: string | null, about: string, slug: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', height?: number | null, width?: number | null, name: string, url: string } | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type GetWritersQueryVariables = Exact<{
  filters?: InputMaybe<WriterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetWritersQuery = { __typename?: 'Query', writers?: { __typename?: 'WriterEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'WriterEntity', id?: string | null, attributes?: { __typename?: 'Writer', name?: string | null, slug: string, email?: string | null, about: string, linkedin?: string | null, twitter?: string | null, featured?: boolean | null, createdAt?: any | null, updatedAt?: any | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null };

export type SeoFieldsFragment = { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null };

export type GetSiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteSettingsQuery = { __typename?: 'Query', setting?: { __typename?: 'SettingEntityResponse', data?: { __typename?: 'SettingEntity', id?: string | null, attributes?: { __typename?: 'Setting', published_date_text: string, email_title: string, adress_title: string, social_network_title: string, email: string, adress: string, social_media_links: Array<{ __typename?: 'ComponentSharedSocialMediaLink', id: string, social_media: Enum_Componentsharedsocialmedialink_Social_Media, link: string } | null>, Categories_Data: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null>, global_accordions: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null>, global_links: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null>, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null }, favicon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, width?: number | null, height?: number | null, url: string, previewUrl?: string | null } | null } | null } } | null } | null } | null };

export type GetAllCategoriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesPageQuery = { __typename?: 'Query', allCategoriesPage?: { __typename?: 'AllCategoriesPageEntityResponse', data?: { __typename?: 'AllCategoriesPageEntity', attributes?: { __typename?: 'AllCategoriesPage', createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null } | null };

export type GetAuthorBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorBlogPageQuery = { __typename?: 'Query', authorBlogPage?: { __typename?: 'AuthorBlogPageEntityResponse', data?: { __typename?: 'AuthorBlogPageEntity', attributes?: { __typename?: 'AuthorBlogPage', createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, seo: { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } } | null } | null } | null };

export type GetBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPageQuery = { __typename?: 'Query', blogPage?: { __typename?: 'BlogPageEntityResponse', data?: { __typename?: 'BlogPageEntity', attributes?: { __typename?: 'BlogPage', hero_title: string, popular_posts_text: string, new_posts_text: string } | null } | null } | null };

export type GetContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', hero_title: string, send_button_text: string, content_description: string, content_title: string, form_message_placeholder: string, form_email_placeholder: string, form_name_placeholder: string } | null } | null } | null };

export type GetCookiePolicyPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCookiePolicyPageQuery = { __typename?: 'Query', cookiePolicy?: { __typename?: 'CookiePolicyEntityResponse', data?: { __typename?: 'CookiePolicyEntity', attributes?: { __typename?: 'CookiePolicy', title: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null } | null } | null };

export type GetErrorPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetErrorPageQuery = { __typename?: 'Query', errorPage?: { __typename?: 'ErrorPageEntityResponse', data?: { __typename?: 'ErrorPageEntity', attributes?: { __typename?: 'ErrorPage', title: string, description: string, button_text: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null } | null } | null };

export type GetFooterPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterPageQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', categories_title: string, pages_title?: string | null, contact_title: string, email_title: string, email: string, adress_title: string, adress: string, footer_description: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, copyright_text: string, Categories: Array<{ __typename?: 'ComponentSharedLink', slug: string, name: string, original_name?: string | null } | null>, Pages_Links: Array<{ __typename?: 'ComponentSharedLink', slug: string, name: string, original_name?: string | null } | null> } | null } | null } | null };

export type GetHeaderPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderPageQuery = { __typename?: 'Query', header?: { __typename?: 'HeaderEntityResponse', data?: { __typename?: 'HeaderEntity', attributes?: { __typename?: 'Header', blog_title: string, over_title: string, contact_title: string, categories_title: string, mobile_nav_title: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, Nav_Links: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null>, Categories: Array<{ __typename?: 'ComponentSharedLink', slug: string, name: string, original_name?: string | null } | null> } | null } | null } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', about_tbeste_title: string, about_tbeste_description_one: string, about_tbeste_description_two: string, about_tbeste_description_three: string, about_tbeste_button_text: string, categories_section_title: string, categories_section_description: string, blog_section_title: string, blog_section_description: string, blog_section_button_text: string, all_categories_section_title: string, all_categories_section_description: string, blog_section_popular_posts: string, blog_section_new_posts: string, subcat: Array<{ __typename?: 'ComponentSharedSubcat', cat_name: string, slug: string, subsubcat: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null> } | null> } | null } | null } | null };

export type GetOverOnsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOverOnsPageQuery = { __typename?: 'Query', overOnsPage?: { __typename?: 'OverOnsPageEntityResponse', data?: { __typename?: 'OverOnsPageEntity', attributes?: { __typename?: 'OverOnsPage', Hero_title: string, first_section_title: string, first_section_description: string, second_section_title: string, second_section_description: string, bottom_section_title: string, hero_description: string } | null } | null } | null };

export type GetPrivacyPolicyPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrivacyPolicyPageQuery = { __typename?: 'Query', privacyPolicy?: { __typename?: 'PrivacyPolicyEntityResponse', data?: { __typename?: 'PrivacyPolicyEntity', attributes?: { __typename?: 'PrivacyPolicy', title: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null } | null } | null };

export type GetProductCategoryPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductCategoryPageQuery = { __typename?: 'Query', productCategory?: { __typename?: 'ProductCategoryEntityResponse', data?: { __typename?: 'ProductCategoryEntity', attributes?: { __typename?: 'ProductCategory', createdAt?: any | null, updatedAt?: any | null, seo: { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaDescription?: string | null, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: { __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork?: Enum_Componentsharedmetasocial_Socialnetwork | null, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } } | null } | null } | null };

export type GetProductGroupPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductGroupPageQuery = { __typename?: 'Query', productGroupPage?: { __typename?: 'ProductGroupPageEntityResponse', data?: { __typename?: 'ProductGroupPageEntity', attributes?: { __typename?: 'ProductGroupPage', hero_title: string, hero_description: string, product_listing_section_company_title: string, product_listing_section_offers_button_text: string, related_buying_guides_title: string, item_description: string, similar_buying_guides_title: string, similar_items_section_title: string, item_title: string, item_offers_button_text: string, item_stores_section_title: string, product_group_footer_title: string, product_group_footer_description: string, buying_guides_title: string, buying_guides_section_one_title: string, buying_guides_section_two_title: string, buying_guides_section_one_description: string, buying_guides_section_two_description: string, nav_menu: Array<{ __typename?: 'ComponentSharedLink', name: string, slug: string, original_name?: string | null } | null> } | null } | null } | null };

export type GetSingleBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSingleBlogPageQuery = { __typename?: 'Query', singleBlogPage?: { __typename?: 'SingleBlogPageEntityResponse', data?: { __typename?: 'SingleBlogPageEntity', attributes?: { __typename?: 'SingleBlogPage', author_card_button_text: string } | null } | null } | null };

export const SeoFieldsFragmentDoc = `
    fragment SeoFields on ComponentSharedSeo {
  id
  metaTitle
  metaDescription
  keywords
  metaRobots
  structuredData
  metaViewport
  canonicalURL
  metaSocial {
    id
    socialNetwork
    title
    description
    image {
      data {
        attributes {
          url
          width
          height
        }
      }
    }
  }
  metaImage {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
}
    `;
export const GetArticlesDocument = `
    query getArticles($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  articles(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        description
        slug
        content
        views
        publishedAt
        createdAt
        updatedAt
        seo {
          ...SeoFields
        }
        product_group {
          data {
            id
            attributes {
              name
              slug
              featured
              popular
              createdAt
              updatedAt
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        author {
          data {
            id
            attributes {
              name
              email
              linkedin
              twitter
              about
              slug
              picture {
                data {
                  id
                  attributes {
                    height
                    width
                    name
                    url
                  }
                }
              }
            }
          }
        }
        image {
          data {
            id
            attributes {
              height
              width
              name
              url
            }
          }
        }
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}`;
export const useGetArticlesQuery = <
      TData = GetArticlesQuery,
      TError = unknown
    >(
      variables?: GetArticlesQueryVariables,
      options?: UseQueryOptions<GetArticlesQuery, TError, TData>
    ) =>
    useQuery<GetArticlesQuery, TError, TData>(
      variables === undefined ? ['getArticles'] : ['getArticles', variables],
      rqClient<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, variables),
      options
    );
export const useInfiniteGetArticlesQuery = <
      TData = GetArticlesQuery,
      TError = unknown
    >(
      variables?: GetArticlesQueryVariables,
      options?: UseInfiniteQueryOptions<GetArticlesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetArticlesQuery, TError, TData>(
      variables === undefined ? ['getArticles.infinite'] : ['getArticles.infinite', variables],
      (metaData) => rqClient<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetBuyingGuidesDocument = `
    query getBuyingGuides($filters: BuyingGuideFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  buyingGuides(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        name
        description
        product_group_slug
        publishedAt
        createdAt
        updatedAt
        buying_guide_components {
          ... on ComponentSharedBuyingGuide {
            id
            title
            faq
            cover {
              data {
                id
                attributes {
                  height
                  width
                  name
                  url
                }
              }
            }
            content
          }
        }
        writer {
          data {
            id
            attributes {
              name
              email
              linkedin
              twitter
              about
              slug
              picture {
                data {
                  id
                  attributes {
                    height
                    width
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetBuyingGuidesQuery = <
      TData = GetBuyingGuidesQuery,
      TError = unknown
    >(
      variables?: GetBuyingGuidesQueryVariables,
      options?: UseQueryOptions<GetBuyingGuidesQuery, TError, TData>
    ) =>
    useQuery<GetBuyingGuidesQuery, TError, TData>(
      variables === undefined ? ['getBuyingGuides'] : ['getBuyingGuides', variables],
      rqClient<GetBuyingGuidesQuery, GetBuyingGuidesQueryVariables>(GetBuyingGuidesDocument, variables),
      options
    );
export const useInfiniteGetBuyingGuidesQuery = <
      TData = GetBuyingGuidesQuery,
      TError = unknown
    >(
      variables?: GetBuyingGuidesQueryVariables,
      options?: UseInfiniteQueryOptions<GetBuyingGuidesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetBuyingGuidesQuery, TError, TData>(
      variables === undefined ? ['getBuyingGuides.infinite'] : ['getBuyingGuides.infinite', variables],
      (metaData) => rqClient<GetBuyingGuidesQuery, GetBuyingGuidesQueryVariables>(GetBuyingGuidesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetArticleDocument = `
    query getArticle($id: ID) {
  article(id: $id) {
    data {
      id
      attributes {
        title
        description
        slug
        content
        views
        publishedAt
        createdAt
        updatedAt
        seo {
          ...SeoFields
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        author {
          data {
            id
            attributes {
              name
              email
              linkedin
              twitter
              about
              slug
              picture {
                data {
                  id
                  attributes {
                    height
                    width
                    name
                    url
                  }
                }
              }
            }
          }
        }
        image {
          data {
            id
            attributes {
              height
              width
              name
              url
            }
          }
        }
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}`;
export const useGetArticleQuery = <
      TData = GetArticleQuery,
      TError = unknown
    >(
      variables?: GetArticleQueryVariables,
      options?: UseQueryOptions<GetArticleQuery, TError, TData>
    ) =>
    useQuery<GetArticleQuery, TError, TData>(
      variables === undefined ? ['getArticle'] : ['getArticle', variables],
      rqClient<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, variables),
      options
    );
export const useInfiniteGetArticleQuery = <
      TData = GetArticleQuery,
      TError = unknown
    >(
      variables?: GetArticleQueryVariables,
      options?: UseInfiniteQueryOptions<GetArticleQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetArticleQuery, TError, TData>(
      variables === undefined ? ['getArticle.infinite'] : ['getArticle.infinite', variables],
      (metaData) => rqClient<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetOneBuyingGuideDocument = `
    query getOneBuyingGuide($id: ID) {
  buyingGuide(id: $id) {
    data {
      id
      attributes {
        title
        name
        description
        product_group_slug
        publishedAt
        createdAt
        updatedAt
        buying_guide_components {
          ... on ComponentSharedBuyingGuide {
            id
            title
            faq
            content
          }
        }
        writer {
          data {
            id
            attributes {
              name
              email
              linkedin
              twitter
              about
              slug
              picture {
                data {
                  id
                  attributes {
                    height
                    width
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetOneBuyingGuideQuery = <
      TData = GetOneBuyingGuideQuery,
      TError = unknown
    >(
      variables?: GetOneBuyingGuideQueryVariables,
      options?: UseQueryOptions<GetOneBuyingGuideQuery, TError, TData>
    ) =>
    useQuery<GetOneBuyingGuideQuery, TError, TData>(
      variables === undefined ? ['getOneBuyingGuide'] : ['getOneBuyingGuide', variables],
      rqClient<GetOneBuyingGuideQuery, GetOneBuyingGuideQueryVariables>(GetOneBuyingGuideDocument, variables),
      options
    );
export const useInfiniteGetOneBuyingGuideQuery = <
      TData = GetOneBuyingGuideQuery,
      TError = unknown
    >(
      variables?: GetOneBuyingGuideQueryVariables,
      options?: UseInfiniteQueryOptions<GetOneBuyingGuideQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetOneBuyingGuideQuery, TError, TData>(
      variables === undefined ? ['getOneBuyingGuide.infinite'] : ['getOneBuyingGuide.infinite', variables],
      (metaData) => rqClient<GetOneBuyingGuideQuery, GetOneBuyingGuideQueryVariables>(GetOneBuyingGuideDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetWritersDocument = `
    query getWriters($filters: WriterFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  writers(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        name
        slug
        email
        about
        linkedin
        twitter
        featured
        createdAt
        updatedAt
        picture {
          data {
            id
            attributes {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetWritersQuery = <
      TData = GetWritersQuery,
      TError = unknown
    >(
      variables?: GetWritersQueryVariables,
      options?: UseQueryOptions<GetWritersQuery, TError, TData>
    ) =>
    useQuery<GetWritersQuery, TError, TData>(
      variables === undefined ? ['getWriters'] : ['getWriters', variables],
      rqClient<GetWritersQuery, GetWritersQueryVariables>(GetWritersDocument, variables),
      options
    );
export const useInfiniteGetWritersQuery = <
      TData = GetWritersQuery,
      TError = unknown
    >(
      variables?: GetWritersQueryVariables,
      options?: UseInfiniteQueryOptions<GetWritersQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetWritersQuery, TError, TData>(
      variables === undefined ? ['getWriters.infinite'] : ['getWriters.infinite', variables],
      (metaData) => rqClient<GetWritersQuery, GetWritersQueryVariables>(GetWritersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const UpdateArticleDocument = `
    mutation updateArticle($id: ID!, $data: ArticleInput!) {
  updateArticle(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export const useUpdateArticleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateArticleMutation, TError, UpdateArticleMutationVariables, TContext>) =>
    useMutation<UpdateArticleMutation, TError, UpdateArticleMutationVariables, TContext>(
      ['updateArticle'],
      (variables?: UpdateArticleMutationVariables) => rqClient<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, variables)(),
      options
    );
export const GetSiteSettingsDocument = `
    query GetSiteSettings {
  setting {
    data {
      id
      attributes {
        published_date_text
        email_title
        adress_title
        social_network_title
        email
        adress
        social_media_links(pagination: {limit: 20}) {
          id
          social_media
          link
        }
        Categories_Data {
          name
          slug
          original_name
        }
        global_accordions(pagination: {limit: 20}) {
          name
          slug
          original_name
        }
        global_links(pagination: {limit: 20}) {
          name
          slug
          original_name
        }
        logo {
          data {
            id
            attributes {
              name
              width
              height
              url
              previewUrl
            }
          }
        }
        favicon {
          data {
            id
            attributes {
              name
              width
              height
              url
              previewUrl
            }
          }
        }
      }
    }
  }
}
    `;
export const useGetSiteSettingsQuery = <
      TData = GetSiteSettingsQuery,
      TError = unknown
    >(
      variables?: GetSiteSettingsQueryVariables,
      options?: UseQueryOptions<GetSiteSettingsQuery, TError, TData>
    ) =>
    useQuery<GetSiteSettingsQuery, TError, TData>(
      variables === undefined ? ['GetSiteSettings'] : ['GetSiteSettings', variables],
      rqClient<GetSiteSettingsQuery, GetSiteSettingsQueryVariables>(GetSiteSettingsDocument, variables),
      options
    );
export const useInfiniteGetSiteSettingsQuery = <
      TData = GetSiteSettingsQuery,
      TError = unknown
    >(
      variables?: GetSiteSettingsQueryVariables,
      options?: UseInfiniteQueryOptions<GetSiteSettingsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetSiteSettingsQuery, TError, TData>(
      variables === undefined ? ['GetSiteSettings.infinite'] : ['GetSiteSettings.infinite', variables],
      (metaData) => rqClient<GetSiteSettingsQuery, GetSiteSettingsQueryVariables>(GetSiteSettingsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetAllCategoriesPageDocument = `
    query GetAllCategoriesPage {
  allCategoriesPage {
    data {
      attributes {
        createdAt
        updatedAt
        publishedAt
        seo {
          ...SeoFields
        }
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}`;
export const useGetAllCategoriesPageQuery = <
      TData = GetAllCategoriesPageQuery,
      TError = unknown
    >(
      variables?: GetAllCategoriesPageQueryVariables,
      options?: UseQueryOptions<GetAllCategoriesPageQuery, TError, TData>
    ) =>
    useQuery<GetAllCategoriesPageQuery, TError, TData>(
      variables === undefined ? ['GetAllCategoriesPage'] : ['GetAllCategoriesPage', variables],
      rqClient<GetAllCategoriesPageQuery, GetAllCategoriesPageQueryVariables>(GetAllCategoriesPageDocument, variables),
      options
    );
export const useInfiniteGetAllCategoriesPageQuery = <
      TData = GetAllCategoriesPageQuery,
      TError = unknown
    >(
      variables?: GetAllCategoriesPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetAllCategoriesPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetAllCategoriesPageQuery, TError, TData>(
      variables === undefined ? ['GetAllCategoriesPage.infinite'] : ['GetAllCategoriesPage.infinite', variables],
      (metaData) => rqClient<GetAllCategoriesPageQuery, GetAllCategoriesPageQueryVariables>(GetAllCategoriesPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetAuthorBlogPageDocument = `
    query GetAuthorBlogPage {
  authorBlogPage {
    data {
      attributes {
        seo {
          ...SeoFields
        }
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}`;
export const useGetAuthorBlogPageQuery = <
      TData = GetAuthorBlogPageQuery,
      TError = unknown
    >(
      variables?: GetAuthorBlogPageQueryVariables,
      options?: UseQueryOptions<GetAuthorBlogPageQuery, TError, TData>
    ) =>
    useQuery<GetAuthorBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetAuthorBlogPage'] : ['GetAuthorBlogPage', variables],
      rqClient<GetAuthorBlogPageQuery, GetAuthorBlogPageQueryVariables>(GetAuthorBlogPageDocument, variables),
      options
    );
export const useInfiniteGetAuthorBlogPageQuery = <
      TData = GetAuthorBlogPageQuery,
      TError = unknown
    >(
      variables?: GetAuthorBlogPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetAuthorBlogPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetAuthorBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetAuthorBlogPage.infinite'] : ['GetAuthorBlogPage.infinite', variables],
      (metaData) => rqClient<GetAuthorBlogPageQuery, GetAuthorBlogPageQueryVariables>(GetAuthorBlogPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetBlogPageDocument = `
    query GetBlogPage {
  blogPage {
    data {
      attributes {
        hero_title
        popular_posts_text
        new_posts_text
      }
    }
  }
}
    `;
export const useGetBlogPageQuery = <
      TData = GetBlogPageQuery,
      TError = unknown
    >(
      variables?: GetBlogPageQueryVariables,
      options?: UseQueryOptions<GetBlogPageQuery, TError, TData>
    ) =>
    useQuery<GetBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetBlogPage'] : ['GetBlogPage', variables],
      rqClient<GetBlogPageQuery, GetBlogPageQueryVariables>(GetBlogPageDocument, variables),
      options
    );
export const useInfiniteGetBlogPageQuery = <
      TData = GetBlogPageQuery,
      TError = unknown
    >(
      variables?: GetBlogPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetBlogPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetBlogPage.infinite'] : ['GetBlogPage.infinite', variables],
      (metaData) => rqClient<GetBlogPageQuery, GetBlogPageQueryVariables>(GetBlogPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetContactPageDocument = `
    query GetContactPage {
  contactPage {
    data {
      attributes {
        hero_title
        send_button_text
        content_description
        content_title
        form_message_placeholder
        form_email_placeholder
        form_name_placeholder
      }
    }
  }
}
    `;
export const useGetContactPageQuery = <
      TData = GetContactPageQuery,
      TError = unknown
    >(
      variables?: GetContactPageQueryVariables,
      options?: UseQueryOptions<GetContactPageQuery, TError, TData>
    ) =>
    useQuery<GetContactPageQuery, TError, TData>(
      variables === undefined ? ['GetContactPage'] : ['GetContactPage', variables],
      rqClient<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, variables),
      options
    );
export const useInfiniteGetContactPageQuery = <
      TData = GetContactPageQuery,
      TError = unknown
    >(
      variables?: GetContactPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetContactPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetContactPageQuery, TError, TData>(
      variables === undefined ? ['GetContactPage.infinite'] : ['GetContactPage.infinite', variables],
      (metaData) => rqClient<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetCookiePolicyPageDocument = `
    query GetCookiePolicyPage {
  cookiePolicy {
    data {
      attributes {
        title
        content
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;
export const useGetCookiePolicyPageQuery = <
      TData = GetCookiePolicyPageQuery,
      TError = unknown
    >(
      variables?: GetCookiePolicyPageQueryVariables,
      options?: UseQueryOptions<GetCookiePolicyPageQuery, TError, TData>
    ) =>
    useQuery<GetCookiePolicyPageQuery, TError, TData>(
      variables === undefined ? ['GetCookiePolicyPage'] : ['GetCookiePolicyPage', variables],
      rqClient<GetCookiePolicyPageQuery, GetCookiePolicyPageQueryVariables>(GetCookiePolicyPageDocument, variables),
      options
    );
export const useInfiniteGetCookiePolicyPageQuery = <
      TData = GetCookiePolicyPageQuery,
      TError = unknown
    >(
      variables?: GetCookiePolicyPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetCookiePolicyPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetCookiePolicyPageQuery, TError, TData>(
      variables === undefined ? ['GetCookiePolicyPage.infinite'] : ['GetCookiePolicyPage.infinite', variables],
      (metaData) => rqClient<GetCookiePolicyPageQuery, GetCookiePolicyPageQueryVariables>(GetCookiePolicyPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetErrorPageDocument = `
    query GetErrorPage {
  errorPage {
    data {
      attributes {
        title
        description
        button_text
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;
export const useGetErrorPageQuery = <
      TData = GetErrorPageQuery,
      TError = unknown
    >(
      variables?: GetErrorPageQueryVariables,
      options?: UseQueryOptions<GetErrorPageQuery, TError, TData>
    ) =>
    useQuery<GetErrorPageQuery, TError, TData>(
      variables === undefined ? ['GetErrorPage'] : ['GetErrorPage', variables],
      rqClient<GetErrorPageQuery, GetErrorPageQueryVariables>(GetErrorPageDocument, variables),
      options
    );
export const useInfiniteGetErrorPageQuery = <
      TData = GetErrorPageQuery,
      TError = unknown
    >(
      variables?: GetErrorPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetErrorPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetErrorPageQuery, TError, TData>(
      variables === undefined ? ['GetErrorPage.infinite'] : ['GetErrorPage.infinite', variables],
      (metaData) => rqClient<GetErrorPageQuery, GetErrorPageQueryVariables>(GetErrorPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetFooterPageDocument = `
    query GetFooterPage {
  footer {
    data {
      attributes {
        categories_title
        pages_title
        contact_title
        email_title
        email
        adress_title
        adress
        footer_description
        createdAt
        updatedAt
        publishedAt
        Categories {
          slug
          name
          original_name
        }
        Pages_Links {
          slug
          name
          original_name
        }
        copyright_text
      }
    }
  }
}
    `;
export const useGetFooterPageQuery = <
      TData = GetFooterPageQuery,
      TError = unknown
    >(
      variables?: GetFooterPageQueryVariables,
      options?: UseQueryOptions<GetFooterPageQuery, TError, TData>
    ) =>
    useQuery<GetFooterPageQuery, TError, TData>(
      variables === undefined ? ['GetFooterPage'] : ['GetFooterPage', variables],
      rqClient<GetFooterPageQuery, GetFooterPageQueryVariables>(GetFooterPageDocument, variables),
      options
    );
export const useInfiniteGetFooterPageQuery = <
      TData = GetFooterPageQuery,
      TError = unknown
    >(
      variables?: GetFooterPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetFooterPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetFooterPageQuery, TError, TData>(
      variables === undefined ? ['GetFooterPage.infinite'] : ['GetFooterPage.infinite', variables],
      (metaData) => rqClient<GetFooterPageQuery, GetFooterPageQueryVariables>(GetFooterPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetHeaderPageDocument = `
    query GetHeaderPage {
  header {
    data {
      attributes {
        blog_title
        over_title
        contact_title
        categories_title
        mobile_nav_title
        createdAt
        updatedAt
        publishedAt
        Nav_Links {
          name
          slug
          original_name
        }
        Categories {
          slug
          name
          original_name
        }
      }
    }
  }
}
    `;
export const useGetHeaderPageQuery = <
      TData = GetHeaderPageQuery,
      TError = unknown
    >(
      variables?: GetHeaderPageQueryVariables,
      options?: UseQueryOptions<GetHeaderPageQuery, TError, TData>
    ) =>
    useQuery<GetHeaderPageQuery, TError, TData>(
      variables === undefined ? ['GetHeaderPage'] : ['GetHeaderPage', variables],
      rqClient<GetHeaderPageQuery, GetHeaderPageQueryVariables>(GetHeaderPageDocument, variables),
      options
    );
export const useInfiniteGetHeaderPageQuery = <
      TData = GetHeaderPageQuery,
      TError = unknown
    >(
      variables?: GetHeaderPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetHeaderPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetHeaderPageQuery, TError, TData>(
      variables === undefined ? ['GetHeaderPage.infinite'] : ['GetHeaderPage.infinite', variables],
      (metaData) => rqClient<GetHeaderPageQuery, GetHeaderPageQueryVariables>(GetHeaderPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetHomePageDocument = `
    query GetHomePage {
  homePage {
    data {
      attributes {
        about_tbeste_title
        about_tbeste_description_one
        about_tbeste_description_two
        about_tbeste_description_three
        about_tbeste_button_text
        categories_section_title
        categories_section_description
        blog_section_title
        blog_section_description
        blog_section_button_text
        all_categories_section_title
        all_categories_section_description
        blog_section_popular_posts
        blog_section_new_posts
        subcat {
          cat_name
          slug
          subsubcat {
            name
            slug
            original_name
          }
        }
      }
    }
  }
}
    `;
export const useGetHomePageQuery = <
      TData = GetHomePageQuery,
      TError = unknown
    >(
      variables?: GetHomePageQueryVariables,
      options?: UseQueryOptions<GetHomePageQuery, TError, TData>
    ) =>
    useQuery<GetHomePageQuery, TError, TData>(
      variables === undefined ? ['GetHomePage'] : ['GetHomePage', variables],
      rqClient<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, variables),
      options
    );
export const useInfiniteGetHomePageQuery = <
      TData = GetHomePageQuery,
      TError = unknown
    >(
      variables?: GetHomePageQueryVariables,
      options?: UseInfiniteQueryOptions<GetHomePageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetHomePageQuery, TError, TData>(
      variables === undefined ? ['GetHomePage.infinite'] : ['GetHomePage.infinite', variables],
      (metaData) => rqClient<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetOverOnsPageDocument = `
    query GetOverOnsPage {
  overOnsPage {
    data {
      attributes {
        Hero_title
        first_section_title
        first_section_description
        second_section_title
        second_section_description
        bottom_section_title
        hero_description
        bottom_section_title
      }
    }
  }
}
    `;
export const useGetOverOnsPageQuery = <
      TData = GetOverOnsPageQuery,
      TError = unknown
    >(
      variables?: GetOverOnsPageQueryVariables,
      options?: UseQueryOptions<GetOverOnsPageQuery, TError, TData>
    ) =>
    useQuery<GetOverOnsPageQuery, TError, TData>(
      variables === undefined ? ['GetOverOnsPage'] : ['GetOverOnsPage', variables],
      rqClient<GetOverOnsPageQuery, GetOverOnsPageQueryVariables>(GetOverOnsPageDocument, variables),
      options
    );
export const useInfiniteGetOverOnsPageQuery = <
      TData = GetOverOnsPageQuery,
      TError = unknown
    >(
      variables?: GetOverOnsPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetOverOnsPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetOverOnsPageQuery, TError, TData>(
      variables === undefined ? ['GetOverOnsPage.infinite'] : ['GetOverOnsPage.infinite', variables],
      (metaData) => rqClient<GetOverOnsPageQuery, GetOverOnsPageQueryVariables>(GetOverOnsPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetPrivacyPolicyPageDocument = `
    query GetPrivacyPolicyPage {
  privacyPolicy {
    data {
      attributes {
        title
        content
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;
export const useGetPrivacyPolicyPageQuery = <
      TData = GetPrivacyPolicyPageQuery,
      TError = unknown
    >(
      variables?: GetPrivacyPolicyPageQueryVariables,
      options?: UseQueryOptions<GetPrivacyPolicyPageQuery, TError, TData>
    ) =>
    useQuery<GetPrivacyPolicyPageQuery, TError, TData>(
      variables === undefined ? ['GetPrivacyPolicyPage'] : ['GetPrivacyPolicyPage', variables],
      rqClient<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>(GetPrivacyPolicyPageDocument, variables),
      options
    );
export const useInfiniteGetPrivacyPolicyPageQuery = <
      TData = GetPrivacyPolicyPageQuery,
      TError = unknown
    >(
      variables?: GetPrivacyPolicyPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetPrivacyPolicyPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetPrivacyPolicyPageQuery, TError, TData>(
      variables === undefined ? ['GetPrivacyPolicyPage.infinite'] : ['GetPrivacyPolicyPage.infinite', variables],
      (metaData) => rqClient<GetPrivacyPolicyPageQuery, GetPrivacyPolicyPageQueryVariables>(GetPrivacyPolicyPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetProductCategoryPageDocument = `
    query GetProductCategoryPage {
  productCategory {
    data {
      attributes {
        createdAt
        updatedAt
        seo {
          ...SeoFields
        }
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}`;
export const useGetProductCategoryPageQuery = <
      TData = GetProductCategoryPageQuery,
      TError = unknown
    >(
      variables?: GetProductCategoryPageQueryVariables,
      options?: UseQueryOptions<GetProductCategoryPageQuery, TError, TData>
    ) =>
    useQuery<GetProductCategoryPageQuery, TError, TData>(
      variables === undefined ? ['GetProductCategoryPage'] : ['GetProductCategoryPage', variables],
      rqClient<GetProductCategoryPageQuery, GetProductCategoryPageQueryVariables>(GetProductCategoryPageDocument, variables),
      options
    );
export const useInfiniteGetProductCategoryPageQuery = <
      TData = GetProductCategoryPageQuery,
      TError = unknown
    >(
      variables?: GetProductCategoryPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetProductCategoryPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetProductCategoryPageQuery, TError, TData>(
      variables === undefined ? ['GetProductCategoryPage.infinite'] : ['GetProductCategoryPage.infinite', variables],
      (metaData) => rqClient<GetProductCategoryPageQuery, GetProductCategoryPageQueryVariables>(GetProductCategoryPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetProductGroupPageDocument = `
    query GetProductGroupPage {
  productGroupPage {
    data {
      attributes {
        hero_title
        hero_description
        product_listing_section_company_title
        product_listing_section_offers_button_text
        nav_menu {
          name
          slug
          original_name
        }
        related_buying_guides_title
        item_description
        similar_buying_guides_title
        similar_items_section_title
        item_title
        item_offers_button_text
        item_stores_section_title
        product_group_footer_title
        product_group_footer_description
        buying_guides_title
        buying_guides_section_one_title
        buying_guides_section_two_title
        buying_guides_section_one_description
        buying_guides_section_two_description
      }
    }
  }
}
    `;
export const useGetProductGroupPageQuery = <
      TData = GetProductGroupPageQuery,
      TError = unknown
    >(
      variables?: GetProductGroupPageQueryVariables,
      options?: UseQueryOptions<GetProductGroupPageQuery, TError, TData>
    ) =>
    useQuery<GetProductGroupPageQuery, TError, TData>(
      variables === undefined ? ['GetProductGroupPage'] : ['GetProductGroupPage', variables],
      rqClient<GetProductGroupPageQuery, GetProductGroupPageQueryVariables>(GetProductGroupPageDocument, variables),
      options
    );
export const useInfiniteGetProductGroupPageQuery = <
      TData = GetProductGroupPageQuery,
      TError = unknown
    >(
      variables?: GetProductGroupPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetProductGroupPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetProductGroupPageQuery, TError, TData>(
      variables === undefined ? ['GetProductGroupPage.infinite'] : ['GetProductGroupPage.infinite', variables],
      (metaData) => rqClient<GetProductGroupPageQuery, GetProductGroupPageQueryVariables>(GetProductGroupPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const GetSingleBlogPageDocument = `
    query GetSingleBlogPage {
  singleBlogPage {
    data {
      attributes {
        author_card_button_text
      }
    }
  }
}
    `;
export const useGetSingleBlogPageQuery = <
      TData = GetSingleBlogPageQuery,
      TError = unknown
    >(
      variables?: GetSingleBlogPageQueryVariables,
      options?: UseQueryOptions<GetSingleBlogPageQuery, TError, TData>
    ) =>
    useQuery<GetSingleBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetSingleBlogPage'] : ['GetSingleBlogPage', variables],
      rqClient<GetSingleBlogPageQuery, GetSingleBlogPageQueryVariables>(GetSingleBlogPageDocument, variables),
      options
    );
export const useInfiniteGetSingleBlogPageQuery = <
      TData = GetSingleBlogPageQuery,
      TError = unknown
    >(
      variables?: GetSingleBlogPageQueryVariables,
      options?: UseInfiniteQueryOptions<GetSingleBlogPageQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GetSingleBlogPageQuery, TError, TData>(
      variables === undefined ? ['GetSingleBlogPage.infinite'] : ['GetSingleBlogPage.infinite', variables],
      (metaData) => rqClient<GetSingleBlogPageQuery, GetSingleBlogPageQueryVariables>(GetSingleBlogPageDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
