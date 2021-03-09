import { List, Divider } from 'antd';
import Link from 'next/link';

const EventDetails = ({ events }) => {
    const ev = events && Object.values(events);
    return (
        <>
            <Divider orientation="center">Event detail</Divider>
            <List
                size="large"
                bordered
                dataSource={ev}
                renderItem={item => typeof item !== 'boolean' && <List.Item>{item}</List.Item>}
            />
            <Link href='/events'>Go back</Link>
        </>
    )
}

export default EventDetails;