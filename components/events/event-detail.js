import { List, Divider, Button } from 'antd';
import { useRouter } from 'next/router';
import { RollbackOutlined } from '@ant-design/icons';

const EventDetails = ({ events }) => {
    const router = useRouter();
    return (
        <>
            <Divider orientation="center">Event detail</Divider>
            <List
                size="large"
                bordered
                dataSource={events}
                renderItem={item => item !== events[5] && <List.Item>{item}</List.Item>}
            />

            <Button
                type='ghost'
                style={{ marginTop: '20px' }}
                icon={<RollbackOutlined />}
                onClick={() => router.back()}>Go back</Button>
        </>
    );
};

export default EventDetails;