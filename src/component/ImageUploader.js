"use client";

import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

const ImageUploader = () => {
    const [imageUrl, setImageUrl] = useState(null);

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Show uploaded image */}
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt="Uploaded" 
                    className="w-32 h-32 object-cover rounded-md shadow-md" 
                />
            ) : (
                <div className="w-32 h-32 border border-dashed flex items-center justify-center text-gray-500">
                    No Image
                </div>
            )}

            {/* Cloudinary Image using public ID
            <CldImage
                src="your-public-image-id" // Replace with your actual Cloudinary image ID
                width={500} 
                height={500} 
                alt="Cloudinary Image"
                crop="fill"
                gravity="auto"
            /> */}

            {/* Cloudinary Upload Button */}
            <CldUploadButton className="bg-blue-200 rounded-md px-5 py-1"
                uploadPreset="blog_builder" // Replace with your Cloudinary preset
                onSuccess={(result) => setImageUrl(result.info.secure_url)} // Handle upload result
            >
                Upload Image
            </CldUploadButton>
        </div>
    );
};

export default ImageUploader;



