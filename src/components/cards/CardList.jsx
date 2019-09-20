import React from 'react';
import  Card from './Cards';
import { data } from '../../data';

export default function CardList() {
    return data.map(app => {
        return(
            <Card {...app} key={app.name} />
        );
    })
}