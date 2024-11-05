import { PacmanLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <PacmanLoader color="#2D3A4B" size="70" />
        </div>
    );
}