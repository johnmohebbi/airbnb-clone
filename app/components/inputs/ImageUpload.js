import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { useCallback } from "react";
import Image from "next/image";
const ImageUpload = ({ onChange, value }) => {
  const handleUploade = useCallback(
    (result) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <>
      <CldUploadWidget
        onUpload={handleUploade}
        uploadPreset="fnibnwhd"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="
                    relative
                    cursor-pointer
                    hover:opacity-70
                    transition
                    border-dashed 
                    border-2 
                    p-20 
                    border-neutral-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    text-neutral-600
                    "
            >
              <TbPhotoPlus size={48} />
              <div className="font-semibold text-lg">Click to upload</div>
              {value && (
                <div
                  className="
                        absolute inset-0 w-full h-full"
                >
                  <Image
                  fill 
                  style={{ objectFit: 'fill' }} 
                  src={value} 
                  alt="House" 
                />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
