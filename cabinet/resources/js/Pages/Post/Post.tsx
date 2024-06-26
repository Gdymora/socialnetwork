import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; 
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Post({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Post</h2>}
        >
            <Head title="Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                       1  fff
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                       2  fff
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                       3 fff
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
