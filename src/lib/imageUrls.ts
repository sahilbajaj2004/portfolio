// Central configuration for image URLs
// This makes it easy to switch between local files and external URLs

const IMAGE_BASE_URL = "https://www.sahilbajaj.me";

export const getImageUrl = (imagePath: string): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `${IMAGE_BASE_URL}/${cleanPath}`;
};

// Predefined image URLs for commonly used images
export const imageUrls = {
  // Profile images
  profile: getImageUrl("bajaj.jpg"),

  // Project images
  pi314: getImageUrl("Pi3.14.png"),
  devCrafter: getImageUrl("DevCrafter.png"),
  prerna: getImageUrl("Prerna.png"),
  ime: getImageUrl("ime.png"),

  // Post images
  post3: getImageUrl("post3.jpg"),
  post4: getImageUrl("post4.png"),

  // Post videos
  post1Video: getImageUrl("post1.mp4"),
  post2Video: getImageUrl("post2.mp4"),

  // Other assets
  techno: getImageUrl("techno.png"),
  todo: getImageUrl("todo.png"),
  webpic: getImageUrl("webpic.png"),
  nike: getImageUrl("Nike.png"),
  expo: getImageUrl("expo.png"),
} as const;

// Alternative function for CDN or different hosting providers
export const getCDNUrl = (
  imagePath: string,
  provider: "sahilbajaj" | "cloudinary" | "aws" = "sahilbajaj"
): string => {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  switch (provider) {
    case "sahilbajaj":
      return `https://www.sahilbajaj.me/${cleanPath}`;
    case "cloudinary":
      // Example: https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/sample.jpg
      return `https://res.cloudinary.com/your-cloud-name/image/upload/${cleanPath}`;
    case "aws":
      // Example: https://your-bucket.s3.amazonaws.com/images/sample.jpg
      return `https://your-bucket.s3.amazonaws.com/${cleanPath}`;
    default:
      return `https://www.sahilbajaj.me/${cleanPath}`;
  }
};
