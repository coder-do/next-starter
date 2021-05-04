import React, { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { Result, Button } from 'antd';
import Nav from '../components/nav';

const errorPage: React.FC<void> = () => {
    const router: NextRouter = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    function goHome(): void {
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
                subTitle="სამწუხაროდ ეს გვერდი არ არსებობს :("
                extra={<Button type="primary" onClick={goHome} loading={loading}>უკან</Button>}
            />
        </>
    );
};

export default errorPage;