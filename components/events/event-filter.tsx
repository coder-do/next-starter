import * as React from 'react';
import { useRef, useState } from 'react';
import { Button } from 'antd';
import classes from '../../styles/events-search.module.css';

type Props = {
    onSearch: (year: string, month: string) => void;
}

const EventsSearch: React.FC<Props> = ({ onSearch }) => {
    const yearInputRef = useRef<HTMLSelectElement>(null!);
    const monthInputRef = useRef<HTMLSelectElement>(null!);
    const [loading, setLoading] = useState<boolean>(false);

    function submitHandler(event: React.FormEvent<HTMLElement>): void {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        onSearch(selectedYear, selectedMonth);
    }

    function loadingHandler(isLoading: boolean): void {
        setLoading(!isLoading);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {/* TODO replace with antd forms */}
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'>წელი</label>
                    <select id='year' ref={yearInputRef}>
                        <option value='2018'>2018</option>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021'>2021</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='month'>თვე</label>
                    <select id='month' ref={monthInputRef}>
                        <option value='1'>იანვარი</option>
                        <option value='2'>თებერვალი</option>
                        <option value='3'>მარტი</option>
                        <option value='4'>აპრილი</option>
                        <option value='5'>მაისი</option>
                        <option value='6'>ივნისი</option>
                        <option value='7'>ივლისი</option>
                        <option value='8'>აგვისტო</option>
                        <option value='9'>სექტემბერი</option>
                        <option value='10'>ოქტომბერი</option>
                        <option value='11'>ნოემბერი</option>
                        <option value='12'>დეკემბერი</option>
                    </select>
                </div>
            </div>
            <Button type='primary' htmlType='submit' loading={loading} onClick={() => loadingHandler(loading)}>ძებნა</Button>
        </form>
    );
};

export default EventsSearch;