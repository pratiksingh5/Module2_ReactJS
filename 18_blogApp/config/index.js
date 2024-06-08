const config = {
    PROJECT_KEY : String(import.meta.env.VITE_APPWRITE_PROJECT_KEY),
    DATABASE_KEY :  String(import.meta.env.VITE_APPWRITE_DATABASE_KEY),
    BUCKET_KEY:  String(import.meta.env.VITE_APPWRITE_BUCKET_KEY),
    BASEURL : String(import.meta.env.VITE_APPWRITE_ENDPOINT)
}

export default config;