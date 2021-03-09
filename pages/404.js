import { useState } from 'react'
import { useRouter } from 'next/router';
import { Result, Button } from 'antd';

export default function errorPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    function goHome() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push('/');
        }, 1000)
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={goHome} loading={loading}>Back Home</Button>}
        />
    )
}