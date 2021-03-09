import { useRouter } from 'next/router';

export default function PortfolioPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h1>Portfolio dynamic path page</h1>
        </div>
    )
}