import { List, Divider, Button, Avatar, Badge } from 'antd';
import { useRouter } from 'next/router';
import { RollbackOutlined } from '@ant-design/icons';

const EventDetails: React.FC<any> = ({ events }) => {
    const router = useRouter();
    const data = {
        author: () => (
            <>

            </>
        )
    }
    return (
        <>
            <Divider orientation="center">კურსის დეტალები</Divider>
            <List
                size="large"
                bordered
                dataSource={events}
                renderItem={item => item !== events[5] && <List.Item>{item} </List.Item>}
            />

            <Button
                type='ghost'
                style={{ marginTop: '20px' }}
                icon={<RollbackOutlined />}
                onClick={() => router.back()}>უკან</Button>
        </>
    );
};

export default EventDetails;