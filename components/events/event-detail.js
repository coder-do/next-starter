import { List, Divider } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const EventDetails = ({ events }) => {
    const ev = events && Object.values(events);
    const router = useRouter();
    return (
        <>
            <Divider orientation="center">Event detail</Divider>
            <List
                size="large"
                bordered
                dataSource={ev}
                renderItem={item => typeof item !== 'boolean' && <List.Item>{item}</List.Item>}
            />
            {/* <Link href='/events'>Go back</Link> */ /* not optimal to go back from every page */}
            <span style={{ cursor: 'pointer' }} onClick={() => router.back()}>Go back</span>
        </>
    )
}

export default EventDetails;