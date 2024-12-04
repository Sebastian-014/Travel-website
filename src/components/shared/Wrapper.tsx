
import { FC } from "react";

{/* Wrapper */ }

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-screen-2xl mx-auto px-8">
            {children}
        </div>
    )
}

export default Wrapper