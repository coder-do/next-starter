import { List, Divider, Button } from 'antd';
import { useRouter } from 'next/router';
import { RollbackOutlined } from '@ant-design/icons';

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
            <Button
                type='ghost'
                style={{ marginTop: '20px' }}
                icon={<RollbackOutlined />}
                onClick={() => router.back()}>Go back</Button>
        </>
    )
}

export default EventDetails;