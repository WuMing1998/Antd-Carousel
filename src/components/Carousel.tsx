import { FC, RefObject, useCallback, useRef, useState, useDeferredValue, useEffect } from "react"
import { CarouselRef } from "antd/lib/carousel";
import { Button, Carousel, Space, } from 'antd';
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';

import type {ChangeDir} from './typing'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center' as 'center',
    background: '#364d79',
};

const CarouselC: FC = () => {
    const carpisel = useRef() as RefObject<CarouselRef>;
    const [nums, setNums] = useState<number[]>([
        1, 2, 3, 4
    ])
    const addDeferred = useDeferredValue(nums)

    
    useEffect(() => {
        console.log(nums)
        carpisel.current?.goTo(nums.length - 1);
    }, [addDeferred])

    const add = useCallback(() => {
        setNums([...nums, nums.length + 1]);
    }, [nums])

    const remove = useCallback(() => {
        setNums(nums.filter((num) => num != nums.length))
    }, [nums])

    const change = (dir:ChangeDir)=>{
        carpisel.current![dir]();
    }

    return (
        <>
            <Carousel ref={carpisel}>
                {nums.map((num, index) => {
                    return (
                        <div key={index}>
                            <h3 style={contentStyle}>{num}</h3>
                        </div>
                    )
                })}
            </Carousel>
            <Space style={{ width: '100%', display: 'flex', 'justifyContent':'space-around' }} align='center'>
                <LeftOutlined onClick={()=>change('prev')} style={{ fontSize: 40 ,color:'#575757'}} />
                <RightOutlined onClick={()=>change('next')} style={{ fontSize: 40 ,color:'#575757'}} />
            </Space>
            <Space style={{ width: '100%', display: 'flex', 'justifyContent': 'center', marginTop: '80px' }} align='center'>
                <Button type="primary" onClick={add}>add</Button>
                <Button type="primary" onClick={remove}>remove</Button>
            </Space>
        </>
    )
}

export default CarouselC