const config = {
    PROJECT_KEY : String(import.meta.env.VITE_APPWRITE_PROJECT_KEY),
    DATABASE_KEY :  String(import.meta.env.VITE_APPWRITE_DATABASE_KEY),
    BUCKET_KEY:  String(import.meta.env.VITE_APPWRITE_BUCKET_KEY),
    BACKEND_URL : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    TINY_API_KEY : String(import.meta.env.VITE_TINY_RTE_API_KEY),
    COLLECTION_KEY: String(import.meta.env.VITE_APPWRITE_COLLECTION_KEY)
}

export default config;