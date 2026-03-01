import { Client, Databases, Storage } from "node-appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const apiKey = process.env.APPWRITE_API_KEY;
const databaseId = process.env.APPWRITE_DATABASE_ID;
const bucketId = process.env.APPWRITE_BUCKET_ID ?? "reu_media";

if (!endpoint || !projectId || !apiKey || !databaseId) {
  // We intentionally do not throw here to avoid breaking the build if envs are missing.
  // Instead, helpers that use this client should handle undefined safely.
  console.warn("[Appwrite] Missing environment variables. Server client will not be fully initialised.");
}

export function createServerClient() {
  const client = new Client();

  if (endpoint) client.setEndpoint(endpoint);
  if (projectId) client.setProject(projectId);
  if (apiKey) client.setKey(apiKey);

  return {
    client,
    databases: new Databases(client),
    storage: new Storage(client),
  };
}

// Helper types
export type ClientDocument = {
  $id: string;
  name: string;
  logoFileId?: string;
};

type ImageDoc = {
  $id: string;
  name: string;
  imageUrl?: string;
  imageFileId?: string;
};

// Server-side helpers for public pages
export async function getClientsFromDb(): Promise<{ id: string; name: string; logoUrl: string }[]> {
  if (!databaseId || !projectId || !endpoint) return [];

  const { databases } = createServerClient();

  try {
    const res = await databases.listDocuments(databaseId!, process.env.APPWRITE_CLIENTS_COLLECTION_ID as string);

    return res.documents.map((doc: any) => {
      const fileId = doc.logoFileId as string | undefined;

      // If logoFileId is already a full URL, use it as-is.
      // Otherwise, treat it as a file ID and construct the Appwrite view URL.
      let logoUrl = "/images/client_logo/placeholder.png";
      if (fileId) {
        if (fileId.startsWith("http://") || fileId.startsWith("https://")) {
          logoUrl = fileId;
        } else if (endpoint) {
          logoUrl = `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view`;
        }
      }

      return {
        id: doc.$id as string,
        name: doc.name as string,
        logoUrl,
      };
    });
  } catch (error) {
    console.error("[Appwrite] Failed to load clients", error);
    return [];
  }
}

export async function getQualityFromDb(): Promise<{ id: string; name: string; imageUrl: string }[]> {
  if (!databaseId || !projectId || !endpoint) return [];

  const { databases } = createServerClient();

  try {
    const res = await databases.listDocuments(databaseId!, process.env.APPWRITE_QUALITY_COLLECTION_ID as string);

    return res.documents.map((doc: any) => {
      const raw = (doc.imageUrl as string | undefined) ?? (doc.imageFileId as string | undefined);

      let url = "/images/placeholder.png";
      if (raw) {
        if (raw.startsWith("http://") || raw.startsWith("https://")) {
          url = raw;
        } else if (endpoint) {
          url = `${endpoint}/storage/buckets/${bucketId}/files/${raw}/view`;
        }
      }

      return {
        id: doc.$id as string,
        name: doc.name as string,
        imageUrl: url,
      };
    });
  } catch (error) {
    console.error("[Appwrite] Failed to load quality assurance items", error);
    return [];
  }
}

export async function getEventsFromDb(): Promise<{ id: string; name: string; imageUrls: string[] }[]> {
  if (!databaseId || !projectId || !endpoint) return [];

  const { databases } = createServerClient();

  try {
    const res = await databases.listDocuments(databaseId!, process.env.APPWRITE_EVENTS_COLLECTION_ID as string);

    return res.documents.map((doc: any) => {
      const fromArray = (doc.imageUrls as string[] | undefined)?.filter(Boolean) ?? [];

      // Backwards compatibility: if there is a single imageUrl/imageFileId and no array, construct one.
      if (fromArray.length === 0) {
        const raw = (doc.imageUrl as string | undefined) ?? (doc.imageFileId as string | undefined);

        let url = "/images/placeholder.png";
        if (raw) {
          if (raw.startsWith("http://") || raw.startsWith("https://")) {
            url = raw;
          } else if (endpoint) {
            url = `${endpoint}/storage/buckets/${bucketId}/files/${raw}/view`;
          }
        }

        return {
          id: doc.$id as string,
          name: doc.name as string,
          imageUrls: [url],
        };
      }

      return {
        id: doc.$id as string,
        name: doc.name as string,
        imageUrls: fromArray,
      };
    });
  } catch (error) {
    console.error("[Appwrite] Failed to load events", error);
    return [];
  }
}

export async function getCertificatesFromDb(): Promise<{ id: string; name: string; imageUrl: string }[]> {
  if (!databaseId || !projectId || !endpoint) return [];

  const { databases } = createServerClient();

  try {
    const res = await databases.listDocuments(databaseId!, process.env.APPWRITE_CERTIFICATES_COLLECTION_ID as string);

    return res.documents.map((doc: any) => {
      const raw = (doc.imageUrl as string | undefined) ?? (doc.imageFileId as string | undefined);

      let url = "/images/placeholder.png";
      if (raw) {
        if (raw.startsWith("http://") || raw.startsWith("https://")) {
          url = raw;
        } else if (endpoint) {
          url = `${endpoint}/storage/buckets/${bucketId}/files/${raw}/view`;
        }
      }

      return {
        id: doc.$id as string,
        name: doc.name as string,
        imageUrl: url,
      };
    });
  } catch (error) {
    console.error("[Appwrite] Failed to load certificates", error);
    return [];
  }
}
