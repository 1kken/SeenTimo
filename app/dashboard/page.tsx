import { Navbar } from "@/components/landing/nav-bar";
export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="flex flex-col items-center justify-center py-8 px-4 mt-16">
                <h1>Welcome to transparent dashboard</h1>
            </main>
        </div>
    );
}