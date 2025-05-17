"use client";
import { ArrowLeft, Pencil } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface HeadingWithOptionalButtonProps {
  title: string;
  onBack?: () => void; 
  editHref?: string; 
}

const HeadingWithOptionalButton = ({
  title, 
  onBack, 
  editHref
}: HeadingWithOptionalButtonProps): ReactNode => {

  const router = useRouter();

  const handleGoBack = () => {
    if (onBack) {
      onBack(); // Use the custom onBack function if provided
    } else {
      router.back(); // Default to router.back() if no custom function
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-black">{title}</h4>
        {onBack && (
          <button
            onClick={handleGoBack}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <ArrowLeft color='black' size={18}/>
            Go Back
          </button>
        )}
        {editHref && (
          <Link href={editHref} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <Pencil color='black' size={18}/>
            Edit
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeadingWithOptionalButton;