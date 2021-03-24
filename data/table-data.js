import { Tag } from 'antd';
export const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Tags',
        key: 'isFeatured',
        dataIndex: 'isFeatured',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = 'green';
                    if (tag === 'Not featured') {
                        color = 'volcano';
                    } else {
                        tag = 'Featured';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];