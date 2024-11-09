import { useState, PropsWithChildren, ReactNode, useEffect } from "react";
import { AuthenticatedProps, User } from "@/types";
import Header from "./Header";
import MobileLayout from "./MobileLayout";

// Хук для визначення розміру екрану
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};

export default function Authenticated({
    user,
    header,
    children,
    ...props
}: AuthenticatedProps) {
    const isMobile = useIsMobile();

    if (isMobile) {
        console.log("Mobile Layout Props:", { children }); // Для дебагу
        return (
            <MobileLayout
                user={user}
                {...props} // передаємо всі додаткові пропси
            >
                {children}
            </MobileLayout>
        );
    }

    return (
        <>
            <Header />
            <div className="body" data-mode="light" data-sidebar-size="lg">
                {children}
            </div>
        </>
    );
}
