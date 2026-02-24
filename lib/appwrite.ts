import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const CONTACT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID!;
const NEWSLETTER_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_NEWSLETTER_COLLECTION_ID!;

export { client, databases, DATABASE_ID, CONTACT_COLLECTION_ID, NEWSLETTER_COLLECTION_ID, ID };
