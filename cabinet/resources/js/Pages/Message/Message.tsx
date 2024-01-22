import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Auth } from '@/types'; 
interface UsePageProps {
    auth: Auth; 
}
// Припускаємо, що NewPageProps визначено десь в іншому місці
export default function MessagePage({ auth }: UsePageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    New Page Title
                </h2>
            }
        >
            <Head title="New Page" />

            {/* Контент нової сторінки */}
            <main>
                {/* Використання someData та інших елементів */}
            </main>
        </AuthenticatedLayout>
    );
}
