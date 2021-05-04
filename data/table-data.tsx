import { Tag } from 'antd';
export const columns: Array<any> = [
    {
        title: 'კოდი',
        dataIndex: 'id',
        key: 'id',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'სათაური',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'თარიღი',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'ლინკი',
        dataIndex: 'link',
        key: 'link',
        render: (text: string) => <a href={text} target='_blank' style={{ color: 'blue' }}>ლინკი</a>
    },
    {
        title: 'ტეგი',
        key: 'isFeatured',
        dataIndex: 'isFeatured',
        render: (tags: [any]) => (
            <>
                {
                    tags.map(tag => {
                        let color: string = tag.length > 5 ? 'green' : 'geekblue';
                        if (tag === 'Not featured') {
                            color = 'volcano';
                            tag = 'არაპოპულარული'
                        } else {
                            tag = 'პოპულარული'
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