import { useState } from 'react';
import { useRouter } from 'next/router';
import { Result, Button } from 'antd';
import Nav from '../components/nav';

export default function errorPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    function goHome() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.back();
        }, 1000);
    }
    return (
        <>
            <Nav />
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={goHome} loading={loading}>Go Back</Button>}
            />
        </>
    );
}