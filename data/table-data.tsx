import { Tag } from 'antd';
export const columns: Array<any> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text: string) => <a>{text}</a>,
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
        render: (tags: [any]) => (
            <>
                {
                    tags.map(tag => {
                        let color: string = tag.length > 5 ? 'green' : 'geekblue';
                        if (tag === 'Not featured') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag} >
                                { tag.toUpperCase()}
                            </Tag>
                        );
                    })
                }
            </>
        ),
    },
];