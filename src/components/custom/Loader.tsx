import { LoaderCircle } from 'lucide-react';

interface LoaderProps {
  size: '8' | '12' | '20';
}
export const Loader = ({ size }: LoaderProps) => {
  return (
    <div className={`absolute top-1/2 left-1/2 w-${size} h-${size}`}>
      <LoaderCircle className={`w-${size} h-${size} animate-spin`} />
    </div>
  );
};
